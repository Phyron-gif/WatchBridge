import { MdSearch } from "react-icons/md"

function Search(){
    return(
        <>
        <div className="bg-white shadow-sm flex gap-2  rounded-lg p-2 items-center md:w-1/3 ">
         {<MdSearch className=" text-center text-gray-600 text-lg"/>}
        <input 
        type="text"
        placeholder="Search jobs, companies..."
        className="text-gray-600 text-sm outline-none"
        
        ></input>
       
       
        
        </div>
        </>
    )
}
export default Search