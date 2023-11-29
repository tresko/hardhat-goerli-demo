// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Caller {
    Contract public target;

    constructor(address _target) {
        target = Contract(_target);
    }

    function callAttempt() external {
        target.attempt();
    }
}

contract Contract {
    event Winner(address);

    function attempt() external {
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        emit Winner(msg.sender);
    }
}
