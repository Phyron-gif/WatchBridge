import { MdToggleOff, MdVisibilityOff } from "react-icons/md"

function Toggle(){
    return(
        <>
        <div className="bg-gray-100 rounded-lg p-4 flex items-center gap-4 ">
            <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-700">{<MdVisibilityOff/>}</div>
            <div>
                <p className="font-normal text-sm ">Report Anonymously</p>
                <p className="text-sm font-thin">Your identity will not be shared with authorities or the community.</p>
            </div>
            <div>
               {<MdToggleOff className="text-5xl"/>}{/*comeback to this*/}
            </div>


        </div>
        </>
    )

}
export default Toggle