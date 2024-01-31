import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import rfServiceImg from "../Assets/radiofrequency.jpg";
import cpServiceImg from "../Assets/chemicalpeel.jpg";
import mnServiceImg from "../Assets/microneedling.jpg";
import serviceImg2 from "../Assets/service-img-2.png";
import serviceImg3 from "../Assets/service-img-3.png";
import serviceImg6 from "../Assets/service-img-6.png";
import { FiArrowLeft } from "react-icons/fi";


const serviceList = [
  {
    img: mnServiceImg,
    heading: "Microneedling",
    description:
      `Indulge in the epitome of skincare luxury at our facial spa, where microneedling becomes an artful ritual. Our safe and minimally invasive procedure involves ultra-fine needles puncturing the skin, infusing a customized serum blend to awaken your skin's innate healing powers.\n
      Step into a realm of opulent rejuvenation, where every gentle touch resonates with precision and refinement, stimulating collagen production for a regal complexion. Within our sanctuary, experience a harmonious convergence of luxury and extraordinary beauty, as we unveil a world where your skin's radiance takes center stage.`,
    benefits: "Increases collagen production. Minimizes fine lines and wrinkles. Minimizes pore size. Brightens complexion. Improves acne scars and stretch marks. Improves skin tone and texture.",
    green: false,
  },
  {
    img: serviceImg2,
    heading: "Oxygenation Trio",
    description:
    "The ultimate skin revitalization is finally possible with Oxygen Therapy. Embark on a revitalization journey with our dynamic three-step oxygenation trio, a non-invasive alternative, transcending traditional skincare. Immerse yourself in the gentle caress of pure oxygen, infusing your skin with vitality and vibrancy while promoting cellular regeneration and collagen production. This rejuvenating process repairs and prevents damage caused by free radicals, transforming sluggish, stressed, or acne-affected skin into a plump radiant glow.Oxygen Therapy unveils a luminous, refreshed complexion that speaks of timeless elegance. Breathe new life into your skin and enhance its vitality with the ultimate trifecta of oxygenation.",
    benefits: "Stimulates oxygenation and circulation. Reduces inflammation. Promotes exfoliation. Provides hydration. Plumps skin.",
    green: false,
  },
  {
    img: cpServiceImg,
    heading: "Chemical Peels",
    description:
      "Embark on a journey of skincare refinement with our exclusive line of Facial Peels, where the artistry of transformative rejuvenation takes center stage. This symphony of exquisite processes involves applying a blend of acids, eliminating damaged layers and diminishing various skin conditions such as fine lines, hyperpigmentation, acne, and rosacea.         Embrace the meticulously curated procedure as each peel delicately unveils a luminous, youthful canvas beneath. Gently exfoliate and revitalize your while gracefully erasing the marks of time.",
    benefits: "Improves skin texture. Increase collagen and elastin. Improves acne and acne scaring. Evens skin tone removing unwanted spots. Diminishes fine lines and wrinkles. Controls certain skin conditions",
    green: false,
  },
  {
    img: serviceImg3,
    heading: "Hydro-Facial",
    description:
      "Elevate your skincare experience to the pinnacle of opulence with our exquisite Hydro-Facial experience. Immerse yourself in the gentle embrace of powerful yet gentle hydro-dermabrasion, cleansing every pore with precision, by seamlessly marrying advanced technology with the artistry of pampering. Crafted to unveil a new standard of skincare luxury, this transcendent procedure delicately purifies, hydrates, and revitalizes your skin. Each exquisite touch embodies the essence of timeless beauty and sophistication, inviting you to bask in the allure of rejuvenation like never before. The tailored serums, a symphony of replenishment, leave your complexion with an unparalleled luminosity and a transformative, radiant glow.",
    benefits: "Hydrates the skin. Cleanses impurities. Reduces blackheads. Restores firmness. Suitable for all skin types and tones. Immediate and consistent results. Gentle on the skin.",
    green: false,
  },
  {
    img: serviceImg6,
    heading: "Microdermabrasion",
    description:
    "Elevate your skincare routine with our exquisite Microdermabrasion treatment—a testament to refinement beyond the ordinary. Microdermabrasion is a minimally invasive resurfacing procedure that uses a diamond tip to gently remove the outermost layer of the skin and reveal healthier skin. After resurfacing the skin, it becomes more receptive towards the next treatment, enhancing overall results. This gentle yet powerful exfoliation process meticulously refines your skin's texture, revealing a luminous, youthful glow. Upgrade your skincare experience to a new level of refinement where each touch embodies the essence of timeless beauty and revitalization.",
    benefits: "Improves skin texture. Lightens dark spots. Reduces acne scars, enlarged pores, fine lines and stretch marks. Evens out skin tone. Enhances post treatment.",
    green: false,
  },
  {
    img: rfServiceImg,
    heading: "Radio Frequency",
    description:
      "Enter the future with Radiofrequency (RF) therapy, an advanced non-surgical skin-tightening method that redefines the essence of skincare luxury. This cutting-edge treatment utilizes energy waves to heat the deep layers of your skin, promoting the synthesis of collagen and elastin for enhanced firmness. The gentle yet powerful radio waves work to sculpt and tighten your skin, revealing a youthful allure. Release the wear of time and unveil your resplendent visage through a treatment that seamlessly blends nature and luxury. RF Treatment, is the pinnacle of skincare treatment, let it transform your skin and leave it revitalized like never before.",
    benefits: "Skin tightening and sculpting. Improves collagen production. Reduces fine lines, wrinkles and aging sagging skin. Smoothes out cellulite bulges. No downtime. Natural and safe for all kinds of skin.",
    green: false,
  },
];


function ServiceDetail() {
  const navigate = useNavigate();
  const { serviceId } = useParams();

  useEffect(()=>{      window.scrollTo(0, 0);
  },[])
  
  const handleMenuItemClick = (id) => {
    // Save the current id to local storage
    // localStorage.setItem("currentId", id);
    // Navigate to home
    navigate("/");
  };

  const selectedService = serviceList.find(
    (service) => service.heading.toLowerCase().replace(/\s+/g, "-") === serviceId
  );

  if (!selectedService) {
    return <div>Service not found</div>;
  }

  return (
    <div className="bg-[#fefbf0] fontQuicksand">

      <div 
        className="flex items-center mx-10 pt-6 gap-2 font-bold cursor-pointer"
        onClick={() => handleMenuItemClick("heroSection")}
      >
        <FiArrowLeft className="font-bold text-2xl"/> 
        <span className="text-xl">
          Back
        </span>
      
      </div>
      

      <div className="flex flex-col md:flex-row gap-16 bg-[#fefbf0] items-center px-10 pt-20 pb-40 md:px-40 justify-center">

        <div 
          style={{ backgroundImage: `url(${selectedService.img})`, backgroundPosition:'center', backgroundSize: "cover" }}
          className="w-[300px] h-[200px] md:w-[500px] md:h-[500px]"
        />

        <div className="flex flex-col w-100 md:w-[40%]">
          <p className="text-base font-normal text-[#9BA858]">
            WE ARE EXPERTS
          </p>
          
          <h2 className="text-base font-normal my-6 md:text-5xl text-[#FF8300]">
            {selectedService.heading}
          </h2>
        
          <p className="text-sm md:text-base text-[#ffbf99] my-4">{selectedService.description}</p>
          <p className="text-base font-normal text-[#9BA858] mt-5">Book Now</p>       
        </div>
        
        </div>
      </div>
  );
}

export default ServiceDetail;
