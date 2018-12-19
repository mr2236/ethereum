function checkBalances() {
    
    var allAccountsNetwork = [];
    allAccountsNetwork.push({ name: "Sol", address: "0x3af6808c301395f00dd602d93ebbd1314371cfe3"});
    allAccountsNetwork.push({ name: "rocha", address: "0xb91aa6d20e284149914ac0ba0c003d5bf351a39b"});
    allAccountsNetwork.push( { name: 'samyr', address: '0xf5bf74ba760a054f2b4d56ee71759d2a8bca3500' } );
    allAccountsNetwork.push( { name: 'saulo', address: '0xadc0baf69623abb2384b3af277e0553806357f6d' } );
    allAccountsNetwork.push( { name: 'Fabiano', address: '0x84214d28dc7633097d4ee276ea9f282bd5774480' } );
    allAccountsNetwork.push( { name: 'Anderson', address: '0x401bbb304ea54b89c46446931b65f414e5444cc5' } );
    allAccountsNetwork.push({ name: 'Emerson', address: '0x65d4e2c8e62c435324f4ab69f1f9e870fce355b3' });
    allAccountsNetwork.push({ name: 'Poswar', address: '0x1ce9c7f648d40969a3403471f7e16db01a49b57c' });
    allAccountsNetwork.push({ name: "OSCAR", address: "0x04aa96b33e2414b125cdc844befa66e7fc85dfb3"});
    allAccountsNetwork.push( { name: 'Nelson', address: '0x93c9167b32ab7be40c6010346c7c61dbc5eb29fa' } )
    allAccountsNetwork.push( { name: 'Thiago', address: '0x7b3a59a30705b9dec0fa739bbfdc73a99bf27c4a' } )
    allAccountsNetwork.push( { name: 'FELIPE', address: '0x46fdc1281066a3fd2d200b9d678a40cb06af270b' } )
    allAccountsNetwork.push( { name: 'RafaelC', address: '0x14ae4d38f4cd0dc3e70af48b827912f40ac83d02' } )
    allAccountsNetwork.push( { name: 'Henrique', address: '0xbc25003e30dbdd3e95202219ffabbe1f558cf3f3' } )
    allAccountsNetwork.forEach(function( person) {  
        console.log(person.name, web3.fromWei( eth.getBalance(person.address) , "ether") )
    });
    
}

eth.sendTransaction({from:eth.accounts[0], to:eth.accounts["0x84214d28dc7633097d4ee276ea9f282bd5774480"], value: web3.toWei(100, "ether")})
