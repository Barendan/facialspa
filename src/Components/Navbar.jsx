import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
// import { FiMenu } from "react-icons/fi";
import logo from "../Assets/logo.svg";

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
      <div className='bg-[#DDDAD2] flex justify-between items-center py-4 px-4 sm:px-6 md:px-8 lg:px-24'>
        
        {/* Desktop Menu */}
        <img 
          className="z-[1] hidden md:block cursor-pointer" 
          src={logo} 
          alt="_logo"
          data-aos="fade-down"
        />

        <div 
          className="z-10 hidden md:flex justify-center items-center gap-12"
          data-aos="fade-down"
          data-aos-delay="50"
        >

          {sections.map((section) => (
            <span
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal"
            >
              {section.label}
            </span>
          ))}    

        </div>

        <button 
          onClick={() => window.location.href = "https://www.fresha.com/book-now/esperanza-wellness-qzyn44dd/services?lid=1175294&eid=2766541&pId=1114843"} 
          className="hidden md:flex text-white text-lg font-quicksand leading-normal bg-[#2E4630] rounded-tl-[30px] rounded-br-[30px] py-4 px-6"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Book Now
        </button>


        {/* Mobile Menu */}
        <div className="flex md:hidden w-full justify-between items-center">

          <img
            className="z-[1] md:hidden"
            src={logo}
            height={35}
            width={35}
            alt="_logo"
          />

          <div ref={ref}>
            <Hamburger size={30} toggled={menuOpen} toggle={setMenuOpen} />
          </div>

        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="z-[100] fixed right-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 border-b border-b-white/20"
            >
              
              <div className="flex rounded-[12px] bg-white p-4 gap-2 flex flex-col shadow-md">
              
              {sections.map((section, idx) => (
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + idx / 10,
                  }}
                  key={section.id}
                  className="w-full list-none p-[0.08rem] rounded-xl bg-gradient-to-tr"
                >

                  <p
                    // key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal"
                  >
                    {section.label}
                  </p>

                </motion.li>
              ))}

              </div>
            {/* </div> */}
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </>
  );
}

export default Navbar;
