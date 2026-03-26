import communityImg from "../../images/community.jpg";
function HeroImages(){
    return(
        <>
         <img
            src={communityImg}
            alt="community"
            className="w-full max-w-md md:max-w-lg rounded-xl shadow-lg object-cover rotate-3 hover:rotate-0 transition duration-300"
          />
        </>
    )
}
export default HeroImages