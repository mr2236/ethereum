//Inicio
pragma solidity ^0.4.24; //diz a versao do solidity

contract Register {
    address public owner;
    string private info;

    constructor() public {
        owner = msg.sender;
    }
    
    function setInfo(string _info) public {
        info = _info;
    }
    
    function getInfo() public view returns (string) {
        return info;
    }

    function kill() public { 
        if (msg.sender == owner)  
            selfdestruct(owner);
    }        
}
//Fim  