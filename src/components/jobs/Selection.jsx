

function Selection({icon,option1, option2, option3, value}){
    return(
        <>
        <div className="bg-white shadow-sm flex gap-2  rounded-lg p-2 items-center md:w-1/6 w-1/2 ">
        {icon}
       <select className="text-sm font-bold outline-none">
        <option value='' className="font-bold">{value}</option>
        <option>{option1}</option>
         <option>{option2}</option>
          <option>{option3}</option>

       </select>

        </div>
        </>
    )
}
export default Selection