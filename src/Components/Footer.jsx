import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import fb from "../Assets/fb.svg";
import li from "../Assets/li.svg";
import insta from "../Assets/insta.svg";
import bg from "../Assets/footer-bg.svg";
import rating from "../Assets/stars-icon.svg";
import logo from "../Assets/esper-logo.png";


const Testimonial = ({ text, name }) => (
  <div className="px-6 md:px-20">
   
    <p className="text-[#666] px-6 fontQuicksand text-sm md:text-[25px] leading-normal text-center">
      {text}
    </p>

    <img src={rating} alt={name} className="w-6 h-6 mt-4 rounded-full mr-3" />
    
    <p className="text-[#232323] fontQuicksand text-sm md:text-[20px] leading-normal font-bold">
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
              <Testimonial text="This place has turned my life around. I’ve been coming here for over 10 years. They’ve helped my skin..." name="- Natalie T." />
              <Testimonial text="I LOVEE getting my facials here! Great prices and great services! She has alot of experience dealing..." name="- Melisa Diaz"  />
              <Testimonial text="I developed a scar on my forehead and wanted to see about getting it treated. This place was recommended..." name="- Sergio Mendes" />
            </Carousel>
            
          </div>
        </div>


        <div className="flex flex-col justify-between py-2 w-full">
          
          <div className="flex gap-2 justify-between mb-3">

            <a className="cursor-pointer w-[10%]" href="https://www.esperanzawellness.com/">
              <img
                src={logo}
                alt="_logo"
              />
            </a>

            <div className="flex flex-wrap gap-4 justify-center items-center social-icons">
{/*               
              <a className="cursor-pointer" href="https://www.esperanzawellness.com/">
                <img src={li} alt="_LinkedIn" />
              </a>

              <a className="cursor-pointer" href="https://www.instagram.com/esperanzaskin/">
                <img src={insta} alt="_Insta" />
              </a>

              <a className="cursor-pointer" href="https://www.facebook.com/esperanzaskin/">
                <img src={fb} alt="_fb" />
              </a> */}

              <ul> 
                <li>
                  <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fa fa-facebook">
                <img src={fb} alt="_fb" />


                    </span>
                  </a> 
                </li>
                <li>
                  <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fa fa-instagram">
                <img src={insta} alt="_Insta" />

                    </span>
                  </a> 
                </li>
                <li>
                  <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fa fa-linkedin">
                    <img src={li} alt="_LinkedIn" />

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
