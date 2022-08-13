const Footer = () => {
    return (
        <div className=" bg-gray-900 h-full p-10">
            <div className="grid md:grid-cols-3 p-10">
                <div className="p-5">
                    <h2 className="text-2xl text-orange-500 p-2">Services</h2>
                    <ul className='flex flex-col px-3 text-gray-300 text-lg'>
                        <li className='p-1 flex items-center cursor-pointer'>Orders</li>
                        <li className='p-1 flex items-center cursor-pointer'>Favorites</li>
                        <li className='p-1 flex items-center cursor-pointer'>Wallet</li>
                        <li className='p-1 flex items-center cursor-pointer'>Help</li>
                        <li className='p-1 flex items-center cursor-pointer'>Promotions</li>
                        <li className='p-1 flex items-center cursor-pointer'>Best One</li>
                        <li className='p-1 flex items-center cursor-pointer'>Invite Friends</li>
                    </ul>
                </div>
                <div className="p-5">
                    <h2 className="text-2xl text-orange-500 p-2">Overview</h2>
                    <ul className='flex flex-col px-3 text-gray-300 text-lg'>
                        <li className='p-1 flex items-center cursor-pointer'>About</li>
                        <li className='p-1 flex items-center cursor-pointer'>Careers</li>
                        <li className='p-1 flex items-center cursor-pointer'>Press</li>
                        <li className='p-1 flex items-center cursor-pointer'>Contact</li>
                        <li className='p-1 flex items-center cursor-pointer'>Terms of Use</li>
                    </ul>
                </div>
                <div className="p-5">
                    <h2 className="text-2xl text-orange-500 p-2">Community</h2>
                    <ul className='flex flex-col px-3 text-gray-300 text-lg'>
                        <li className='p-1 flex items-center cursor-pointer'>Community Central</li>
                        <li className='p-1 flex items-center cursor-pointer'>Support</li>
                        <li className='p-1 flex items-center cursor-pointer'>Help</li>
                        <li className='p-1 flex items-center cursor-pointer'>Do Not Sell My Info</li>
                    </ul>
                </div>
            </div>
            <p className="block text-white text-center text-xl p-5">Mariano Nuñez - All Right Reserved - {new Date().getFullYear()}</p>
        </div> 

     );
}
 
export default Footer;