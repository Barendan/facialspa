import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";

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

          <a className="z-[1] md:hidden cursor-pointer w-[23%] md:w-[20%] lg:w-[15%]" href="https://www.esperanzawellness.com/">
            <img
              src={logo}
              // height={50}
              // width={50}
              alt="_logo"
            />
          </a>

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
