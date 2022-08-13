const CardsMenu = (props) => {
    return (                 
    <div className='flex flex-col justify-evenly bg-white shadow-xl rounded-xl md:h-[260px] md:w-full w-3/4 p-2 hover:scale-105 duration-500 cursor-pointer mx-auto'>
        <img src={props.img} alt="Meal" className='object-cover w-full h-1/2 rounded-t-lg' />
        <h3 className='text-center text-gray-800 text-lg px-2 pt-2 font-bold'>{props.name}</h3>
    </div> );
}
 
export default CardsMenu;