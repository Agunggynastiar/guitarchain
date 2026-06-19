"use client";

import { useEffect, useState } from "react";
import { connectWallet } from "@/lib/wallet";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() { 
    const pathname = usePathname();

const [wallet,setWallet]=
useState("");

useEffect(()=>{

const saved=
localStorage.getItem(
"wallet"
);

if(saved){

setWallet(saved);

}

},[]);
async function handleConnect(){

const address=
await connectWallet();

if(address){

const short=

address.slice(0,6)+
"..."+
address.slice(-4);

setWallet(short);

localStorage.setItem(
"wallet",
short
);

}

}

return(

<header
className="
fixed
top-0
left-0
right-0
z-50
border-b
border-[#2B211C]
bg-[#1C1410]/70
backdrop-blur
"
>

<div
className="
mx-auto
flex
max-w-7xl
items-center
justify-between
px-8
py-5
"
>

<div
className="
font-bold
text-xl
text-[#C9A24B]
"
>
GuitarChain
</div>

<nav
className="
hidden
items-center
gap-8
md:flex
"
>

<Link
href="/marketplace"
className={
pathname==="/marketplace"
?
"text-[#C9A24B]"
:
"text-[#F3EDE0] hover:text-[#C9A24B]"
}
>
Marketplace
</Link>

<Link
href="/verify"
className={
pathname==="/verify"
?
"text-[#C9A24B]"
:
"text-[#F3EDE0] hover:text-[#C9A24B]"
}
>
Verify
</Link>

<Link
href="/sell"
className={
pathname==="/sell"
?
"text-[#C9A24B]"
:
"text-[#F3EDE0] hover:text-[#C9A24B]"
}
>
List
</Link>

</nav>

<button
onClick={handleConnect}
className="
rounded-xl
bg-[#C9A24B]
px-5
py-2
font-semibold
text-black
"
>

{
wallet
||
"Connect Wallet"
}

</button>

</div>

</header>

)

}