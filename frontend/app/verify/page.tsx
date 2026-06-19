"use client";

import { useState } from "react";
import {
createGuitarHash,
normalizeInput
} from "@/lib/hash";

import GlassCard from "@/components/glass-card";

export default function VerifyPage(){

const [form,setForm]=useState({
serial:"",
brand:"",
year:""
});

const [hash,setHash]=useState("");

const [
preview,
setPreview
]=useState<
null|
{
serial:string
brand:string
year:string
}
>(null);

async function generate(){

if(
!form.serial||
!form.brand||
!form.year
){

alert(
"Lengkapi data"
);

return;

}

const clean=
normalizeInput(
form.serial,
form.brand,
form.year
);

setPreview(
clean
);

const result=
await createGuitarHash(
clean.serial,
clean.brand,
clean.year
);

setHash(
result
);

}

async function copyHash(){

if(!hash)return;

await navigator
.clipboard
.writeText(
hash
);

alert(
"Hash copied"
);

}

return(

<main
className="
min-h-screen
bg-[#1C1410]
px-8
pt-36
text-[#F3EDE0]
"
>

<div
className="
mx-auto
max-w-3xl
"
>

<h1
className="
mb-4
text-5xl
font-bold
"
>

Verify Guitar

</h1>

<p
className="
mb-10
text-zinc-400
"
>

Generate a Zero Knowledge
Proof without exposing
ownership data.

</p>

<GlassCard>

<div
className="
space-y-6
"
>

<input
placeholder="Serial Number"
value={form.serial}
onChange={(e)=>

setForm({
...form,
serial:e.target.value
})

}
className="
w-full
rounded-xl
bg-[#2A201A]
p-4
outline-none
"
/>

<input
placeholder="Brand"
value={form.brand}
onChange={(e)=>

setForm({
...form,
brand:e.target.value
})

}
className="
w-full
rounded-xl
bg-[#2A201A]
p-4
outline-none
"
/>

<input
placeholder="Production Year"
value={form.year}
onChange={(e)=>

setForm({
...form,
year:e.target.value
})

}
className="
w-full
rounded-xl
bg-[#2A201A]
p-4
outline-none
"
/>

<button
onClick={generate}
className="
w-full
rounded-xl
bg-[#C9A24B]
p-4
font-semibold
text-black
transition
hover:scale-[1.01]
"
>

Generate Proof

</button>

{

hash && (

<div
className="
space-y-4
"
>

<div
className="
inline-flex
rounded-full
bg-green-700/20
px-4
py-2
text-sm
text-green-400
"
>

Proof Generated

</div>

{

preview&&(

<div
className="
rounded-xl
bg-[#2A201A]
p-4
text-sm
space-y-2
"
>

<p>
Serial: {preview.serial}
</p>

<p>
Brand: {preview.brand}
</p>

<p>
Year: {preview.year}
</p>

</div>

)

}

<div
className="
overflow-hidden
rounded-2xl
border
border-[#3A2D25]
bg-black/30
p-5
"
>

<p
className="
mb-2
text-sm
text-zinc-400
"
>

Generated Hash

</p>

<button
onClick={copyHash}
className="
mb-4
rounded-lg
border
border-[#C9A24B]
px-3
py-2
text-sm
text-[#C9A24B]
"
>

Copy

</button>

<p
className="
break-all
font-mono
text-[#C9A24B]
"
>

{hash}

</p>

</div>

</div>

)

}

</div>

</GlassCard>

</div>

</main>

)

}