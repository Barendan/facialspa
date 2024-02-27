import lineBg from "../Assets/line-bg.svg";
import bg from "../Assets/hero-bg.png";
import bgMobile from "../Assets/heroBgMobile.png";


function Hero() {
  return (
      <div
        id="heroSection"
        className="bg-[#DDDAD2] flex flex-col flex-col-reverse md:flex-row gap-16 md:gap-6 lg:gap-10 xl:gap-16 overflow-hidden pt-40 mt-[-137px] xl:pt-30 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${lineBg})` }}
      >

        <img 
          className="hidden md:block w-[50%] lg:w-fit" 
          src={bg} 
          alt="a woman wearing facial cream on her face and a towel on her head at the spa" data-aos="fade-right"
        />

        <div className="hidden md:flex flex-col justify-center items-start px-[2%] lg:px-4 lg:max-w-[800px] 2xl:ml-20">

          <p 
            className="text-[#2E4630] text-[50px] lg:text-[60px] xl:text-[5rem] font-medium fontTest" 
            data-aos="fade-left"
            data-aos-delay="50"
          >
            A Healthy Body Is A Guest Chamber For The Soul
          </p>



          <div className="flex flex-col xl:flex-row xl:w-[100%] xl:justify-evenly xl:items-center mt-5">

            <button 
              onClick={() => window.location.href = "https://www.fresha.com/book-now/esperanza-wellness-qzyn44dd/services?lid=1175294&eid=2766541&pId=1114843"} 
              className="spa-btn flex xl:mt-8 text-2xl font-normal font-quicksand mt-[10%]"
              // data-aos="fade-left"
              data-aos-delay="200"
            >
              Book Now
              
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              style={{    
                width: "3rem",
                height: "2rem",}}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
              </svg>

            </button>

            <button 
              onClick={() => window.location.href = "https://esperanzawellness.store/"} 
              className="spa-btn flex mt-8 text-xs md:text-2xl font-quicksand"
              // data-aos="fade-left"
              data-aos-delay="200"
              >
              Our Store
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              style={{    
                width: "3rem",
                height: "2rem",}}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>

            </button>
            
            {/* Option #2 Dark Tan background with Green text */}
            {/* <button 
              onClick={() => window.location.href = "https://esperanzawellness.store/"} 
              className="flex items-center justify-center mt-4 hover:shadow-md hover:bg-[#2E4630] hover:text-white text-[#2E4630] text-xs md:text-2xl font-quicksand bg-[#c1bdae] hover:duration-300"
              style={{     
                boxShadow: "1px 1px 1px 1px #0000008c",
                width: "260px",
                height: "60px",
                fontWeight: "600",
              }}
              // data-aos="fade-left"
              data-aos-delay="200"
              >
              Our Store
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
              style={{    
                width: "3rem",
                height: "2rem",}}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>

            </button> */}
            
            
          </div>

        </div>


        {/* Mobile version of page */}
        <div className="flex md:hidden flex-col justify-start items-center z-[99]">
          
          <img className="opacity-30 w-[100%] md:hidden" src={bgMobile} alt="a woman wearing facial cream on her face and a towel on her head at the spa" />

          <div className="absolute top-40 flex flex-col mx-6">
            
            <p 
              className="max-w-[626px] text-[#2E4630] text-[13vw] font-semibold fontTest"
              data-aos="fade-left"
              data-aos-delay="50"
            >
              A Healthy Body Is A Guest-Chamber For The Soul
            </p>
            
            <div className="flex flex-col justify-center items-center">

              <button 
                onClick={() => window.location.href = "https://www.fresha.com/book-now/esperanza-wellness-qzyn44dd/services?lid=1175294&eid=2766541&pId=1114843"} 
                className="spa-btn flex xl:mt-8 text-2xl font-normal font-quicksand mt-[10%]"
                // data-aos="fade-left"
                data-aos-delay="200"
              >
                Book Now
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                style={{    
                  width: "3rem",
                  height: "2rem",}}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>

              </button>

              <button 
                onClick={() => window.location.href = "https://esperanzawellness.store/"} 
                className="spa-btn flex mt-8 text-2xl font-quicksand"
                // data-aos="fade-left"
                data-aos-delay="200"
              >
                Our Store
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                style={{    
                  width: "3rem",
                  height: "2rem",}}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                </svg>

              </button>


            </div>

          </div>
          
          
        </div>

      </div>
  );
}

export default Hero;
