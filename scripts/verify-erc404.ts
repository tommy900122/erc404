import { types, task } from "hardhat/config";


task("verify:erc404", "verify erc404 token")
    .addParam("contract", "contract address", "", types.string)
    .addParam("name", "erc20 name", "", types.string)
    .addParam("symbol", "erc20 symbol", "", types.string)
    .addParam("decimal", "erc20 decimal", 18, types.int)
    .addParam("totalnft", "total of nft", 10000, types.int)
    .setAction(async (taskArgs, hre) => {
        const contract: string = taskArgs.contract;
        const name: string = taskArgs.name;
        const symbol: string = taskArgs.symbol;
        const decimal: number = taskArgs.decimal;
        const totalnft: number = taskArgs.totalnft;

        const singer = await hre.ethers.getSigners();
        const owner = singer[0].address;

        await hre.run("verify:verify", {
            address: contract,
            constructorArguments: [name, symbol, decimal, totalnft, owner, owner],
            contract: "contracts/examples/ERC404Example.sol:ERC404Example",
        });
    })