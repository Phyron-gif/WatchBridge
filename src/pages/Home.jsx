import HeroText from "../components/hero/HeroText";
import HeroButtons from "../components/hero/HeroButtons";
import HeroImages from "../components/hero/HeroImages";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import HeroCard from "../components/hero/HeroCard";
import HeroStats from "../components/hero/HeroStats";



function Home() {
    const {user} = useContext(AuthContext)
  return (
    <>
    
    <section className="bg-gradient-to-r from-blue-600 to-blue-200 py-20 md:py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 ">
        <h1 className="text-3xl text-center md:text-left md:text-4xl text-green-800 font-normal">Hello, {user.name}</h1>
        </div>
    
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* LEFT: TEXT */}
        <div className="md:w-1/2 text-center md:text-left">
          
          <HeroText/>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            
           <HeroButtons/>

          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="md:w-1/2 flex justify-center ">
         <HeroImages/>
        </div>

      </div>
    </section>
    <div className="bg-slate-300  py-20 md:py-32">
       
        <div className="max-w-6xl mx-auto px-6">
            <HeroCard/>
        </div>
    </div>
     <div className="bg-slate-100  py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
       <HeroStats/>
       </div>

     </div>
     
    
      
    
    

    </>
    
  );
}

export default Home;