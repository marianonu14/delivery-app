import { useState } from 'react'
import ButtonMeals from './UI/ButtonMeals'
import CardsMeals from './UI/CardsMeals'

import { data } from '../data/data' 

const Main = () => {
    console.log(data)
    
    const [btnSearch, setBtnSearch] = useState('pizza');
    const [btnSelected , setBtnSelete] = useState({
        burger: true,
        pizza: false,
        salad:false,
        chicken: false
    })

    const handleBtn = (e) => {
        console.log(e)
    }

    const arraySelect = data.filter(elem => elem.category === btnSearch);

    return ( 
        <div className="bg-gray-900 h-full">
            <h1 className='text-center p-10 text-orange-500 font-bold text-3xl md:text-5xl'>Our <span className='text-white'>Meals</span></h1>
            <div className='flex flex-wrap justify-evenly gap-5 p-10'>
                <ButtonMeals title={'Burger'} selected={btnSelected.burger} handleBtn={handleBtn}/>
                <ButtonMeals title={'Pizza'} selected={btnSelected.pizza} handleBtn={handleBtn}/>
                <ButtonMeals title={'Salad'} selected={btnSelected.salad} handleBtn={handleBtn}/>
                <ButtonMeals title={'Chicken'} selected={btnSelected.chicken} handleBtn={handleBtn}/>
            </div>
            <div className='flex flex-wrap md:flex-row justify-evenly gap-10 p-5'>
                {arraySelect.map(items => 
                <CardsMeals key={items.id} img={items.image} name={items.name} price={items.price}  />)}   
            </div>
        </div>
     );
}
 
export default Main;