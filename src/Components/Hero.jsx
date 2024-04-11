import portraitBG from "../Assets/hero/portrait-bg.png";

function Hero() {
  return (
    <div id="heroSection" className="bg-[#DDDAD2] relative overflow-hidden min-h-[95vh]">
      
      {/* full section gradient tint */}
      <div style={{
        zIndex: "1",
        position: "absolute",
        width: "100%",
        height: "100%",
        minHeight: "95vh",
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0), #ffb900)",
        opacity: "0.2",
      }} />

      <div className="flex flex-col md:flex-row md:items-center lg:mx-auto overflow-hidden h-[100%] bg-cover bg-no-repeat max-w-[1000px] md:h-[90vh]">

        {/* portrait bg with hero img */}
        <div className="portrait-container z-10 relative flex w-[120%] h-[440px] ml-[-10%]">
          <img 
            src={portraitBG} 
            alt="a woman laying serenly in nature as she has a facial mask applied by a professional"
            style={{
              width: "100%",
              height: "125%",
            }}
          />
        </div>


        {/* Box with header and buttons */}
        <div className="header-container text-[#2E4630] z-10 flex flex-col pt-5 mx-5 md:pt-0 md:pr-5">

          {/* header and subheader */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="px-3" 
              style={{ 
                fontSize: "clamp(16vw, 17vw, 64px)",
                lineHeight: "64px"
              }}
              // data-aos="fade-left"
              // data-aos-delay="50"
            >
              Esperanza Wellness
            </h1>
          </div>

            <h2 
              className="text-[#2E4630] text-[4.1vw] sm:text-[3.4vw] md:text-[20px] px-5"
              // data-aos="fade-left"
              // data-aos-delay="100"
            >
              Unveil Your Natural Beauty
            </h2>
          


          {/* CTA Buttons */}
          <div className="w-[100%] flex flex-row justify-around text-white py-5"
            // data-aos="fade-left"
            // data-aos-delay="150"
          >

            <div className="bg-[#2E4630] flex w-[45%] max-w-[200px] p-1 justify-center opacity-90 hover:opacity-100">
              <button 
                onClick={() => window.location.href = "https://www.fresha.com/book-now/esperanza-wellness-qzyn44dd/services?lid=1175294&eid=2766541&pId=1114843"} 
                className="bg-[#2E4630] w-[100%] flex px-3 py-2 text-sm sm:text-base justify-center items-center border border-slate-300 shadow-xl hover:shadow-md"
              >
                Book Now
                <span className="relative -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 transform rotate-45 bg-transparent left-1 top-1.5"></span>
              </button>

            </div>


            {/* <div className="relative bg-gradient-to-r from-[#8b8b8b] to-[#3b9933] flex w-[45%] max-w-[200px] p-1 justify-center"> */}
            <div className="relative bg-[#2E4630] flex w-[45%] max-w-[200px] p-1 justify-center opacity-90 hover:opacity-100">
              <button 
                onClick={() => window.location.href = "https://esperanzawellness.store/"} 
                className="w-[100%] flex px-3 py-2 text-sm sm:text-base justify-center border border-slate-300 shadow-xl hover:shadow-md items-center"
              >
                Our Store
                <span className="relative left-1 top-1.5 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 transform rotate-45 bg-transparent"></span>
              </button> 
            </div>

          </div>

        </div>
        
      </div>


    </div>
  );
}

export default Hero;
