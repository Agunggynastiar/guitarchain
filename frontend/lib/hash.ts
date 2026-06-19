export async function createGuitarHash(
serial:string,
brand:string,
year:string
){

const data=
`${serial}-${brand}-${year}`;

const encoded=
new TextEncoder()
.encode(data);

const buffer=
await crypto
.subtle
.digest(
"SHA-256",
encoded
);

return Array
.from(
new Uint8Array(
buffer
)
)
.map(
b=>
b
.toString(16)
.padStart(
2,
"0"
)
)
.join("");

}