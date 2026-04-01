import { MdSend } from "react-icons/md"

function Buttons(){
    return(
        <>
        <button
        
            type="submit"
              to="/report"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 hover:scale-105 transition duration-200 mt-5"
            >
              <MdSend className="w-6 h-6" />
              Report Incident
            </button>

           
        </>
        

    )
}
export default Buttons