import { MdGpsFixed } from "react-icons/md"
import Toggle from "./Toggle"

function Input(){
    return(
        <>
        <div className="max-w-xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-lg space-y-6">

  {/* INCIDENT TYPE */}
  <label className="flex flex-col gap-2">
    <span className="text-sm font-semibold text-gray-700">Incident Type</span>
    
    <select className="w-full px-4 py-3 bg-gray-100 rounded-lg text-sm 
                       focus:outline-none focus:ring-2 focus:ring-green-500 
                       transition">
      <option>Select the nature of the report</option>
      <option>Health</option>
      <option>Accident</option>
      <option>Flood</option>
    </select>
  </label>

  {/* LOCATION */}
  <label className="flex flex-col gap-2">
    <span className="text-sm font-semibold text-gray-700">Location</span>

    <div className="flex gap-3">
      
      <input
        type="text"
        placeholder="Enter address or landmark"
        className="flex-1 px-4 py-3 bg-gray-100 rounded-lg text-sm 
                   focus:outline-none focus:ring-2 focus:ring-green-500 
                   transition"
      />

      <button
        type="button"
        className="flex items-center gap-2 px-4 py-3 bg-green-100 text-green-700 
                   rounded-lg hover:bg-green-200 transition"
      >
        <MdGpsFixed className="text-lg" />
        <span className="text-sm font-medium">GPS</span>
      </button>

    </div>
  </label>

  {/* DESCRIPTION */}
  <label className="flex flex-col gap-2">
    <span className="text-sm font-semibold text-gray-700">Description</span>

    <textarea
      rows="4"
      placeholder="Describe what happened in detail"
      className="w-full px-4 py-3 bg-gray-100 rounded-lg text-sm 
                 focus:outline-none focus:ring-2 focus:ring-green-500 
                 transition resize-none"
    />
  </label>

  {/* FILE UPLOAD */}
  <label className="flex flex-col gap-2">
    <span className="text-sm font-semibold text-gray-700">Evidence & Images</span>

    <input
      type="file"
      className="w-full text-sm bg-gray-100 p-3 rounded-lg 
                 file:mr-4 file:py-2 file:px-4 
                 file:rounded-md file:border-0 
                 file:bg-green-600 file:text-white 
                 hover:file:bg-green-700 cursor-pointer"
    />
  </label>
  <Toggle/>

</div>

    

        </>
    )
}
export default Input