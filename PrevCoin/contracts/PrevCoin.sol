pragma solidity >=0.5.0;

import 'openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol';

contract PrevCoin is ERC20Mintable{
    string public name = "PrevCoin";
    string public symbol = "PRV";
    uint8 public decimals = 18;
}
