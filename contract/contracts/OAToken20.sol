// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OAToken20 is ERC20, Ownable {
    constructor() ERC20("OAToken", "OAT") {
    }
    

    function mintToken(address to, uint256 amount, address contractAddress) public onlyOwner returns (bool) {
        require(to != address(0x0));
        require(amount > 0);
        _mint(to, amount);
        // _approve(to, msg.sender, allowance(to, msg.sender)+amount);  // approve 추가
        _approve(to, contractAddress, allowance(to, contractAddress) + amount);  // approve 추가

        return true;
    }
}