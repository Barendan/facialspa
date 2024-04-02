import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bg from "../Assets/footer-bg.svg";
// import rating from "../Assets/stars-icon.svg";
import logo from "../Assets/esplogo2.png";



const Testimonial = ({ text, name }) => {
  // const maxLength = 100;

  // // Check if the length of the text is greater than the maximum length
  // const trimmedText = text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  return (
    <div className="px-14 pt-1 sm:pt-2 md:px-20">

      <div className="testimonial-container">
        <p className="testimonial-text text-[#666] sm:pt-0 leading-normal text-center overflow-hidden">
          {text}
        </p>
      </div>

      <p className="text-[#232323] pt-1 text-sm md:text-[16px] leading-normal font-bold">
        {name}
      </p>
    </div>
  );
};


const Footer = () => {
  return (
    <div className="bg-[#DDDAD2] flex justify-center py-6 lg:pt-12">
      
      {/* Left Side Leaf background image */}
      <div className="absolute flex w-full mt-[-200px]">
        <img src={bg} alt="a leaf" />
      </div>

      <div className="flex flex-col lg:flex-row w-full lg:justify-evenly items-center lg:ml-5">
        
        {/* Logo on the left */}
        <div className="hidden lg:block w-[20%]">    
          <a className="cursor-pointer w-[30%] md:w-[20%] lg:w-[20%]" href="https://www.esperanzawellness.com/">
            <img
              src={logo}
              alt="esperanza wellness logo"
              />
          </a>
        </div>


        {/* When large, it should show at the bottom, when screens smaller than large, stack */}

        {/* Feedback box */}
        <div className="border border-[#2E4630] rounded-[20px] shadow-md px-4 sm:px-1 pb-3 shadow-lg w-[100%] sm:w-[90%] md:w-[80%] lg:w-[50%]">
          
          <div className="flex flex-col gap-3 justify-center items-center">
            
            <p className="text-[#2E4630] fontPrata text-2xl md:text-[26px] lg:text-[40px] font-medium leading-normal px-4 mt-[-1rem] md:mt-[-30px] bg-[#DDDAD2] sm:px-5 text-center">
              What Our Clients Say
            </p>

            <Carousel className="w-[100%] sm:w-[95%] 2xl:w-[90%] mt-[-1rem] mb-[0.5rem]">
              <Testimonial text="This place has turned my life around. I’ve been coming here for over 10 years. They’ve helped my skin progress through all its issues (severe cystic acne, hyperpigmentation, etc.). They’ve seen me at my worst and helped me progress to the best skin I’ve ever had. Affordable pricing, genuine attitude, and a calm atmosphere. Every facial feels therapeutic." name="- Natalie T." />
              <Testimonial text="I LOVEE getting my facials here! Great prices and great services! She has alot of experience dealing with acne problems and does the best extraction facials! She leaves your skin feeling soft and more clean than ever! 😍😍😍😍 truly recommended." name="- Melisa Diaz"  />
              <Testimonial text="I developed a scar on my forehead and wanted to see about getting it treated. This place was recommended by a friend and as soon as i stepped in, I had already felt the place was right. The technician, Stephanie, made me feel right at home as i was placed comfortably on the treatment table. She began to work on the affected area and provided ointments for me to continue with treatment. Looking forward to seeing the outcome but i already can see the progress. Highly recommend and will definitely be returning. :)" name="- Sergio Mendes" />
            </Carousel>
            
          </div>
        </div>


        <div className="social-icons flex lg:flex-row justify-between px-4 pt-3 md:w-[80%] lg:w-[20%]">

          <div className="lg:hidden w-[50%]">    
            <a className="cursor-pointer w-[30%] md:w-[20%] lg:w-[20%]" href="https://www.esperanzawellness.com/">
              <img
                src={logo}
                alt="esperanza wellness logo"
                />
            </a>
          </div>


          <section className="ss-icon flex lg:justify-evenly w-[40%] lg:w-[100%]">
            <a href="https://www.facebook.com/esperanzaskin/"><article><span>facebook</span></article></a>
            <a href="https://www.instagram.com/esperanzaskin/"><article><span>instagram</span></article></a>
            <a href="https://www.esperanzawellness.com/"><article><span>linkedin</span></article></a>
          </section>

        </div>

        
{/* 
        <div className="md:hidden text-[#666] fontManrope text-xs leading-normal">
          2023 LionCoded. All rights <br/> reserved by Esperanza Wellness
        </div>

        <p className="hidden md:block text-[#666] fontManrope text-xs leading-normal">
          2023 LionCoded. All rights reserved by Esperanza Wellness
        </p> */}

      </div>

    </div>
  );
}

export default Footer;
