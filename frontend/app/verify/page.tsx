"use client";

import { useState } from "react";
import GlassCard from "@/components/glass-card";

export default function VerifyPage(){

const[
form,
setForm
]=useState({

serial:"",
brand:"",
year:""

});

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

serial:
e.target.value

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

brand:
e.target.value

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

year:
e.target.value

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

</div>

</GlassCard>

</div>

</main>

)

}