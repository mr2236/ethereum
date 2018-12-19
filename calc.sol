pragma solidity ^0.4.24;

contract calc {
    address owner;
    
    constructor() public {
        owner = msg.sender;
    }
    
    function arithmetics(uint _a, uint _b) public pure returns (uint o_sum, uint o_product) {
        o_sum = _a + _b;
        o_product = _a * _b;
    }

    function sum(uint _a, uint _b) public pure returns (uint) {
        return _a + _b;
    }
    
    function multiply(uint _a, uint _b) public pure returns (uint) {
        return _a * _b;
    }
    
    function sub(uint _a, uint _b) public pure returns (uint) {
        return _a - _b;
    }
    
    function div(uint _a, uint _b) public pure returns (uint) {
        return _a / _b;
    }
  
    function kill() public { 
        if (msg.sender == owner)  
            selfdestruct(owner);
    }      
    function isAlive() public pure returns (uint) {
        return 1;
    }   
    
}
