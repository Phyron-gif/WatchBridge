import { Link } from "react-router-dom"
import { MdReport, MdWork } from "react-icons/md"


function HeroButtons(){
    return(
        <>
        <Link
              to="/report"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-red-700 text-white font-semibold rounded-lg shadow-md hover:bg-red-800 hover:scale-105 transition duration-200"
            >
              <MdReport className="w-6 h-6" />
              Report Incident
            </Link>

            <Link
              to="/login"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 hover:scale-105 transition duration-200"
            >
              <MdWork className="w-6 h-6" />
              View Opportunities
            </Link>
        </>
        

    )
}
export default HeroButtons