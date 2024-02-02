// import aboutImg from "../Assets/about-img.svg";
import aboutImg from "../Assets/about-portrait2.png";
// import aboutImg2 from "../Assets/about-img2.jpg";
import aboutBg1 from "../Assets/about-bg-1.svg";
import aboutBg2 from "../Assets/about-bg-2.svg";

function About() {
  return (
    <>
      <div id="aboutSection" 
        className=" bg-[#785445] flex flex-col lg:flex-row justify-center items-center px-12 pb-16 md:px-8 lg:px-16 gap-10 md:gap-10"
        // data-aos="zoom-out"
      >

        <div className="absolute flex w-[96%] lg:w-full justify-between">
          <img
            className="mt-[-1311px] lg:mt-[-436px] opacity-[0.5]"
            src={aboutBg1}
            alt="_bg"
          />
          <img
            className="hidden sm:block mt-[321px]"
            src={aboutBg2}
            alt="_bg"
          />
        </div>

        <div className="z-[1] lg:w-[60%] xl:w-auto flex flex-col gap-6 pt-12 md:pt-16 justify-center items-center">

          <div className="flex flex-col gap-5 items-center">
            
            <p className="text-white fontQuicksand text-2xl font-medium leading-normal">
              About Us
            </p>
            
            <p className="text-white fontAbril text-center text-4xl sm:text-5xl font-medium leading-normal sm:leading-normal sm:px-12 lg:px-0">
              A Healthy Body Is A Guest-Chamber For The Soul
            </p>
            
            <p className="text-white text-base fontMont leading-normal">
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

        <div className="w-[80%] md:w-[60%] lg:w-[65%] xl:w-[55%] z-[1]">
          <img className="lg:py-20 lg:px-6 lg:ml-6 lg:mt-6" src={aboutImg} alt="_about" />
        </div>
        
      </div>
    </>
  );
}

export default About;
