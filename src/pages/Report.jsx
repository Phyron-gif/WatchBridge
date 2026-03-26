import Input from "../components/report/Input"
import Text from "../components/report/Text"


function Report(){
    return(
        <>
        <section className="w-full  bg-slate-300 min-h-screen flex justify-center py-20 ">
            <div className=" max-w-2xl"> 
                <div className="w-full max-w-lg py-10 px-10">
                    <Text/>
                </div>
                <div className="px-8">
                    <Input/>
                </div>






            </div>
            

        </section>
      
        </>
    )
}
export default Report