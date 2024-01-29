import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import fb from "../Assets/fb.svg";
import li from "../Assets/li.svg";
import insta from "../Assets/insta.svg";
import bg from "../Assets/footer-bg.svg";
// import logo from "../Assets/logo.svg";
import logo from "../Assets/esper-logo.png";


const Testimonial = ({ text, name }) => (
  <div className="px-6 md:px-20">
   
    <p className="text-[#666] px-6 fontQuicksand text-sm md:text-[25px] leading-normal text-center">
      {text}
    </p>

    {/* <img src={rating} alt={name} className="w-12 h-12 my-5 rounded-full mr-3" /> */}
    
    <p className="text-[#232323] pt-3 fontQuicksand text-sm md:text-[20px] leading-normal font-bold">
      {name}
    </p>

  </div>
);

const Footer = () => {

  return (
    <>
      <div className="bg-[#DDDAD2] flex flex-col gap-3 justify-center items-center px-4 sm:px-6 md:px-8 lg:px-20 pt-12">
        
        {/* Left Side Leaf background image */}
        <div className="absolute flex justify-start items-start w-full mt-[-200px]">
          <img src={bg} alt="_bg" />
        </div>

        <div className="flex gap-6 justify-between items-center border border-[#2E4630] rounded-[20px] shadow-md px-6 py-8">
          
          <div className="flex flex-col gap-3 justify-center items-center">
            
            <p className="text-[#2E4630] fontAbril text-xl md:text-[40px] font-medium leading-normal px-4 pb-4 mt-[-3rem] md:mt-[-65px] bg-[#DDDAD2] sm:px-5 text-center">
              What Our Clients Say
            </p>

            <Carousel className="w-[380px] my-[-20px] md:my-0 sm:w-[580px] md:w-[728px] lg:w-[950px] xl:w-auto">
              <Testimonial text="1 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.." name="John Doe" />
              <Testimonial text="when an unknown printer took a galley of type and scrambled it to make a type specimen book." name="Kyle Olive"  />
              <Testimonial text="3 printer took a galley of type and scrambled it to make a type specimen book." name="Bob Smith" />
            </Carousel>
            
          </div>
        </div>


        <div className="flex flex-col justify-between py-2 w-full">
          
          <div className="flex gap-2 justify-between mb-3">
            <img
              className="w-[10%]"
              src={logo}
              alt="_logo"
            />

            <div className="flex flex-wrap gap-4 justify-center items-center">
              {/* <img className="cursor-pointer" src={twitter} alt="_twitter" /> */}
              <img className="cursor-pointer" src={li} alt="_LinkedIn" />
              <img className="cursor-pointer" src={insta} alt="_Insta" />
              <img className="cursor-pointer" src={fb} alt="_fb" />
            </div>
           
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
    </>
  );
}

export default Footer;
