import { useState } from "react";
import logo from "../Assets/logo.svg";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" ,  block: "start", 
      inline: "nearest",});
    }
  };

  return (
    <>
      <div className='bg-[#DDDAD2] flex justify-between items-center py-4 px-4 sm:px-6 md:px-8 lg:px-24'>

        <img 
          className="z-[1]" 
          src={logo} 
          alt="_logo" 
          data-aos="fade-down"
        />
        
        <div 
          className="z-10 hidden md:flex justify-center items-center gap-12"
          data-aos="fade-down"
          data-aos-delay="50"
        >
          <p onClick={() => scrollToSection("heroSection")} className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal">
            Home
          </p>
          <p onClick={() => scrollToSection("aboutSection")} className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal">
            About
          </p>
          <p onClick={() => scrollToSection("servicesSection")} className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal">
            Services
          </p>
          <p onClick={() => scrollToSection("productsSection")} className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal">
            Events
          </p>
          <p onClick={() => scrollToSection("inTouchSection")} className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal">
            Contact
          </p>
        </div>

        <button 
          className="hidden md:flex text-white text-lg font-quicksand leading-normal bg-[#2E4630] rounded-tl-[30px] rounded-br-[30px] py-4 px-6"
          data-aos="fade-down"
          data-aos-delay="200"
       >
          Book Now
        </button>

        <FiMenu
          onClick={() => setMenuOpen(!menuOpen)}
          className="cursor-pointer md:hidden text-black h-6 w-6"
          id="dropdownHoverButton"
          data-dropdown-toggle="dropdownHover"
          data-dropdown-trigger="click"
        />

        {menuOpen && (
          <div className="z-[100] flex justify-end items-center absolute w-full mt-[264px] ml-[-36px]">
            <div className="flex rounded-[12px] bg-white p-4 gap-2 flex flex-col shadow-md">
              <p onClick={() => scrollToSection("heroSection")} className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal">
                Home
              </p>
              <p onClick={() => scrollToSection("aboutSection")}  className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal">
                About
              </p>
              <p onClick={() => scrollToSection("servicesSection")} className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal">
                Services
              </p>
              <p onClick={() => scrollToSection("productsSection")} className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal">
                Events
              </p>
              <p onClick={() => scrollToSection("inTouchSection")} className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal">
                Contact
              </p>
              <p className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal">
                Book Now
              </p>
            </div>
          </div>
        )}
        
      </div>
    </>
  );
}

export default Navbar;
