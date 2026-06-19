async function main(){

const Registry =
await ethers.getContractFactory(
"GuitarRegistry"
);

const registry =
await Registry.deploy();

await registry.waitForDeployment();

const hash =
ethers.keccak256(
ethers.toUtf8Bytes(
"GIBSON-2022"
)
);

console.log(
"Hash:",
hash
);

await (
await registry.register(
hash
)
).wait();

const exists =
await registry.exists(
hash
);

console.log(
"Registered:",
exists
);

}

main()
.catch((err)=>{

console.error(err);

process.exit(1);

});