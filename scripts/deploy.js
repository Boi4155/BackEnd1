const main = async () => {
    const bettingContractFactory = await hre.ethers.getContractFactory("BettingContract");
    const bettingContract = await bettingContractFactory.deploy();
    await bettingContract.deployed();
    console.log("Contract deployed to:", bettingContract.address);
    let funded = await hre.fundLink(hre, bettingContract.address);
    console.log("Contract funded with LINK!");

};
const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
runMain();