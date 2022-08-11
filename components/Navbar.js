import { useState } from 'react'

import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose,AiFillTag } from 'react-icons/ai'
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdHelp,MdFavorite } from 'react-icons/md'

const Navbar = () => {
    const [nav, setNav]  = useState(false)
    return ( 
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center gap-2'>
                <div className='cursor-pointer' onClick={() => setNav(!nav)}>
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className='text-gray-900 text-xl sm:text-3xl lg:text-4xl px-2'>Devilery <span className='font-bold'>Foods</span></h1>
                <div className='hidden lg:flex items-center bg-gray-300 rounded-full p-1 gap-1 '>
                    <p className='bg-gray-900 text-white rounded-full p-2'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>
            <div className='bg-gray-200 rounded-full flex items-center gap-2 p-2 w-[200px] sm:w-[350px] lg:w-[450px]'>
                <AiOutlineSearch size={20} />
                <input type="text" placeholder='Search Food' className='bg-transparent p-2 w-full' />
            </div>
            <button className='bg-gray-900 text-white hidden md:flex items-center py-2 gap-2 rounded-full hover:bg-white hover:text-gray-900 hover:duration-500 border border-black'>
                <BsFillCartFill size={20} /> Cart
            </button>

            {/* Mobile Menu */}
            {nav && <div className='bg-black/80 fixed w-full h-screen z-20 top-0 left-0' ></div>}
            {nav && <div className='fixed top-0 left-0 w-3/4 sm:w-1/3  h-screen bg-white z-30' >
                <AiOutlineClose size={30} className='absolute top-4 right-4 cursor-pointer' onClick={() => setNav(!nav)}/>
                <h2 className='text-2xl p-4'>Delivery <span className='font-bold'>Foods</span></h2>
                <nav>
                    <ul className='flex flex-col px-3 text-gray-600'>
                        <li className='text-xl p-4 flex items-center cursor-pointer'><TbTruckDelivery size={25} className='mr-4'/>Orders</li>
                        <li className='text-xl p-4 flex items-center cursor-pointer'><MdFavorite size={25} className='mr-4'/>Favorites</li>
                        <li className='text-xl p-4 flex items-center cursor-pointer'><FaWallet size={25} className='mr-4'/>Wallet</li>
                        <li className='text-xl p-4 flex items-center cursor-pointer'><MdHelp size={25} className='mr-4'/>Help</li>
                        <li className='text-xl p-4 flex items-center cursor-pointer'><AiFillTag size={25} className='mr-4'/>Promotions</li>
                        <li className='text-xl p-4 flex items-center cursor-pointer'><BsFillSaveFill size={25} className='mr-4'/>Best One</li>
                        <li className='text-xl p-4 flex items-center cursor-pointer'><FaUserFriends size={25} className='mr-4'/>Invite Friends</li>
                    </ul>
                </nav>
            </div>}

        </div>
     );
}
 
export default Navbar;