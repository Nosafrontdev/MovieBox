import { Link } from "react-router";
function NavBar() {
    return (  
        <nav className='bg-gray-900 text-white px-6 py-4 shadow-md flex items-center justify-between'>
            <Link to ='/' className='text-2xl font-bols text-white-500 hover:text-red-400'> MovieBox </Link>

            <div className='flex space-x-6'>
                <Link to ='/search' className='text-white hover:text-red-400 transition duration-300'> Search </Link>
                <Link to = '/favourite' className='text-white hover:text-red-400 transition duration-300'> Favorites </Link>
            </div>

        </nav>
    );
}

export default NavBar;