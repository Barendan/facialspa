import { useNavigate } from "react-router-dom";

// import serviceIcon1 from "../Assets/service-icon-1.svg";
// import serviceIcon2 from "../Assets/service-icon-2.svg";
// import serviceIcon3 from "../Assets/service-icon-3.svg";
// import serviceIcon4 from "../Assets/service-icon-4.svg";
// import serviceBg from "../Assets/service-bg.svg";
import rfServiceImg from "../Assets/radiofrequency.jpg";
import cpServiceImg from "../Assets/chemicalpeel.jpg";
import mnServiceImg from "../Assets/microneedling.jpg";
import serviceImg2 from "../Assets/service-img-2.png";
import serviceImg3 from "../Assets/service-img-3.png";
import serviceImg6 from "../Assets/service-img-6.png";
import floralImg from "../Assets/floral-bg3.png";


function Services() {
  const navigate = useNavigate();

  // const serviceIcon = [
  //   { name: "Face Treatments", img: serviceIcon1 },
  //   { name: "Detox Massage", img: serviceIcon2 },
  //   { name: "Foot Massage", img: serviceIcon3 },
  //   { name: "Candle Relaxing", img: serviceIcon4 },
  // ];

  const serviceList = [
    {
      img: mnServiceImg,
      heading: "Microneedling",
      description:
        "Activate your skin's innate healing capabilities and rejuvenate.",
      green: false,
    },
    {
      img: serviceImg2,
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
      img: serviceImg3,
      heading: "Hydra-Facial",
      description:
        "Delicately hydrates and revitalizes by cleansing every pore with precision",
      green: false,
    },
    {
      img: serviceImg6,
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
    <>
      <div id="servicesSection" className="flex flex-col bg-white z-[1]">

        <div 
          style={{ backgroundImage: `url(${floralImg})`, backgroundPosition:'5rem -10rem', backgroundColor: "rgb(254 250 240 / 50%)"}}
          className="py-14 px-4 sm:px-6 md:px-8 lg:px-24 flex flex-col gap-6 md:gap-10 justify-center items-center">

          {/* Section Top Text */}
          <div className="flex flex-col gap-1 justify-center items-center z-[1]">
            
            <div className="flex flex-col gap-2 justify-center items-center">
              
              <p className="text-[#232323] fontQuicksand text-2xl font-medium leading-normal"
               data-aos="zoom-out" >
                Services
              </p>

              <p className="text-[#2E4630] text-3xl leading-normal max-w-[679px] fontAbril text-center">
                Take A Deep Breath And Just Enjoy Life
              </p>

            </div>

            <p className="text-[#666] text-md md:text-lg leading-normal max-w-[743px] fontQuicksand text-center py-4 px-6 md-px-0 md-pb-0">
              Without making it feel so…. clinical. We believe in having your
              cake and eating it too, with clinically proven treatments,
              licensed and insured aestheticians, ambient lighting, & heated beds.
            </p>

          </div>
          

          <div className="flex flex-row flex-wrap gap-12 justify-center items-center 2xl:gap-40 lg:max-w-[1000px]">
              
            <div className="flex justify-evenly md:justify-center flex-wrap flex-row lg:flex-row md:gap-1 lg:gap-10">
              {serviceList.map((item, index) => (
                
                <div 
                  key={index} 
                  className="w-[45%] sm:w-[40%] lg:w-[30%] flex flex-col md:mb-3 justify-center items-center"
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
                      style={{ backgroundColor: "ghostwhite", borderColor: "darkgreen"}}
                      className={"flex flex-col h-[50%] md:h-auto gap-1 items-center px-2 md:px-6 pt-3 md:pb-6 shadow-md"}
                      >

                      <p
                        className={"text-[#2E4630] fontQuicksand text-[16px] md:text-[20px] font-medium leading-normal leading-3 sm:leading-0"}
                        // data-aos="fade-up"
                        >
                        {item.heading}
                      </p>

                      <p
                        className={"text-[#2E4630] fontQuicksand text-center text-[10px] sm:text-[12px] md:text-[14px] leading-normal"}
                        // data-aos="fade-up"
                      >
                        {item.description}
                      </p>

                    </div>

                    <button
                      onClick={() => navigate(`/services/${item.heading.toLowerCase().replace(/\s+/g, "-")}`)}
                      className={`w-fit flex text-white text-[12px] sm:text-md lg:text-lg font-quicksand bg-[#2E4630] mt-[-10px] opacity-90 hover:opacity-100`}
                      style={{ boxShadow: "3px 2px 6px #45452d",
                        padding: "4% 12%",
                      }}

                      // data-aos="fade-up"
                    >
                      Read More
                    </button>

                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Services;
