import { Link } from "react-router-dom"

function Navbar(){
    return(
        <>
        <header className="  sticky top-0 right-0 left-0 flex p-4 justify-between bg-white shadow-lg z-100 items-center">
            <div className="">
                <Link className="text-green-500 text-2xl font-bold" to='/'>WatchBridge</Link>
            </div>
            <div >
                <nav className="flex flex-col gap-6 w-full md:flex-row  md:gap-6 justify-between hidden md:block">
                    
                <Link className="text-gray-700  hover:text-green-700" to='/'>Home</Link>
                 <Link className="text-gray-700  hover:text-green-700" to='/report'>Report Issue</Link>
                <Link className="text-gray-700  hover:text-green-700" to='/safety'>Safety Map</Link>
                <Link className="text-gray-700  hover:text-green-700" to='/Opportunities'>Opportunities</Link>
                 
                
                </nav>
                
            </div>
            <div className=''>
                <Link className='  bg-green-600 text-white  font-semibold rounded-sm shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition duration-200 ease-in-out px-2 py-2 md:px-2 md:py-4 text-center md:w-lg' to='login'>Login</Link>
               
            </div>

        </header>
          
        
        </>
    )
}
export default Navbar