async function main() {

const Verifier =
await ethers.getContractFactory(
"Groth16Verifier"
);

const verifier =
await Verifier.deploy();

await verifier.waitForDeployment();

console.log(
"Verifier:",
await verifier.getAddress()
);

const Registry =
await ethers.getContractFactory(
"GuitarRegistry"
);

const registry =
await Registry.deploy();

await registry.waitForDeployment();

console.log(
"Registry:",
await registry.getAddress()
);

}

main()
.catch((err)=>{

console.error(err);

process.exit(1);

});