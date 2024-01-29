// import aboutImg from "../Assets/about-img.svg";
import aboutImg from "../Assets/about-portrait2.png";
// import aboutImg2 from "../Assets/about-img2.jpg";
import aboutBg1 from "../Assets/about-bg-1.svg";
import aboutBg2 from "../Assets/about-bg-2.svg";

function About() {
  return (
    <>
      <div id="aboutSection" 
      // data-aos="zoom-out"
      className="flex flex-col lg:flex-row gap-20 md:gap-4 justify-center otems-center px-4 sm:px-6 md:px-8 lg:px-24 pb-20 bg-[#785445]" >
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
        <div className="lg:w-[50%] xl:w-auto flex flex-col gap-6 pt-32 md:pt-16 z-[1]">
          <div className="flex flex-col gap-5">
            
            <p className="text-white fontQuicksand text-2xl font-medium leading-normal">
              About Us
            </p>
            
            <p className="text-white fontAbril text-[50px] font-medium leading-normal xl:max-w-[537px]">
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

            {/* <button onClick={() => console.log("Book Now Clicked!")} className="w-fit flex text-[#1E1E1E] text-lg fontQuicksand leading-normal bg-white hover:font-bold hover:shadow-lg hover:text-white hover:bg-[#2E4630]  rounded-tl-[30px] rounded-br-[30px] py-4 px-6">
              Book Now
            </button> */}

          </div>
        </div>

        <div className="lg:w-[40%] z-[1]">
          <img className="py-24 px-6 ml-6" src={aboutImg} alt="_about" />
          {/* <img className="pb-24" src={aboutImg2} alt="_about" /> */}
        </div>
        
      </div>
    </>
  );
}

export default About;
