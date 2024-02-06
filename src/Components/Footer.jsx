import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import fb from "../Assets/fb.svg";
import li from "../Assets/li.svg";
import insta from "../Assets/insta.svg";
import bg from "../Assets/footer-bg.svg";
import rating from "../Assets/stars-icon.svg";
import logo from "../Assets/esper-logo.png";


const Testimonial = ({ text, name }) => (
  <div className="px-6 md:px-10">
   
    <p className="text-[#666] px-6 fontQuicksand text-sm md:text-[18px] leading-normal text-center">
      {text}
    </p>

    <img src={rating} alt={name} className="w-5 h-5 mt-2 md:mt-4 rounded-full mr-3" />
    
    <p className="text-[#232323] fontQuicksand text-sm md:text-[16px] leading-normal font-bold">
      {name}
    </p>

  </div>
);


const Footer = () => {

  return (
    <>
      <div className="bg-[#DDDAD2] flex flex-col justify-center items-center px-10 md:px-20 lg:px-20 p-6 md:pt-12">
        
        {/* Left Side Leaf background image */}
        <div className="absolute flex justify-start items-start w-full mt-[-200px]">
          <img src={bg} alt="a leaf" />
        </div>

        <div className="flex gap-6 justify-between items-center border border-[#2E4630] rounded-[20px] shadow-md px-4 md:px-1 pb-3 shadow-lg">
          
          <div className="flex flex-col gap-3 justify-center items-center">
            
            <p className="text-[#2E4630] fontAbril text-2xl md:text-[40px] font-medium leading-normal px-4 mt-[-1rem] md:mt-[-30px] bg-[#DDDAD2] sm:px-5 text-center">
              What Our Clients Say
            </p>

            <Carousel className="w-[380px] sm:w-[480px] md:w-[660px] xl:w-[900px] my-0 mx-4">
              <Testimonial text="This place has turned my life around. I’ve been coming here for over 10 years. They’ve helped my skin..." name="- Natalie T." />
              <Testimonial text="I LOVEE getting my facials here! Great prices and great services! She has alot of experience dealing..." name="- Melisa Diaz"  />
              <Testimonial text="I developed a scar on my forehead and wanted to see about getting it treated. This place was recommended..." name="- Sergio Mendes" />
            </Carousel>
            
          </div>
        </div>


        <div className="flex flex-col justify-between pt-6 md:pt-3 w-full">
          
          <div className="flex gap-2 justify-between md:mb-3">

            <a className="cursor-pointer w-[30%] md:w-[20%] lg:w-[15%] md:pt-0" href="https://www.esperanzawellness.com/">
              <img
                src={logo}
                alt="esperanza wellness logo"
              />
            </a>

            <div className="flex flex-wrap gap-4 justify-center items-center social-icons">

              <ul> 
                <li>
                  <a href="https://www.esperanzawellness.com/">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fa fa-facebook">
                <img src={fb} alt="facebook logo" />


                    </span>
                  </a> 
                </li>
                <li>
                  <a href="https://www.instagram.com/esperanzaskin/">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fa fa-instagram">
                <img src={insta} alt="instagram logo" />

                    </span>
                  </a> 
                </li>
                <li>
                  <a href="https://www.facebook.com/esperanzaskin/">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fa fa-linkedin">
                    <img src={li} alt="Linkedin logo" />

                    </span>
                  </a> 
                </li>
              </ul>  

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
