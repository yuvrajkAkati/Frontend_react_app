import { motion } from "framer-motion"

export function Navbar(){
    
    return <div className="flex w-full fixed z-[999] justify-between pt-5 pb-3 px-5 items-center bg-zinc-900">
                <div className="logo "><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
        </svg>
                </div>
                
        <div className="flex rounded-xl">
            {["services","about","works","insights","contact"].map((item,index)=>{
                return (
                <motion.div whileHover={{
                    scale : 1.1,
                    color : "",
                    borderBottom : "solid"
                }}

                transition={{
                    ease: [0.76,0,0.24,1]
                  }}
                
                key={index} className={`text-lg px-6 font-light uppercase  tracking-tight text-red-300 ${index === 4 && "ml-32"}`}>
                        {item}
                </motion.div>
                )
            })}
        </div>
    </div>
}