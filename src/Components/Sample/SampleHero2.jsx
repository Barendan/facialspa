// import lineBg from "../../Assets/hero/line-bg.svg";
// import heroImgMobile from "../../Assets/hero/heroBgMobile.webp";
// import heroImg from "../../Assets/hero/hero-bg.webp";
import heroImg from "../../Assets/hero/hero-img.png";
import outerBG from "../../Assets/hero/outer-bg.png";
import portraitBG from "../../Assets/hero/portrait-bg.png";

function Hero() {
  return (
    <div
      id="heroSection"
      className="bg-[#DDDAD2] flex flex-col overflow-hidden h-[95vh] bg-cover bg-no-repeat mb-40"
      style={{ 
        backgroundImage: `url(${outerBG})`,
        backgroundSize: "260% 170%",
        backgroundPosition: "50% 50%",
      }}
    >

      {/* full section gradient tint */}
      <div style={{
        zIndex: "1",
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0), #ffb900)",
        opacity: "0.2",
      }} />



      <div className="z-10 relative flex w-[120%] h-[60%] ml-[-10%]">
        <img 
          src={portraitBG} 
          style={{
            width: "120vw",
            height: "150vw",
          }}
        />

        <div
          style={{
            transform: "rotate(-45deg)",
            position:"absolute",
            top: "39.3vw",
            left: "28.5vw",
            width: "62vw",
            // height: "90%",
          }}
        >
          <img src={heroImg} />
        </div>

      </div>




        {/* <div className="square sq-green pos1"/>
        <div className="square sq-transparent pos2"/>
        <div className="square sq-transparent pos3"/>
        <div className="square sq-lightg pos4"/>        
        <div className="square sq-transparent pos5"/>
        <div className="square sq-green pos6"/>        
        <div className="square sq-transparent pos7"/>
        <div className="square sq-lightg pos8"/> */}



        {/* Box with header and buttons */}
        <div className="z-10 flex flex-col w-[100%] h-[40%]">

          {/* header and subheader */}
          <div className="text-[#2E4630] py-6 px-10">
            <h1 className="text-[17vw]" style={{ lineHeight: "70px"}}>
              Esperanza Wellness
            </h1>

            <h2 className="text-[18px] pl-3 text-black">
              Unveil Your Natural Beauty
            </h2>
          </div>
          


          {/* CTA Buttons */}
          <div className="flex flex-row justify-around px-10 text-white">

            <div className="bg-[#2E4630] flex w-[45%] p-1 justify-center relative">
              <button 
                onClick={() => window.location.href = "https://www.fresha.com/book-now/esperanza-wellness-qzyn44dd/services?lid=1175294&eid=2766541&pId=1114843"} 
                className="bg-[#2E4630] w-[100%] flex px-3 py-2 justify-center border relative"
              >
                Book Now
                <span class="absolute top-1/2 right-3 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 transform rotate-45 bg-transparent"></span>
              </button>

            </div>


            <div className="relative bg-gradient-to-r from-[#8b8b8b] to-[#3b9933] flex w-[45%] p-1 justify-center">
              <button 
                onClick={() => window.location.href = "https://esperanzawellness.store/"} 
                className="w-[100%] flex px-3 py-2 justify-center border relative"
                // data-aos="fade-left"
                // data-aos-delay="200"
              >
                Our Store
                <span class="absolute top-1/2 right-3 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 transform rotate-45 bg-transparent"></span>
              </button> 
            </div>

          </div>

        </div>
        


      {/* </div> */}

    </div>
  );
}

export default Hero;
