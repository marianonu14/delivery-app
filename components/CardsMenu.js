const CardsMenu = (props) => {
    return (                 
    <div className='flex flex-col justify-evenly bg-white shadow-xl rounded-xl md:h-[260px] w-full hover:scale-105 hover:shadow-2xl duration-500 cursor-pointer'>
        <img src={props.img} alt="Meal" className='object-cover w-full h-1/2 rounded-t-lg' />
        <h3 className='text-center text-gray-800 text-lg px-2 pt-2 font-bold'>{props.name}</h3>
    </div> );
}
 
export default CardsMenu;