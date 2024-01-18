// import twitter from "../Assets/twitter.svg";
import fb from "../Assets/fb.svg";
import li from "../Assets/li.svg";
import insta from "../Assets/insta.svg";
import bg from "../Assets/footer-bg.svg";
import logo from "../Assets/logo.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Footer() {
  return (
    <>
      <div className="bg-[#DDDAD2] flex flex-col gap-3 justify-center items-center px-4 sm:px-6 md:px-8 lg:px-20 pt-16">
        
        <div className="absolute flex justify-start items-start w-full mt-[-200px]">
          <img src={bg} alt="_bg" />
        </div>

        <div className="flex gap-6 justify-between items-center border border-[#2E4630] rounded-[20px] shadow-md px-4">
          
          <div className="flex flex-col gap-3 justify-center items-center">
            
            <p className="text-[#2E4630] fontAbril text-[40px] font-medium leading-normal mt-[-34px] bg-[#DDDAD2] sm:px-5 text-center">
              What Our Clients Say
            </p>

            <Carousel className="w-[300px] sm:w-[580px] md:w-[728px] lg:w-[950px] xl:w-[900px] pb-5 px-3 pb-0">
              
              <div className="px-12 md:px-20">
                <p className="text-[#666] fontQuicksand text-[18px] leading-normal text-center">
                  1 Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled.
                </p>

                <p className="text-[#232323] pt-1 fontQuicksand text-[16px] leading-normal font-medium">
                  - Kathryn Murphy
                </p>
              </div>

              <div className="px-12 md:px-20">
                <p className="text-[#666] fontQuicksand text-[25px] leading-normal text-center">
                  2 Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>

              <div className="px-12 md:px-20">
                <p className="text-[#666] fontQuicksand text-[25px] leading-normal text-center">
                  3 Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>

            </Carousel>
            
          </div>
        </div>

        {/* <div className="border-t border-[#2E4630] flex flex-col justify-between pt-3 pb-3 w-full"> */}
        <div className="flex flex-col justify-between pt-0 pb-3 w-full">
          
          <div className="flex gap-2 justify-between mb-3">
            <img
              className="rounded-full w-[45px] h-[46px]"
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

          {/* <p className="tetx-[#666] fontManrope text-xs leading-normal">
              2023 Massage. All rights reserved by LionCoded
          </p> */}

        </div>

      </div>
    </>
  );
}

export default Footer;
