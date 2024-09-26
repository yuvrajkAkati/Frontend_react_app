

export function Cards(){
    return (
        <div className="w-full h-screen flex items-center gap-5 px-20">
            <div className="cardcontainer  h-[50vh] w-1/2">
                <div className="card w-full rounded-xl h-full flex items-center justify-center bg-orange-700">
                    <img className="w-2/4 h-3/4  rounded-xl" src="./src/components/icon1.jpg" alt="" />
                </div>
            </div>

            <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
                <div className="card w-1/2 h-full  rounded-xl bg-orange-900 flex items-center justify-center ">
                    <img className="w-1/4 h-1/4  rounded-xl" src="./src/components/34.jpg" alt="" /> 
                </div>
                <div className="card w-1/2 h-full bg-blue-900 rounded-xl flex items-center justify-center">
                    <img className="w-40  rounded-xl" src="./src/components/icon2.jpg" alt="" />
                </div>
            </div>

        </div>
    )
}