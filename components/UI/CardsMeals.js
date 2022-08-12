const CardsMeals = (props) => {
    return (                 
    <div className='flex flex-col justify-between bg-white rounded-xl h-[300px] md:w-1/5 w-1/2 p-2'>
        <img src={props.img} alt="Meal" className='object-cover w-full h-1/2 rounded-t-lg' />
        <h3 className='text-center text-gray-800 text-lg px-2 pt-2 font-bold'>{props.name}</h3>
        <p className='text-center text-gray-500 text-lg pb-8 font-bold'>Price {props.price}</p>
    </div> );
}
 
export default CardsMeals;