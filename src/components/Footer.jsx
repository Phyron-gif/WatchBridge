import {  MdOutlinePublic, MdOutlineShare } from "react-icons/md"
import { Link } from "react-router-dom"

function Footer(){
    return(
        <>
         <div className="bg-slate-200  bottom-0 left-0 right-0 p-6 flex justify-between gap- items-center  shadow-lg ">
            
       
    
        {/*## Left section*/}
        <div>
            <Link to='/' className="text-green-600 font-bold mb-2">WatchBride</Link>
            <p className="text-sm font-thin text-gray-700">&copy; 2026 WatchBridge. Empowering community safety</p>
        </div>

          {/*## Middlle section*/}
        <div>
            <nav className="text-sm flex flex-col gap-4  md:flex-row ">
                <Link className="hover:text-green-800">Privacy Policy</Link>
                <Link className="hover:text-green-800">Terms of service</Link>
                <Link className="hover:text-green-800">Accessibility</Link>
                <Link className="hover:text-green-800">Contact Suport</Link>
            </nav>

        </div>
          {/*## Right section*/}
        <div className="flex flex-col gap-2 md:flex-row  md:gap-4">
             <div className="w-12 h-12 flex items-center justify-center rounded-full 
                  bg-slate-300 text-green-800 mb-4">
                {<MdOutlineShare/>}
    
             </div>
           <div className="w-12 h-12 flex items-center justify-center rounded-full 
                  bg-slate-300 text-green-800 mb-4">
                     {<MdOutlinePublic/>}
    
             </div>
            
        </div>
         </div>
        
        </>
    )
}
export default Footer