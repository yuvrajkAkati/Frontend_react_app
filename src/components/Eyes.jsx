import { useEffect, useState } from "react"

export function Eyes(){
    const [rotate,setRotate] = useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX
            let mouseY = e.clientY

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY,deltaX)*(180/Math.PI)
            setRotate(angle-180)
        })
    })

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.129">
            <div className=" relative w-full h-screen bg-contain bg-[url('./src/components/1.jpg')] bg-center flex justify-center items-center overflow-hidden" >
            
            <div data-scroll data-scroll-section data-scroll-speed="-.1" className="absolute flex gap-20 ">
            <div  class="py-24 flex items-center justify-center space-x-8">
                <div  class="w-60 h-60 bg-slate-300 border shadow-lg rounded-full flex justify-center items-center">
                <div class="inner circle w-40 h-40 bg-black shadow-lg rounded-full relative">
                        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-black w-full px-[0.2vw]">
                            <div className="eyeballs bg-yellow-300  w-1/4 rounded-full h-4 w-4">
                            </div>
                        </div>
                </div>
                </div>
                <div class="w-60 h-60 bg-slate-300 border shadow-lg rounded-full flex justify-center items-center">
                <div class="inner circle w-40 h-40 bg-black shadow-lg rounded-full relative">
                        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-black w-full px-[0.2vw]">
                            <div className="eyeballs bg-yellow-300  w-1/4 rounded-full h-4 w-4">
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}