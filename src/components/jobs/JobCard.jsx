 import {  MdAttachMoney, MdLocationOn, MdLock, MdWork } from "react-icons/md"
import { getJobs } from "../../data/CardInfo"
import Jobs from "./Jobs"
 function JobCard(){
    const jobs=getJobs()
    

    return(
        <>
        <div className="grid md:grid-cols-4 gap-4 md:gap-6 md:px-8 ">
            
                    {jobs.map((job)=>{
        return (<div key={job.id} className="bg-white grid px-4 py-6 shadow-xl border rounded-md ">
            <Jobs
            icon1={<MdWork/>}
            icon2={<MdLocationOn/>}
            icon3={<MdLock/>}
            icon4={<MdAttachMoney/>}
            company={job.company}
            location={job.location}
            type={job.type}
            salary={job.salary}
            text='Apply Now'
            title={job.title}
            />

        </div>
      ) })}
        
          

        </div>
     
        </>
    )
}
export default JobCard