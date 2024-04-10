import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import { useLocation } from "react-router-dom";

// import logo from "../Assets/esperanza-logo.png";
import logo from "../Assets/esplogo2.png";

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
    <div className='bg-[#DDDAD2] flex justify-around py-4 px-4 sm:px-6 md:px-2 lg:px-10'>

      {/* { console.log('params', useLocation().pathname === "/")} */}

      {/* Desktop Menu */}
      <div className="z-[101] hidden md:block cursor-pointer w-[20%]">
        <a href="https://www.esperanzawellness.com/">
          <img 
            src={logo}
            alt="esperanza wellness logo"
            data-aos="fade-down"
            />
        </a>
      </div>
      
      <div 
        className="nav hidden md:flex justify-center items-center gap-3 md:gap-1 lg:gap-3 xl:gap-6 w-100"
        // data-aos="fade-down"
        data-aos-delay="50"
      >

        {sections.map((section) => (
          <span
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="cursor-pointer text-[#80ab85] md:text-lg lg:text-xl xl:text-2xl font-medium"
          >
            {section.label}
          </span>
        ))}    

      </div>

      <div className="hidden md:flex relative bg-[#2E4630] flex p-1 opacity-90 hover:opacity-100">
        <button 
          onClick={() => window.location.href = "https://www.fresha.com/book-now/esperanza-wellness-qzyn44dd/services?lid=1175294&eid=2766541&pId=1114843"} 
          className="w-[100%] flex px-4 text-xs md:text-sm justify-center border items-center text-white border-slate-300 shadow-xl hover:shadow-md"
          // data-aos="fade-left"
          // data-aos-delay="200"
        >
          Book Now
          <span className="relative left-1 top-1.5 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 transform rotate-45 bg-transparent"></span>
        </button> 
      </div>







      {/* Mobile Menu */}
      <div className="flex md:hidden flex-row-reverse w-full justify-between">

        <a className="z-[101] cursor-pointer w-[50%] min-w-[160px] max-w-[200px] md:hidden" href="https://www.esperanzawellness.com/">
          <img src={logo} alt="esperanza wellness logo" />
        </a>


        { useLocation().pathname === "/" || "/sample" ? (
          <>
            <div className="container"/>
              
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
                      data-aos="zoom-in-right"
                      data-aos-delay={ idx * 50 }
                    >

                      <button
                        onClick={() => scrollToSection(section.id)}
                        className="cursor-pointer text-xl font-quicksand leading-normal hover:text-[#2E4630]"
                        >
                        {section.label}
                      </button>
                        
                    </li>
                  ))}
                    
                  </ul>
                </nav>
              )}

            {/* </div> */}
          </>
        )
        :
        (
          // <button 
          //   onClick={() => window.location.href = "https://www.fresha.com/book-now/esperanza-wellness-qzyn44dd/services?lid=1175294&eid=2766541&pId=1114843"} 
          //   className="flex hover:shadow-md hover:bg-[#2E4630] hover:text-white text-[#2E4630] text-xs md:text-lg font-medium font-quicksand leading-normal bg-white rounded-tr-[30px] rounded-bl-[30px] py-3 px-8 hover:duration-500 shadow-md"
          //   style={{ boxShadow: "1px 1px 2px" }}
          //   data-aos="fade-down"
          //   data-aos-delay="200"
          // >

          // <button 
          //   onClick={() => window.location.href = "https://www.fresha.com/book-now/esperanza-wellness-qzyn44dd/services?lid=1175294&eid=2766541&pId=1114843"} 
          //   className="spa-btn flex text-md"
          //   // data-aos="fade-down"
          //   data-aos-delay="200"
          // >
          //   Book Now
          // </button>

          <div className="bg-[#2E4630] relative flex p-1 my-5 justify-center opacity-90 hover:opacity-100">
          <button 
            onClick={() => window.location.href = "https://www.fresha.com/book-now/esperanza-wellness-qzyn44dd/services?lid=1175294&eid=2766541&pId=1114843"} 
            className="w-[100%] flex px-4 py-2 text-sm sm:text-md justify-center border items-center text-white border-slate-300 shadow-xl hover:shadow-md"
            // data-aos="fade-left"
            // data-aos-delay="200"
          >
            Book Now
            <span className="relative left-1 top-1.5 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 transform rotate-45 bg-transparent"></span>
          </button> 
          </div>
          
        )}
                
                
      </div>

    </div>
  );
}

export default Navbar;
