
const Hero = () => {
    const btnClass = "bg-orange-600 rounded-full px-6 py-4 md:px-8 md:py-4 text-lg md:text-3xl hover:bg-white hover:text-orange-600 hover:duration-500"
    
    return ( 
        <div className="shadow-xl">
            <div className="absolute w-full h-screen text-4xl text-white bg-black/70 flex flex-col md:flex-row items-center md:justify-evenly justify-center gap-32 md:gap-10 z-10 md:px-8 px-4">
                <h1 className="text-4xl md:text-6xl text-center">The <span className="font-bold text-orange-600">Best</span> Food in <span className="font-bold text-orange-600">Town</span></h1>
                <button className={btnClass}>Order Now</button>
            </div>
            <div className="hero relative h-screen"></div>
        </div>
     );
}
 
export default Hero;