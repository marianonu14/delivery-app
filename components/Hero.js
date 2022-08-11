
const Hero = () => {
    const btnClass = "bg-orange-600 rounded-full px-5 py-3 md:px-8 md:py-4 text-xl md:text-3xl hover:bg-white hover:text-orange-600 hover:duration-500"
    return ( 
        <div>
            <div>
                <div className="absolute w-full h-[500px] text-4xl text-white bg-black/70 flex flex-col md:flex-row items-center md:justify-evenly justify-center gap-10 top-15 z-10">
                    <h1 className="text-3xl md:text-5xl">The <span className="font-bold text-orange-600">Best</span> Food in <span className="font-bold text-orange-600">Town</span></h1>
                    <button className={btnClass}>Order Now</button>
                </div>
                <div className="hero relative h-[500px]"></div>
            </div>  
        </div>
     );
}
 
export default Hero;