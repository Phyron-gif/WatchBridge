import HeroImages from "./HeroImages";

function HeroStats() {
    const stats={
        number:92,
        safeZones:10


    }
  


  return (
    <section className="px-6 py-16">
      
      <div className="max-w-5xl mx-auto bg-green-600 text-white 
                      rounded-2xl shadow-lg 
                      flex flex-col md:flex-row items-center gap-10 p-8 md:p-12
                      hover:shadow-xl hover:scale-[1.02] transition duration-300">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            We're building safer futures, together
          </h1>

          {/* STATS */}
          <div className="flex justify-center md:justify-start gap-10">

            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-4xl font-bold text-green-200">
                {stats.number}%
              </h2>
              <p className="text-sm text-green-100">
                Faster Response Times
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-4xl font-bold text-green-200">
                {stats.safeZones}+
              </h2>
              <p className="text-sm text-green-100">
                Safer Zones Created
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full max-w-sm">
            <HeroImages />
          </div>
        </div>

      </div>

    </section>
  );
}

export default HeroStats;