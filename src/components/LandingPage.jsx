import { motion } from "framer-motion"


export function LandingPage(){
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full pt-1 h-screen bg-zinc-900">
            <div className="textstructure mt-52 px-8 uppercase">
            <div className="text-8xl leading-[3.5vw] font-bold tracking-tighter">i create </div>
            <div className="flex pl-2">
                <div className="flex items-center pt-5">
                <motion.div
                initial={{width : 0}}
                animate={{width : "12vw"}}
                transition={{ease: [0.76,0,0.24,1], duration:1}}
                className="element bg-red-500 w-[12vw] h-[6vw] rounded-lg">
                </motion.div>
                </div>
                <div className="text-9xl leading-[vw] font-bold tracking-tighter pl-3">some amazing </div>
            </div>
            <div className="text-8xl leading-[5vw] font-bold tracking-tighter">presentations</div>
            </div>

            <div className="pt-28">
                <div className="border-t-2 border-zinc-800">
                    <div className="pt-3 flex justify-between px-5 font-light uppercase tracking-tighter text-lg">
                        {["for everyone","all the way"].map((item)=>{
                            return(
                                <div>
                                    {item}
                                </div>
                            )
                        })}
                        <div className=""><button className="border border-zinc-500 w-24 rounded-full font-light uppercase tracking-tighter text-lg ">start</button></div>
                    </div>
                </div>
            </div>
        </div>
        )
}