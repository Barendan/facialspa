import { useState, useRef } from "react";
import { useClickAway } from "react-use";
// import { AnimatePresence, motion } from "framer-motion";
// import { Squash as Hamburger } from "hamburger-react";

// import { FiMenu } from "react-icons/fi";
// import logo from "../Assets/logo.svg";
import logo from "../Assets/esper-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setMenuOpen(false));
  
  const scrollToSection = (id) => {
    setMenuOpen(false);
    console.log('whats menu', menuOpen)

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" ,  block: "start", 
      inline: "nearest",});
    };

  };

  const sections = [
    { id: "heroSection", label: "Home" },
    { id: "servicesSection", label: "Services" },
    { id: "productsSection", label: "Products" },
    { id: "aboutSection", label: "About Us" },
    { id: "inTouchSection", label: "Contact" },
  ];
  

  
  return (
    <>
      <div className='bg-[#DDDAD2] flex justify-between items-center py-4 px-4 sm:px-6 md:px-6 lg:px-16'>

        {/* Desktop Menu */}
        <a className="z-[1] hidden md:block cursor-pointer w-[12%]" href="https://www.esperanzawellness.com/">
          <img 
            src={logo} 
            alt="_logo"
            data-aos="fade-down"
          />
        </a>
        
        <div 
          className="z-10 hidden md:flex justify-center items-center gap-3 xl:gap-6 pt-3 nav"
          // data-aos="fade-down"
          data-aos-delay="50"
        >

          {sections.map((section) => (
            <span
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="cursor-pointer text-[#333] md:text-lg lg:text-xl xl:text-2xl font-quicksand leading-normal"
            >
              {section.label}
            </span>
          ))}    

        </div>

        <button 
          onClick={() => window.location.href = "https://www.fresha.com/book-now/esperanza-wellness-qzyn44dd/services?lid=1175294&eid=2766541&pId=1114843"} 
          className="hidden md:flex mt-4 hover:shadow-md hover:bg-[#2E4630] hover:text-white text-[#2E4630] text-xs md:text-lg font-medium font-quicksand leading-normal bg-white rounded-tr-[30px] rounded-bl-[30px] py-3 px-8 hover:duration-500 shadow-md"
          style={{ boxShadow: "1px 1px 2px" }}
          // data-aos="fade-down"
          data-aos-delay="200"
        >
          Book Now
        </button>


        {/* Mobile Menu */}
        <div className="flex md:hidden w-full justify-between items-center">

          <a className="z-[1] cursor-pointer w-[25%] md:hidden" href="https://www.esperanzawellness.com/">
            <img src={logo} alt="_logo" />
          </a>


          <div className="container">

            <button 
              id="burger" 
              className={ menuOpen ? "open-main-nav is-open":"open-main-nav"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="burger"></span>
              <span className="burger-text">Menu</span>
            </button>

            {menuOpen && (
              <nav className="main-nav is-open" id="main-nav">
                <ul>

                  {sections.map((section, idx) => (
                    <li
                      key={section.id}
                      className=""
                    >

                      <a
                        href="#"
                        onClick={() => scrollToSection(section.id)}
                        className="cursor-pointer text-xl font-quicksand leading-normal hover:text-[#2E4630]"
                      >
                        {section.label}
                      </a>
                      
                    </li>
                  ))}

                </ul>
              </nav>
            )}

          </div>

          

        </div>

      </div>
    </>
  );
}

export default Navbar;
