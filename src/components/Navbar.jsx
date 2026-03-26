import { Link } from "react-router-dom"

function Navbar(){
    return(
        <>
        <header className="sticky top-0 right-0 left-0 p-4 flex justify-between bg-white shadow-lg z-100 ">
            <div>
                <Link className="text-green-500 text-2xl font-bold" to='/'>WatchBridge</Link>
            </div>
            <div >
                <nav className="flex gap-6">
                <Link className="text-gray-700  hover:text-green-700" to='/'>Home</Link>
                 <Link className="text-gray-700  hover:text-green-700" to='/report'>Report Issue</Link>
                <Link className="text-gray-700  hover:text-green-700" to='/safety'>Safety Map</Link>
                <Link className="text-gray-700  hover:text-green-700" to='/Opportunities'>Opportunities</Link>
                </nav>
                
            </div>
            <div>
                <Link className='px-6 py-2 bg-green-600 text-white  font-semibold rounded-sm shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition duration-200 ease-in-out' to='login'>Login</Link>
            </div>

        </header>
          
        
        </>
    )
}
export default Navbar