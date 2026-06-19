export default function GlassCard({
children,
}:{
children:React.ReactNode
}){

return(

<div
className="
rounded-3xl
border
border-[#3A2D25]
bg-white/5
backdrop-blur-xl
p-8
shadow-2xl
"
>

{children}

</div>

)

}