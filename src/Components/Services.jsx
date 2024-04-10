import { useNavigate } from "react-router-dom";

import rfServiceImg from "../Assets/services/radiofrequency.webp";
import cpServiceImg from "../Assets/services/chemicalpeel.webp";
import mnServiceImg from "../Assets/services/microneedling.webp";
import otServiceImg from "../Assets/services/oxygentherapy.webp";
import hfServiceImg from "../Assets/services/hydrafacial.webp";
import mdServiceImg from "../Assets/services/microderm.webp";
import floralImg from "../Assets/services/floral-bg3.webp";


function Services() {
  const navigate = useNavigate();
  const serviceList = [
    {
      img: mnServiceImg,
      heading: "Microneedling",
      description:
        "Activate your skin's innate healing capabilities and rejuvenate.",
      green: false,
    },
    {
      img: otServiceImg,
      heading: "Oxygenation Trio",
      description:
        "Transform your sluggish, stressed, or acne-affected skin into a radiant glow.",
      green: false,
    },
    {
      img: cpServiceImg,
      heading: "Chemical Peels",
      description:
        "Gently exfoliate and revitalize your skin while erasing the marks of time.",
      green: false,
    },
    {
      img: hfServiceImg,
      heading: "Hydra-Facial",
      description:
        "Delicately hydrates and revitalizes by cleansing every pore with precision",
      green: false,
    },
    {
      img: mdServiceImg,
      heading: "Microdermabrasion",
      description:
      "A diamond tipped device gently removes the outermost layer of the skin",
      green: false,
    },
    {
      img: rfServiceImg,
      heading: "Radio Frequency",
      description:
        "Non-surgical skin-tightening method that utilizes energy waves",
      green: false,
    },
  ];

  return (
    <div id="servicesSection" 
      className="flex flex-col bg-white z-[1] justify-center items-center"
      style={{ backgroundImage: `url(${floralImg})`, backgroundPosition:'5rem -10rem', backgroundColor: "rgb(254 250 240 / 50%)"}}
    >

      <div 
        className="py-14 px-4 sm:px-6 md:px-8 lg:px-24 flex flex-col gap-4 max-w-[1200px] items-center">

        {/* Section Top Text */}
        <div className="flex flex-col gap-1 justify-center items-center z-[1]">
          
          <div className="flex flex-col gap-2 justify-center items-center">
            
            <h1 className="text-3xl fontNothingYouCouldDo md:font-medium leading-normal"
                data-aos="zoom-in-right"
                data-aos-delay="100">
              Services
            </h1>

            <h2 className="text-[#2E4630] text-3xl leading-normal font-semibold max-w-[679px] fontPrata text-center">
              Personalized Skin Care Starts With You
            </h2>

          </div>

          <p className="text-[#666] text-sm sm:text-base leading-normal max-w-[743px] text-center py-4 px-6 md-px-0 md-pb-0">
            Without making it feel so…. clinical. We believe in having your
            cake and eating it too, with clinically proven treatments,
            licensed and insured aestheticians, ambient lighting, & heated beds.
          </p>

        </div>
        

        <div className="flex flex-row flex-wrap gap-12 justify-center items-center 2xl:gap-40 lg:max-w-[1000px]">
            
          <div className="flex justify-evenly md:justify-center flex-wrap flex-row lg:flex-row md:gap-1 lg:gap-4 xl:gap-10">

            {serviceList.map((item, i) => (
              
              <div 
                key={i} 
                className="service-container w-[45%] sm:w-[40%] lg:w-[30%] flex flex-col md:mb-3 justify-center items-center"
                data-aos="zoom-in"
                data-aos-delay={ i * 100}
              >
                {/* Chemical Peels image needs to be adjusted slightly but no others */}
                { item.heading === "Chemical Peels" ? 
                  <div 
                    style={{ backgroundImage: `url(${item.img})`, backgroundSize: "cover", backgroundPosition: "100% 100%" }}
                    className="w-[100%] h-[160px] md:w-[265px] md:h-[300px]"
                  />
                  :
                  <div 
                    style={{ backgroundImage: `url(${item.img})`, backgroundPosition:'center', backgroundSize: "cover" }}
                    className="w-[100%] h-[160px] md:w-[265px] md:h-[300px]"
                  />
                }

                <div className="flex flex-col items-center w-[100%] h-[204px] md:w-[265px] my-0 md:mt-[-100px]">
                  
                  <div
                    style={{ backgroundColor: "#f1eee5", borderColor: "darkgreen"}}
                    className={"flex flex-col h-[50%] md:h-auto gap-1 items-center px-2 md:px-6 pt-3 md:pb-6 shadow-md"}
                    >

                    <p
                      className={"service-title text-[#2E4630] fontPoiretOne text-[18px] md:text-[22px] font-semibold"}
                      >
                      {item.heading}
                    </p>

                    <p
                      className={"service-text text-[#2E4630] text-center text-[10px] sm:text-[12px] md:text-[14px]"}
                    >
                      {item.description}
                    </p>

                  </div>


                  <div 
                    className="bg-[#2E4630] text-white flex w-[55%] p-0.5 justify-center mt-[-10px] opacity-90 hover:opacity-100"
                    // data-aos="fade-up"
                  >
                    <button
                      onClick={() => navigate(`/services/${item.heading.toLowerCase().replace(/\s+/g, "-")}`)}
                      className={"service-btn w-[100%] text-[12px] lg:text-base fontUrbanist py-2 px-2 flex justify-center items-center border border-slate-300 shadow-xl font-light tracking-wide"}
                    >
                      Read More
                    </button>
                  </div>



                </div>
              </div>
            ))}






          </div>

        </div>

      </div>
    </div>
  );
}

export default Services;
