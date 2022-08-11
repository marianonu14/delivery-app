import Image from "next//image";

const Card = (props) => {
    const btnClass = "bg-gray-900 text-orange-500  rounded-full p-3 text-xl hover:bg-white hover:text-orange-600 hover:duration-500 w-2/3 mx-auto"

    return ( 
    <div className="card-container flex flex-col justify-between p-5 gap-3 rounded-xl w-[90%] md:w-[450px] mx-auto max-h-[300px]">
        <div className="relative rounded-xl overflow-hidden">
            <div className="absolute h-full w-full z-10 flex flex-col items-center justify-center gap-7 bg-black/60">
                <p className="text-center text-xl text-white capitalize">{props.text}</p>
                <p className="text-center text-xl text-white"><span className="font-bold tracking-wide">USD</span> {props.price}</p>
                <button className={btnClass}>Order Now</button>
            </div>
            <div className="min-h-[300px]">
                <Image src={props.img} alt="Card Image" layout="fill" />
            </div>
        </div>
    </div>
 );
}
 
export default Card;