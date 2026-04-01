function Sample({text}){
     return(
        <>
        <button className="bg-white shadow-2xl text-gray-900  text-sm text-center rounded-2xl px-6 py-2 hover:bg-green-600 hover:text-white transition duration-400">{text}</button>
        </>
    )
   
}


export default function Category(){
    return(
        <>
         <Sample
        text='Job'
        
        />
         <Sample
        text='Internship'
        
        />
         <Sample
        text='Training'
        
        />
         <Sample
        text='Fellowship'
        
        />
         <Sample
        text='Volunteer'
        
        />
         <Sample
        text='Workshops'
        
        />
               
        
        
        </>
    )

   
}
