import { MdCheckCircle, MdCoronavirus } from "react-icons/md"


function CardIntro({icon, title, text, className1, className2}){
    return(
        <>
        
            
            <div>
                {icon}
            </div>
             <div>
                <h1 className={className1}>{title}</h1>
                <h6 className={className2}>{text}</h6>
             </div>
        



        
        
        
        

        </>
    )

}

export default function Card(){
    return(
        <>
        <div className="flex gap-2 my-12 bg-red-100/60 max-w-xs p-4 rounded-lg ">
        <CardIntro
        icon={<MdCoronavirus className="text-red-800 text-lg mt-2"/>}
        title='immediate Danger?'
        text='If you are in an emergency situation, 
        please call local emergency services immediately. '
        className1='text-red-700/90 font-bold leading-relaxed'
        className2='text-sm text-red-700/60 leading-tight'
        
    
        />
        </div>

         <div className="flex gap-2 my-12 bg-green-100/60 max-w-xs p-4 rounded-lg ">
        <CardIntro
        icon={<MdCheckCircle className="text-green-800 text-lg mt-2"/>}
        title='Encrypted Submission'
        text='Your report data is end-to-end encrypted to ensure privacy and security. '
        className1='text-green-700/90 font-bold leading-relaxed'
        className2='text-sm text-green-700/60 leading-tight '
        
    
        />
        </div>
        </>
    )
}
