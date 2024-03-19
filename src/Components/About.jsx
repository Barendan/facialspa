import aboutBg1 from "../Assets/about/about-bg-1.svg";
import aboutBg2 from "../Assets/about/about-bg-2.svg";
import aboutImg from "../Assets/about/about-portrait1.png";

function About() {
  return (
    <div id="aboutSection" 
      className="bg-[#785445] flex justify-center items-center text-white px-12 pb-16 xl:px-16 gap-10 md:gap-0"
      // data-aos="zoom-out"
    >
      <div className="absolute flex w-[96%] lg:w-full justify-between items-center">
        <img
          className="mt-[-1311px] lg:mt-[-200px] opacity-[0.5]"
          src={aboutBg1}
          alt="plant leaf 1"
        />
        <img
          className="z-10 hidden sm:block mt-[600px] opacity-[0.7]"
          src={aboutBg2}
          alt="plant leaf 2"
        />
      </div>

      <div 
        // data-aos="flip-up" 
        // data-aos-delay="200" 
        className="flex flex-col lg:flex-row max-w-[1200px]"
      >

        <div className="z-[100] md:w-[70%] lg:w-[80%] xl:w-auto flex flex-col gap-6 pt-12 md:pt-16 justify-center items-center">

          <div className="flex flex-col gap-3 items-center">
            
            <p 
              className="text-white fontNothingYouCouldDo text-2xl leading-normal"
              data-aos="zoom-in-right"
            >
              About Us
            </p>
            
            <p className="fontPrata text-center text-3xl sm:text-5xl font-semibold lg:leading-normal sm:px-12 lg:px-0">
              Making A Difference One Face At A Time
            </p>
            
            <p className="hidden md:flex text-base italic text-[14px]">
              {/* “Go On – Treat Yourself” */}
              "For beautiful eyes look for the good in others.<br/>
              For beautiful lips speak only words of kindness.  <br/>
              And for poise, walk with the knowledge that you're never alone." <br/>
              - Audrey Hepburn
            </p>

          </div>

          <div className="flex flex-col gap-8 lg:pt-3">
            <p className="text-[18px] text-base leading-normal max-w-[507px]">
              With over 30 years of experience Esperanza Skin Care specializes in a range of advanced esthetic treatments from anti-aging to acne facials for all skin types and age groups. Each treatment is performed from the heart and is designed to promote skin health and longevity. <br/>
              We believe prevention is the key to maintaining youthful skin and the care you invest now, translates into how you will look in the future. We put our patient’s needs first and are passionate about creating a loving and accepting environment to help you look and feel your best.
            </p>

          </div>
        </div>

        <div className="z-10 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[80%] xl:w-[80%] sm:ml-0">
          <img className="lg:py-14 lg:mt-6 lg:ml-6" src={aboutImg} alt="Stephanie and Esperanza smiling together" 
            data-aos="fade"
          />
        </div>

      </div>
      
    </div>
  );
}

export default About;
