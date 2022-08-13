import { BsCartPlus } from 'react-icons/bs'

const ButtonMeals = (props) => {
    const btnSelected = "flex justify-center items-center gap-4 text-white  rounded-full p-3 text-md w-[150px] md:w-[250px] mx-auto bg-orange-500"
    const btnDisabled = "flex justify-center items-center gap-4 text-white  rounded-full p-3 text-md w-[150px] md:w-[250px] mx-auto bg-gray-500"

    return ( 
        <div>
            <button className={ props.selected ? btnSelected : btnDisabled} onClick={() => props.handleBtn(props.title.toLowerCase())}>{props.title}<BsCartPlus /></button>
        </div>
     );
}
 
export default ButtonMeals;