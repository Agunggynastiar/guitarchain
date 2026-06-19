
export default function Home() {
 return (

<main className="min-h-screen bg-[#1C1410] text-[#F3EDE0]">

<section
className="
mx-auto
max-w-6xl
px-8
pt-40
pb-28
"
>

<p className="mb-4 text-[#C9A24B]">
Zero Knowledge Guitar Verification
</p>

<h1 className="max-w-4xl text-6xl font-bold leading-tight">
Prove a guitar is authentic
without revealing ownership data.
</h1>

<p className="mt-8 max-w-2xl text-lg text-zinc-300">
Verify authenticity using
Merkle Tree batching,
Zero Knowledge Proof,
and Sepolia blockchain.
</p>

<div className="mt-10 flex gap-4">

<button
className="
rounded-xl
bg-[#C9A24B]
px-6
py-3
text-black
font-semibold
"
>
Verify Guitar
</button>

<button
className="
rounded-xl
border
border-[#C9A24B]
px-6
py-3
"
>
List Guitar
</button>

</div>

</section>

</main>
)
}