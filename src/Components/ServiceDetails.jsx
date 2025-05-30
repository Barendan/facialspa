import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import rfServiceImg from "../Assets/services/radiofrequency.webp";
import cpServiceImg from "../Assets/services/chemicalpeel.webp";
import mnServiceImg from "../Assets/services/microneedling.webp";
import otServiceImg from "../Assets/services/microblading.png";
import hfServiceImg from "../Assets/services/hydrafacial.webp";
import mdServiceImg from "../Assets/services/microderm.webp";
import { FiArrowLeft } from "react-icons/fi";

const serviceList = [
  {
    img: mnServiceImg,
    heading: "Microneedling",
    description: `Indulge in the epitome of skincare luxury at our facial spa, where microneedling becomes an artful ritual. Our safe and minimally invasive procedure involves ultra-fine needles puncturing the skin, infusing a customized serum blend to awaken your skin's innate healing powers. Experience rejuvenation, where every gentle touch resonates with precision and refinement, stimulating collagen production for a regal complexion.`,
    benefits: " Increases collagen production. Minimizes fine lines and wrinkles. Minimizes pore size. Brightens complexion. Improves acne scars and stretch marks. Improves skin tone and texture.",
  },
  {
    img: otServiceImg,
    heading: "Microblading & Shading",
    description: "At Esperanza Skin Care, we specialize in Microblading and Shading using the renowned Phi Brows technique, a precise, semi-permanent method that enhances your natural brows with realistic, hair like strokes. Our expertise spans all skin types and ages, ensuring results that blend seamlessly and look naturally full. With years of experience, we tailor each treatment to your unique features, delivering beautiful, balanced brows that frame your face with elegance and confidence.",
    benefits: " Renowned Phi Brows technique. Enhances natural beauty. Semi-permanent. Provides hydration. Plumps skin.",
  },
  {
    img: cpServiceImg,
    heading: "Chemical Peels",
    description: "Embark on a journey of skincare refinement with our exclusive line of Facial Peels, where the artistry of transformative rejuvenation takes center stage. This symphony of exquisite processes involves applying a blend of acids, eliminating damaged layers and diminishing various skin conditions such as fine lines, hyperpigmentation, acne, and rosacea. As you relax, each peel delicately unveils a luminous, youthful canvas beneath. ",
    benefits: " Improves skin texture. Increase collagen and elastin. Improves acne and acne scaring. Evens skin tone removing unwanted spots. Diminishes fine lines and wrinkles. Controls certain skin conditions",
  },
  {
    img: hfServiceImg,
    heading: "Hydra-Facial",
    description:
      "Elevate your skincare experience to the pinnacle of opulence with our  Hydra-Facial experience. Immerse yourself in the gentle embrace of powerful yet gentle hydra-dermabrasion, cleansing every pore with precision, by seamlessly marrying advanced technology with the artistry of pampering. Crafted to unveil a new standard of skincare luxury, this transcendent procedure delicately purifies, hydrates, and revitalizes your skin.",
    benefits: " Hydrates the skin. Cleanses impurities. Reduces blackheads. Restores firmness. Suitable for all skin types and tones. Gentle on the skin.",
  },
  {
    img: mdServiceImg,
    heading: "Microdermabrasion",
    description:
    "Microdermabrasion treatment, a testament to refinement beyond the ordinary. Microdermabrasion is a minimally invasive resurfacing procedure that uses a diamond tip to gently remove the outermost layer of the skin and reveal healthier skin. After resurfacing the skin, it becomes more receptive towards the next treatment, enhancing overall results. This gentle yet powerful exfoliation process meticulously refines your skin's texture, revealing a luminous, youthful glow.",
    benefits: " Improves skin texture. Lightens dark spots while removing fine lines. Reduces acne scars, enlarged pores and stretch marks. Evens out skin tone. Enhances post treatment.",
  },
  {
    img: rfServiceImg,
    heading: "Radio Frequency",
    description:
      "Enter the future with Radiofrequency (RF) therapy, an advanced non-surgical skin-tightening method that redefines the essence of skincare luxury. This cutting-edge treatment utilizes energy waves to heat the deep layers of your skin, promoting the synthesis of collagen and elastin for enhanced firmness. The gentle yet powerful radio waves work to sculpt and tighten your skin, revealing a youthful allure. RF Treatment, is the pinnacle of skincare treatment, let it transform your skin and leave it revitalized like never before.",
    benefits: " Skin tightening and sculpting. Improves collagen production. Reduces fine lines, wrinkles and aging sagging skin. Smoothes out cellulite bulges. No downtime. Natural and safe for all kinds of skin.",
  },
];

function ServiceDetail() {
  const navigate = useNavigate();
  const { serviceId } = useParams();

  useEffect(()=>
    { window.scrollTo(0, 0);
  },[])
  
  const handleMenuItemClick = (id) => {
    navigate("/");
  };

  const selectedService = serviceList.find(
    (service) => service.heading.toLowerCase().replace(/\s+/g, "-") === serviceId
  );

  if (!selectedService) {
    return <div>Service not found</div>;
  }

  return (
    <div className="bg-[#DDDAD2] fontQuicksand">

      <div 
        className="flex items-center mx-10 pt-1 lg:pt-6 gap-2 font-bold"
      >
        <FiArrowLeft className="z-[101] font-bold text-2xl"/> 
        <span 
          onClick={() => handleMenuItemClick("heroSection")}
          className="z-[101] text-xl cursor-pointer">
          Back
        </span>
      
      </div>
      


      <div className="z-[101] flex flex-col lg:flex-row gap-6 lg:gap-16 bg-[#DDDAD2] items-center px-10 pt-6 pb-20 md:px-40 lg:pt-20 lg:pb-40 lg:px-20 justify-center">

        <div 
          style={{ backgroundImage: `url(${selectedService.img})`, backgroundPosition:'center', backgroundSize: "cover" }}
          className="w-[100%] h-[340px] lg:w-[500px] lg:h-[500px]"
          alt="spa treatment being applied to the face"
        />

        <div className="flex flex-col w-100 lg:w-[40%]">
          
          <p className="text-base font-normal text-[#9BA858]"
            data-aos="fade-in"
          >
            WE ARE EXPERTS
          </p>
          
          <h2 className="font-medium mb-6 text-5xl text-[#2E4630]"
            data-aos="zoom-out"
            >
            {selectedService.heading}
          </h2>
          
          <div className="text-[green] mb-3">
            <ul>

              {selectedService.benefits.split(".").slice(0, -3).map((element, i) => {
                return <li data-aos="zoom-in" key={i} data-aos-delay={i * 200}> 
                  <span className="text-[green] font-bold text-[20px]">+</span>{element} 
                </li>
              }
              )}
              
            </ul>
          </div>
        
          <p className="text-sm md:text-base text-[#2E4630] my-3 mb-6">
            {selectedService.description}
          </p>



          <div className="z-10 relative bg-[#2E4630] flex p-1 opacity-90 hover:opacity-100 text-white">
            <button 
              onClick={() => window.location.href = "https://www.fresha.com/book-now/esperanza-wellness-qzyn44dd/services?lid=1175294&eid=2766541&pId=1114843"} 
              className="w-[100%] flex py-3 px-5 text-xl md:text-xl border border-slate-300 shadow-xl hover:shadow-md items-center justify-between"
            >
              Book this Treatment
              <span className="relative left-1 top-1.5 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 transform rotate-45 bg-transparent"></span>
            </button> 
          </div>
    

        </div>
        
      </div>
    </div>
  );
}

export default ServiceDetail;
