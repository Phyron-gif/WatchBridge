import { MdAddAlert, MdArrowForward, MdDoorbell, MdNotificationsActive, MdReport, MdWork } from "react-icons/md"
import { Link } from "react-router-dom"
 function Card({icon,title,text,link, arrow,path}){
    return(
         <>
   <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 
                hover:shadow-xl hover:-translate-y-2 transition duration-300 max-w-sm ">

  {/* ICON */}
  <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                  bg-blue-100 text-green-600 mb-4">
    {icon}
  </div>

  {/* TITLE */}
  <h3 className="text-xl font-semibold text-gray-800 mb-2">
    {title}
  </h3>

  {/* TEXT */}
  <p className="text-gray-600 text-sm leading-relaxed mb-4">
    {text}
  </p>

  {/* LINK */}
  <Link to={path} className="text-green-600 flex items-center gap-2 font-medium 
                   hover:gap-3 transition-all duration-200">
    {link}
    <span className="transition-transform duration-200 group-hover:translate-x-1">
      {arrow}
    </span>
  </Link>

</div>
  </>
    )  
  }


 function HeroCard(){
    return(
        <>
        <div className="flex flex-col gap-12 md:flex-row">
                  <Card
        icon= {<MdReport className="text-2xl "/>}
        title='Report Safety Issues'
        text='Instantly flag concerns in your area. 
        Our streamlined reporting tool ensures your voice is heard
        by the right responders.'
        link='Get Started '
        arrow={<MdArrowForward />}
        path='/report'
        
    />

    <Card
        icon= {<MdNotificationsActive className="text-2xl "/>}
        title='View Community Alerts'
        text='Stay informed with verified rea-time updates from neighbors and official
        channels in a unified safety map.'
        link='Open Map '
        arrow={<MdArrowForward />}
        path='/safety'
        
    />
    <Card
        icon= {<MdWork className="text-2xl "/>}
        title=' Discover opportunities'
        text='Beyond safety, find local grants, mentorship, jobs, internships and civic roles that
        empower you to lead and grow.'
        link='Explore '
        arrow={<MdArrowForward />}
        path='/opportunities'
        
    />
        </div>
       
        </>
   


    )
   

}
export default HeroCard