import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x7b8F3Fe3d27bEcbd19D57a63d98AD0f03dE547c0";

async function main() {
  const caller = await ethers.getContractAt("Caller", CONTRACT_ADDRESS);

  await caller.callAttempt()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
