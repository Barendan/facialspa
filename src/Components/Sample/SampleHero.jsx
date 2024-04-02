// import lineBg from "../../Assets/hero/line-bg.svg";
import heroImg from "../../Assets/hero/hero-bg.webp";
// import heroImgMobile from "../../Assets/hero/heroBgMobile.webp";

function Hero() {
  return (
    <div
      id="heroSection"
      className="bg-[#DDDAD2] flex overflow-hidden h-[90vh] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${heroImg})` }}
    >

      {/* Mobile version of page */}
      <div className="flex flex-col justify-end items-end text-[white]">

        <div className="square sq-green pos1"/>
        <div className="square sq-transparent pos2"/>
        <div className="square sq-transparent pos3"/>
        <div className="square sq-lightg pos4"/>        
        <div className="square sq-transparent pos5"/>
        <div className="square sq-green pos6"/>        
        <div className="square sq-transparent pos7"/>
        <div className="square sq-lightg pos8"/>

        {/* Box with header and buttons */}
        <div className="flex flex-col opacity-90 bg-[#c5b079] w-[70%] h-[40%] p-5 leading-10">

          <h1
            className="max-w-[626px] text-[10vw] font-semibold text-end"
          >
            Unveil Your Natural Beauty
          </h1>
          
          {/* CTA Buttons */}
          <div className="flex flex-col items-end mt-3 text-md">

            <button 
              onClick={() => window.location.href = "https://www.fresha.com/book-now/esperanza-wellness-qzyn44dd/services?lid=1175294&eid=2766541&pId=1114843"} 
              className="bg-[#2E4630] flex px-3 leading-8 mt-[3%] w-[65%] justify-center"
            >
              Book Now
            

            </button>

            <button 
              onClick={() => window.location.href = "https://esperanzawellness.store/"} 
              className="bg-[#2E4630] flex px-3 leading-8 mt-[5%] w-[65%] justify-center"
              // data-aos="fade-left"
              // data-aos-delay="200"
            >
              Our Store
            

            </button>


          </div>

        </div>
        
      </div>

    </div>
  );
}

export default Hero;
