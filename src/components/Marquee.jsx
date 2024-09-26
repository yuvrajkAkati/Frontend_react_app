import {motion} from 'framer-motion'

export function Marquee(){

    return (
        
        <div data-scroll data-scroll-section data-scroll-speed="-.009" className="">
            <div className="w-full h-[30vw] bg-red-700 flex items-center rounded-lg">
            <div className="w-full h-[28vw] border-t-2 border-red-900 border-b-2 whitespace-nowrap flex text-shadow-lg text-red-900 overflow-hidden">
                <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat : Infinity , duration : 7}} className=" uppercase font-bold text-[20vw] tracking-tighter pl-4 flex-shrink-0  pr-20"> awesome website</motion.div>
                <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat : Infinity , duration : 7}} className=" uppercase font-bold text-[20vw] tracking-tighter pl-4 flex-shrink-0 pr-20" > awesome website</motion.div>                
            </div>
        </div>
        </div>
    )
}