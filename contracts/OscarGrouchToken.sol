// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PermitUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract OscarGrouchToken is Initializable, ERC20Upgradeable, ERC20BurnableUpgradeable, OwnableUpgradeable, ERC20PermitUpgradeable {
    uint256 public constant MAX_SUPPLY = 1000000000000 * 10 ** 18;
    uint256 public feePercent;
    address public feeReceiver;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(address initialOwner, uint256 _feePercent, address _feeReceiver) initializer public {
        __ERC20_init("OscarGrouchToken", "OGT");
        __ERC20Burnable_init();
        __Ownable_init();
        __ERC20Permit_init("OscarGrouchToken");

        feePercent = _feePercent;
        feeReceiver = _feeReceiver;

        _mint(msg.sender, MAX_SUPPLY);
        transferOwnership(initialOwner);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        require(totalSupply() + amount <= MAX_SUPPLY, "ERC20: minting amount exceeds max supply");
        _mint(to, amount);
    }

    function _transfer(address sender, address recipient, uint256 amount) internal virtual override {
        uint256 fee = (amount * feePercent) / 100;
        uint256 amountAfterFee = amount - fee;

        super._transfer(sender, feeReceiver, fee);
        super._transfer(sender, recipient, amountAfterFee);
    }

    function setFeePercent(uint256 _feePercent) external onlyOwner {
        require(_feePercent <= 10, "ERC20: feePercent too high"); // Setting a max limit for the fee
        feePercent = _feePercent;
    }

    function setFeeReceiver(address _feeReceiver) external onlyOwner {
        feeReceiver = _feeReceiver;
    }
}






