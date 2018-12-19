var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// Código para interagir com o contrato
var accounts;
var account;

// Variáveis preenchidas a partir da publicação do contrato
var contractAddress = '0x4f3b89c977ca83a9708a83df646fee6c19d8e2e7';
var abi = JSON.parse( '[{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getInfo","outputs":[{"name":"infostring","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_info","type":"bytes32"}],"name":"setInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_bytes32","type":"bytes32"}],"name":"bytes32ToStr","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]' );



baseContract = web3.eth.contract(abi);
contract = baseContract.at(contractAddress);

// Busca contas
web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
        alert("Ocorreu um erro ao buscar suas contas.");
        return;
    }

    if (accs.length == 0) {
        alert("Nenhuma conta encontrada! Verifique se o Ethereum client está configurado corretamente.");
        return;
    }

    accounts = accs;
    account = accounts[0];
    console.log('Account: ' + account);
    web3.eth.defaultAccount = account;
});

function newRegister() {
    info = $("#newInfo").val();
    //alert (info);
    contract.setInfo (info, {from:web3.eth.accounts[0], gas: 1000000}); 
    $("#newInfo").val('');
}

function loadRegister() {
    info = contract.getInfo ();     
    //alert (info);
    document.getElementById('lastInfo').innerHTML = info;
}

