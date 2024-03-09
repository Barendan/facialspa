import aboutBg1 from "../Assets/about/about-bg-1.svg";
import aboutBg2 from "../Assets/about/about-bg-2.svg";
import aboutImg from "../Assets/about/about-portrait1.png";

function About() {
  return (
    <>
      <div id="aboutSection" 
        className=" bg-[#785445] flex flex-col lg:flex-row justify-center items-center px-12 pb-16 md:px-8 lg:px-16 gap-10 md:gap-10"
        // data-aos="zoom-out"
      >

        <div className="absolute flex w-[96%] lg:w-full justify-between">
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

        <div className="z-[100] lg:w-[60%] xl:w-auto flex flex-col gap-6 pt-12 md:pt-16 justify-center items-center">

          <div className="flex flex-col gap-3 items-center">
            
            <p 
              className="text-white fontTest font-light text-lg lg:text-2xl leading-normal"
              data-aos="zoom-in-right"
            >
              About Us
            </p>
            
            <p className="text-white fontAbril text-center text-3xl sm:text-5xl md:text-5xl font-medium leading-normal sm:leading-normal sm:px-12 lg:px-0">
              A Healthy Body Is A Guest-Chamber For The Soul
            </p>
            
            <p className="hidden md:flex text-white text-base fontTest leading-normal">
              “Go On – Treat Yourself”
            </p>

          </div>

          <div className="flex flex-col gap-8">
            <p className="text-[18px] text-white text-base fontMont leading-normal max-w-[507px]">
              With over 30 years of experience Esperanza Skin Care specializes in a range of advanced esthetic treatments from anti-aging to acne facials for all skin types and age groups. Each treatment is performed from the heart and is designed to promote skin health and longevity. <br/><br/>
              We believe prevention is the key to maintaining youthful skin and the care you invest now, translates into how you will look in the future. We put our patient’s needs first and are passionate about creating a loving and accepting environment to help you look and feel your best. We are compassionate and believe in leading with integrity.
            </p>

          </div>
        </div>

        <div className="z-10 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[75%] xl:w-[75%] sm:ml-0">
          <img className="lg:py-20 lg:mt-6" src={aboutImg} alt="Stephanie and Esperanza smiling together" 
            data-aos="fade"
          />
        </div>
        
      </div>
    </>
  );
}

export default About;
