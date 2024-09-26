
export function Feature(){
    return (
        <div className="w-full rounded-lg py-20 ">
            <div className="w-full border-b-[0.1vw] border-zinc-400 p-20">
                <h1 className="text-6xl font-light tracking-tighter"> Featured projects : </h1>
            </div>
        
            <div className="px-20">
                <div className="cards w-full flex gap-10 mt-10">

                    <div className="cardcontainer relative rounded-xl w-1/2  h-[75vh] bg-red-500 ">
                        <h1 className="absolute z-[9] text-8xl font-light tracking-tighter uppercase leading-none top-1/2 -translate-y-1/2 -translate-x-1/2 left-full">
                        {("nypd").split().map((item,index)=>{
                            return <span>{item}</span>
                        })}
                    </h1>
                        <div className="card w-full h-full rounded-xl bg-cover bg-black overflow-hidden">
                            <img className='w-full h-full bg-cover bg-center' src="./src/components/3.png" alt="" />
                        </div>
                    </div>
                    
                    <div className="cardcontainer relative rounded-xl w-1/2  h-[75vh] bg-red-500 ">
                    <h1 className="absolute z-[9] text-8xl font-light tracking-tighter uppercase leading-none top-1/2 -translate-y-1/2 translate-x-1/2 right-full">
                    {("Vice").split().map((item,index)=>{
                        return <span>{item}</span>
                    })}
                    </h1>
                        <div className="card w-full h-full rounded-xl bg-black overflow-hidden">
                            <img className='w-full h-full bg-cover bg-center rounded-xl '  src="./src/components/22.jpg" alt="" />
                        </div>
                    </div>     

                </div>
            </div>
        
        
        </div>
            

       
    )
}

       
