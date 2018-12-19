//Inicio
pragma solidity >=0.4.24;

contract Register {
    address public owner;
    bytes32 private info;

    constructor() public {
        owner = msg.sender;
    }
    
    function setInfo(bytes32 _info) public {
        info = _info;
    }
    
    function getInfo() public view returns (string infostring) {
        return bytes32ToStr(info);
    }

    function kill() public { 
        if (msg.sender == owner)  
            selfdestruct(owner);
    } 

    function bytes32ToStr(bytes32 _bytes32) public pure returns (string) {
        bytes memory bytesArray = new bytes(32);
        for (uint256 i; i < 32; i++) {
            bytesArray[i] = _bytes32[i];
            }
        return string(bytesArray);
    } 
               
}
//Fim