// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./zombiehelper.sol";
import "./libs/SafeMath.sol";

contract ZombieAttack is ZombieHelper {
    using SafeMath for uint256;
    using SafeMath32 for uint32;
    using SafeMath16 for uint16;

    uint256 randNonce = 0;
    uint256 attackVictoryProbability = 70;

    function randMod(uint256 _modulus) internal returns (uint256) {
        randNonce = randNonce.add(1);

        return
            uint256(
                keccak256(
                    abi.encodePacked(block.timestamp, msg.sender, randNonce)
                )
            ) % _modulus;
    }

    function attack(uint256 _zombieId, uint256 _targetId)
        external
        onlyOwnerOf(_zombieId)
    {
        Zombie storage myZombie = zombies[_zombieId];
        Zombie storage enemyZombie = zombies[_targetId];
        uint256 rand = randMod(100);

        if (rand <= attackVictoryProbability) {
            myZombie.winCount = myZombie.winCount.add(1);
            myZombie.level = myZombie.level.add(1);
            enemyZombie.lossCount = enemyZombie.lossCount.add(1);
            feedAndMultiply(_zombieId, enemyZombie.dna, "zombie");
        } else {
            myZombie.lossCount = myZombie.lossCount.add(1);
            enemyZombie.winCount = enemyZombie.winCount.add(1);
            _triggerCooldown(myZombie);
        }
    }
}