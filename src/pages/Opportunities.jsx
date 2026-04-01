import { MdCategory, MdLocationOn, MdTypeSpecimen } from "react-icons/md"
import Search from "../components/jobs/Search"
import Selection from "../components/jobs/Selection"
import Category from "../components/jobs/Category"
import JobCard from "../components/jobs/JobCard"

function Opportunities(){
    return(
        <>
       <section className="bg-sky-900 min-h-screen  py-20 ">
        <div className="bg-slate-200 p-4 rounded-lg shadow-sm flex mx-4 md:mx-auto gap-6 md:flex-row flex-col flex-col-2 max-w-4xl md:flex-wrap">
        <Search/>
        <Selection
        icon={<MdLocationOn className="text-green-700"/>}
        value='Location'
        option1='Douala'
        option2='Northwest'
        option3='SouthWest'
        
        />

        <Selection
        icon={<MdCategory className="text-green-700"/>}
        value='Category'
        option1='Job'
        option2='internship'
        option3='fellowship'
        
        />

        <Selection
        icon={<MdTypeSpecimen className="text-green-700"/>}
        value='Type'
        option1='onsite'
        option2='remote'
        option3='hybrid'
        
        />
        <Category/>
       
        

        </div>
        <section className="py-20 px-5">
              <JobCard/>
        </section>
         
       
       
        

       </section>
      
      
       
        
        </>
    )
}
export default Opportunities