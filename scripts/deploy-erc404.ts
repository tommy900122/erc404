import { types, task } from "hardhat/config";


task("deploy:erc404", "deploy erc404 token")
    .addParam("name", "erc20 name", "", types.string)
    .addParam("symbol", "erc20 symbol", "", types.string)
    .addParam("decimal", "erc20 decimal", 18, types.int)
    .addParam("totalnft", "total of nft", 10000, types.int)
    .setAction(async (taskArgs, hre) => {
        const name: string = taskArgs.name;
        const symbol: string = taskArgs.symbol;
        const decimal: number = taskArgs.decimal;
        const totalnft: number = taskArgs.totalnft;

        const erc404Contract = await hre.ethers.getContractFactory(
            "ERC404Example"
        );
        const singer = await hre.ethers.getSigners();
        const owner = singer[0].address;

        const erc404 = await erc404Contract.deploy(
            name, symbol, decimal, totalnft, owner, owner
        )

        console.log(`token: ${await erc404.getAddress()}`)

        // await hre.run("verify:verify", {
        //     address: await erc404.getAddress(),
        //     constructorArguments: [name, symbol, decimal, totalnft, owner, owner],
        //     contract: "contracts/examples/ERC404Example.sol:ERC404Example",
        // });
    })