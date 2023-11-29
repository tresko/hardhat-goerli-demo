import { ethers } from "hardhat";

async function main() {
  const CONTRACT_ADDRESS = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502"
  const caller = await ethers.deployContract("Caller", [CONTRACT_ADDRESS]);

  await caller.waitForDeployment();

  console.log(`Caller was deployed to ${caller.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
