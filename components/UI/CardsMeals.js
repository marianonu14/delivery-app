const CardsMeals = (props) => {
    return (                 
    <div className='flex flex-col justify-between bg-white shadow-2xl rounded-xl h-[260px] md:w-1/5 w-3/4 p-2 hover:scale-105 duration-500 cursor-pointer'>
        <img src={props.img} alt="Meal" className='object-cover w-full h-1/2 rounded-t-lg' />
        <h3 className='text-center text-gray-800 text-lg px-2 pt-2 font-bold'>{props.name}</h3>
        <p className='text-center text-gray-500 text-lg pb-8 font-bold'>Price {props.price}</p>
    </div> );
}
 
export default CardsMeals;