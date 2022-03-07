// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract OAToken721 is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    IERC20 token;
    uint256 nftPrice;

    constructor() ERC721("OATokenNFT", "ONFT") {
        nftPrice = 100e18;
    }

    function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256) {
        require(token.balanceOf(recipient) >= nftPrice);

        token.transferFrom(recipient, msg.sender, nftPrice);

        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function setToken(address tokenAddress) public onlyOwner returns (bool) {
        require(tokenAddress != address(0x0));
        token = IERC20(tokenAddress);
        return true;
    }

    function test(address tokenaddr) public view returns (uint256) {
        return token.balanceOf(tokenaddr);
    }

    function checkAllw (address owner,address spender) public view returns(uint256){
       return token.allowance(owner,spender);
    }

}
