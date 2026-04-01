function Jobs({icon1, icon2,icon3,icon4,company,location,type,salary,text,title}){
    return(
        <>
        
            <div className="flex gap-2 items-center px-2 py-2 ">
                <h1 className="text-blue-400">{icon1}</h1>
                <h1 className="font-bold text-sm text-gray-800">{company}</h1>
                
                 </div>

                  <hr className="text-gray-200 "></hr>
                   <div className="flex gap-2 items-center px-2 py-2">
                    
                    <h1 className=" text-gray-700 font-bold">{title}</h1>
                </div>
                <div className="flex gap-2 items-center px-2 py-2">
                    <h1 className="text-blue-400">{icon2}</h1>
                    <h1 className="text-gray-500 font-medium">{location}</h1>
                </div>
                <hr className="text-gray-200"></hr>
                 <div className="flex gap-2 items-center px-2 py-2">
                    <h1 className="text-green-400">{icon3}</h1>
                    <h1 className="text-gray-500 font-medium">{type}</h1>
                </div>
                 <div className="flex gap-2 items-center">
                    <h1 className="text-green-500 text-lg ">{icon4}</h1>
                    <h1 className="text-gray-600 font-bold">{salary}</h1>
                </div>
                <button className="bg-green-700 w-1/3 py-2 rounded-lg text-white text-sm font-bold mx-auto mt-4 hover:bg-green-600"> {text}</button>
                

           
        </>
    )
}
export default Jobs
