import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bg from "../Assets/footer-bg.svg";
// import rating from "../Assets/stars-icon.svg";
import logo from "../Assets/esplogo2.png";


const Testimonial = ({ text, name }) => (
  <div className="px-6 md:px-6 2xl:px-10">
   
    <div className="overflow-hidden max-h-[50px]">
    <p className="text-[#666] px-20 text-sm md:text-[16px] 2xl:text-[18px] md:px-10 leading-normal text-center overflow-hidden">
      {text}
    </p>
    </div>

    {/* <img src={rating} alt={name} className="w-5 h-5 rounded-full mr-3" /> */}
    
    <p className="text-[#232323] text-sm md:text-[16px] leading-normal font-bold">
      {name}
    </p>

  </div>
);


const Footer = () => {
  return (
    <>
      <div className="bg-[#DDDAD2] flex justify-center py-6 md:pt-12">
        
        {/* Left Side Leaf background image */}
        <div className="absolute flex w-full mt-[-200px]">
          <img src={bg} alt="a leaf" />
        </div>

        <div className="flex w-full justify-evenly items-center ml-5">
          
          {/* Logo on the left */}
          <div className="w-[20%]">    
            <a className="cursor-pointer w-[30%] md:w-[20%] lg:w-[20%]" href="https://www.esperanzawellness.com/">
              <img
                src={logo}
                alt="esperanza wellness logo"
                />
            </a>
          </div>


            <div className="border border-[#2E4630] rounded-[20px] shadow-md px-4 md:px-1 pb-3 shadow-lg w-[50%]">
              
              <div className="flex flex-col gap-3 justify-center items-center">
                
                <p className="text-[#2E4630] fontPrata text-2xl md:text-[26px] lg:text-[40px] font-medium leading-normal px-4 mt-[-1rem] md:mt-[-30px] bg-[#DDDAD2] sm:px-5 text-center">
                  What Our Clients Say
                </p>

                <Carousel className="w-[90%] 2xl:w-[90%] mt-[-1rem] mb-[0.5rem]">
                  <Testimonial text="This place has turned my life around. I’ve been coming here for over 10 years. They’ve helped my skin..." name="- Natalie T." />
                  <Testimonial text="I LOVEE getting my facials here! Great prices and great services! She has alot of experience dealing..." name="- Melisa Diaz"  />
                  <Testimonial text="I developed a scar on my forehead and wanted to see about getting it treated. This place was recommended..." name="- Sergio Mendes" />
                </Carousel>
                
              </div>
            </div>


            <div className="social-icons w-[20%]">

              <section class="ss-icon">
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
    </>
  );
}

export default Footer;
