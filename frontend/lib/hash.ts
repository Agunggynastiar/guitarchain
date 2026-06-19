export function normalizeInput(
serial:string,
brand:string,
year:string
){

return {

serial:
serial
.trim()
.toUpperCase(),

brand:
brand
.trim()
.toUpperCase(),

year:
year
.trim()

};

}

export async function createGuitarHash(
serial:string,
brand:string,
year:string
){

const clean=
normalizeInput(
serial,
brand,
year
);

const payload=
JSON.stringify(
clean
);

const bytes=
new TextEncoder()
.encode(
payload
);

const digest=
await crypto
.subtle
.digest(
"SHA-256",
bytes
);

return Array
.from(
new Uint8Array(
digest
))
.map(
b=>

b
.toString(16)
.padStart(
2,
"0")

)
.join("");

}