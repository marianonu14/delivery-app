import CardsMenu from "./CardsMenu";

import { categories } from '../data/data' 

const Menu = () => {
    console.log(categories);
    return ( 
        <div className="bg-white h-full shadow-2xl pb-20">
            <h1 className='text-center p-10 text-orange-500 font-bold text-3xl md:text-5xl'>Top <span className='text-gray-900'>Rated</span> Menu</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 px-5'>
                {categories.map(items => 
                <CardsMenu key={items.id} img={items.image} name={items.name}  />)}   
            </div>
        </div>
     );
}
 
export default Menu;