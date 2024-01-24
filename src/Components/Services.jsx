// import serviceIcon1 from "../Assets/service-icon-1.svg";
// import serviceIcon2 from "../Assets/service-icon-2.svg";
// import serviceIcon3 from "../Assets/service-icon-3.svg";
// import serviceIcon4 from "../Assets/service-icon-4.svg";
// import serviceBg from "../Assets/service-bg.svg";
import serviceImg1 from "../Assets/service-img-1.png";
import serviceImg2 from "../Assets/service-img-2.png";
import serviceImg3 from "../Assets/service-img-3.png";
import serviceImg4 from "../Assets/service-img-4.png";
import serviceImg6 from "../Assets/service-img-6.png";
import floralImg from "../Assets/floral.png";

import { useNavigate } from "react-router-dom";


function Services() {
  const navigate = useNavigate();

  // const serviceIcon = [
  //   { name: "Face Treatments", img: serviceIcon1 },
  //   { name: "Detox Massage", img: serviceIcon2 },
  //   { name: "Foot Massage", img: serviceIcon3 },
  //   { name: "Candle Relaxing", img: serviceIcon4 },
  // ];

  const serviceList1 = [
    {
      img: serviceImg1,
      heading: "Microneedling",
      description:
        "Activate your skin's innate healing capabilities and rejuvenate.",
      green: false,
    },
    {
      img: serviceImg2,
      heading: "Chemical peels",
      description:
        "Gently exfoliate and revitalize your skin while erasing the marks of time.",
      green: false,
    },
    {
      img: serviceImg3,
      heading: "Oxygenation Trio",
      description:
        "Transform your sluggish, stressed, or acne-affected skin into a radiant glow.",
      green: false,
    },
    {
      img: serviceImg4,
      heading: "Radio Frequency",
      description:
        "Non-surgical skin-tightening method that utilizes energy waves",
      green: false,
    },
    {
      img: serviceImg1,
      heading: "Microdermabrasion",
      description:
        "A diamond tip to gently remove the outermost layer of the skin",
      green: false,
    },
    {
      img: serviceImg6,
      heading: "Hydro-Facial",
      description:
        "Delicately hydrates and revitalizes by cleansing every pore with precision",
      green: false,
    },
  ];

  return (
    <>
      <div id="servicesSection" className="flex flex-col bg-white z-[1]">

        {/* <img
          className="hidden md:block absolute mt-[377px]"
          src={serviceBg}
          alt="_bg"
        /> */}

        {/* <div className="bg-[#785445] flex flex-col md:flex-row gap-16 lg:gap-[200px] justify-center px-4 sm:px-6 md:px-24 py-24">
          {serviceIcon.map((item, index) => (
            <div key={index} className="flex flex-col gap-5 justify-center items-center">
              <img src={item.img} alt="_service" />
              <p className="max-w-[150px] text-center text-white leading-normal fontMont text-[20px]">
                {item.name}
              </p>
            </div>
          ))}
        </div> */}

        <div className="bg-white py-20 px-4 sm:px-6 md:px-8 lg:px-24 flex flex-col gap-10 justify-center items-center">

          {/* Section Top Text */}
          <div className="flex flex-col gap-1 justify-center items-center z-[1]">
            
            <div className="flex flex-col gap-2 justify-center items-center">
              
              <p className="text-[#232323] fontQuicksand text-2xl font-medium leading-normal" data-aos="fade-down-right">
                Services
              </p>

              <p className="text-[#2E4630] text-3xl leading-normal max-w-[679px] fontAbril text-center" data-aos="fade-down-right" data-aos-delay="50">
                Take A Deep Breath And Just Enjoy Life
              </p>

            </div>

            <p className="text-[#666] text-lg leading-normal max-w-[743px] fontQuicksand text-center" data-aos="fade-down-right" data-aos-delay="100">
              Without making it feel so…. clinical. We believe in having your
              cake and eating it too, with clinically proven treatments,
              licensed and insured aestheticians, ambient lighting, heated beds,
            </p>

          </div>
          

          {/* <div className="flex gap-16 justify-center items-center"> */}

          <div className="flex flex-row flex-wrap gap-12 justify-center items-center w-full 2xl:gap-40">
            
          <div className="flex justify-around flex-wrap flex-row xl:flex-row gap-0 md:gap-12 2xl:gap-40 w-full">
            {serviceList1.map((item, index) => (
              <div key={index} className="md:w-[325px] w-[10rem] mb-6 md:mb-0 flex flex-col justify-center items-center">

                <img
                  className="w-[300px] h-[200px] md:w-[320px] md:h-[346px]"
                  src={item.img}
                  alt="_service"
                  // data-aos="fade-up"
                />

                <div className="flex flex-col items-center w-[260px] md:w-[265px] h-[224px] mt-[-60px] md:mt-[-130px]">
                  
                  <div
                    // data-aos="fade-up"
                    className={`flex flex-col gap-3 justify-center items-center 
                    bg-white text-black rounded-md mx-3 px-2 md:px-5 py-3 md:py-6 pb-12`}
                  >

                    <p
                      className={`${
                        item.green ? "text-white" : "text-[#2E4630]"
                      }  fontQuicksand text-[20px] leading-normal`}
                    >
                      {item.heading}
                    </p>

                    <p
                      className={`${
                        item.green ? "text-white" : "text-[#666]"
                      } fontQuicksand text-small leading-normal text-center`}
                    >
                      {item.description}
                    </p>

                  </div>

                  <button
                    onClick={() => navigate(`/services/${item.heading.toLowerCase().replace(/\s+/g, "-")}`)}
                    // data-aos="fade-up"
                    className={`w-fit flex  text-white
                    text-base md:text-lg font-quicksand leading-normal
                         bg-[#2E4630]
                      rounded-tr-[30px] rounded-bl-[30px] py-2 md:py-4 px-3 md:px-6 mt-[-34px] hover:shadow-lg hover:font-bold`}
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
