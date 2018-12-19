//Inicio 
//Register com mapping para admin, funcao isAlive e bytes32 no lugar de string
pragma solidity >=0.4.24;

contract Register {
    address public owner;
    mapping (address => bool) public admin;
    bytes32 private info;

    constructor() public {
        owner = msg.sender;
        admin[msg.sender] = true;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    function setInfo(bytes32 _info) public {
        require(admin[msg.sender], "Only admin");
            info = _info;
    }
    
    function getInfo() public view returns (string infostring) {
        return bytes32ToStr(info);
    }
    
    function setAdmin(address _admin) public onlyOwner {
        admin[_admin] = true;
    }    
    
    function kill() public onlyOwner { 
        selfdestruct(owner);
    } 

    function isAlive() public pure returns (bool) { 
        return true;
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


