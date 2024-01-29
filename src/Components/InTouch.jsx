import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

import phoneIcon from "../Assets/phone-icon.svg";
import locationIcon from "../Assets/location-icon.svg";
import mailIcon from "../Assets/mail-icon.svg";

import bg2 from "../Assets/touch-bg-2.svg";
import bg3 from "../Assets/touch-bg-3.svg";
import bg4 from "../Assets/touch-bg-4.svg";



function InTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  };
 
  const sendEmail = () => {
    const userID = "o7sxEIHoem1uxKznK";
    const templateID = "template_3kyyb2l";

    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      to_name: "Esperanza Wellness",
      message: formData.message,
    };

    return emailjs.send("service_h8m6hbq", templateID, templateParams, userID);
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }
    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log('submit clicked')

    if (!validateForm()) {
      return;
    }

    try {
      await sendEmail();
      toast.success("Mail sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Email could not be sent:", error);
    }
  };


  
  return (
    <>
      <ToastContainer />

      <div id="inTouchSection" className="bg-[#DDDAD2] flex justify-center items-center py-20 px-4 sm:px-6 md:px-8 lg:px-24">

        <div className="absolute flex justify-between w-full mt-[-1431px] lg:mt-[-714px]">
          {/* <img className="opacity-[0.9]" src={bg1} alt="_bg" /> */}
          <img className="hidden sm:block opacity-[0.0] z-[-1]" src={bg3} alt="_bg" />
          <img className="hidden sm:block opacity-[0.3] z-[-1]" src={bg3} alt="_bg" />
        </div>


        <div 
          data-aos="flip-up" 
          // data-aos-delay="200" 
          className="z-10 flex flex-col relative w-[90%]"
        >

          <div className="flex flex-col lg:flex-row">
            
            <div className="w-full lg:w-[70%] bg-[#EDEBE4] pb-[10rem] md:pb-0 rounded-[20px] lg:rounded-tr-[0px] lg:rounded-br-[0px] flex flex-col gap-6 p-3 lg:pr-[200px]">
              

              {/* Intro Text and Form */}
              <div className="flex flex-col gap-8 px-6">
                
                <div className="flex flex-col gap-3">
                  <p className="text-[#232323] text-[47px] fontAbril font-medium leading-normal ">
                    Get in <span className="text-[#2E4630]"></span>Touch
                  </p>
                  <p className="text-[#666] fontQuicksand leading-normal text-md md:text-lg">
                    We would love to make you feel amazing. Contact us and let's make it happen!
                  </p>
                </div>


                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Name*"
                    className="border border-[#DFD8CA] rounded-[10px] py-3 px-4 bg-transparent"
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-[#DFD8CA] rounded-[10px] py-3 px-4 bg-transparent"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                  />
                  <input
                    type="tel"
                    placeholder="Phone number*"
                    className="border border-[#DFD8CA] rounded-[10px] py-3 px-4 bg-transparent"
                    onChange={handleChange}
                    name="phone"
                    value={formData.phone}
                  />
                  <textarea
                    placeholder="Message"
                    className="border border-[#DFD8CA] rounded-[10px] py-3 px-4 bg-transparent h-[152px]"
                    onChange={handleChange}
                    name="message"
                    value={formData.message}
                  />

                  {formErrors.message && <p className="text-red-500">{formErrors.message}</p>}

                  <button 
                    onClick={handleSubmit}
                    className="z-10 rounded-full text-white bg-[#2E4630] p-3 fontQuicksand text-md leading-normal hover:shadow-md cursor-pointer"
                  >
                    Send Message
                  </button>
                
                </div>

              </div>

              
              {/* Contact Information */}
              <div className="flex gap-6 justify-start flex-wrap items-center pb-20 md:pb-10 px-10">

                <div className="flex gap-3 justify-start items-center">

                  <img src={phoneIcon} className="md:hidden" width={42} height={42} alt="_phone" />
                  <img src={phoneIcon} 
                    width={28} height={28}
                    className="hidden md:block" 
                    alt="_phone" 
                  />

                  <div className="flex flex-col">
                    <p className="fontMont font-medium text-lg leading-normal text-[#2E4630]">
                      Phone
                    </p>
                    <p className="fontMont text-md leading-normal text-[#666]">
                      (305) 306 7522
                    </p>
                  </div>

                </div>

                <div className="flex gap-3 justify-start items-center">
                  
                  <img src={mailIcon} className="md:hidden" width={42} height={42} alt="_email" />
                  <img src={mailIcon} className="hidden md:block" width={28} height={28} alt="_email" />

                  <div className="flex flex-col">
                    <p className="fontMont font-medium text-lg leading-normal text-[#2E4630]">
                      Email
                    </p>
                    <p className="fontMont text-md leading-normal text-[#666]">
                      stephaniesperanzaskin@gmail.com
                    </p>
                  </div>

                </div>

                <div className="flex gap-3 justify-start items-center">
                  
                  <img src={locationIcon} className="md:hidden" width={42} height={42} alt="_location" />
                  <img src={locationIcon} className="hidden md:block" width={28} height={28} alt="_location" />

                  <div className="flex flex-col">
                    <p className="fontMont font-medium text-lg leading-normal text-[#2E4630]">
                      Location
                    </p>
                    <p className="fontMont text-md leading-normal text-[#666]">
                      8275 W 12th Ave, Hialeah, Florida
                    </p>
                  </div>

                </div>

              </div>
              
            </div>


            {/* Two google maps, one for desktop and one for mobile */}
            <div className="w-full lg:w-[30%] bg-[#2E4630] rounded-bl-[20px] rounded-br-[20px] lg:rounded-tl-[0px] lg:rounded-bl-[0px] flex justify-center items-center py-20 md:py-80 lg:py-0">

              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.135994871039!2d-80.31046002404587!3d25.897899502962797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bace5d1235b1%3A0x40b5cb76ccd4410a!2sEsperanza%20Skin%20Care!5e0!3m2!1sen!2sus!4v1705526970563!5m2!1sen!2sus" 
                title="Esperanza Location" 
                width="336px"
                height="280px"
                style={{ border: 0, borderRadius: 10, position: "absolute", maxWidth: "404px", top: "71%" }}
                className="md:hidden"
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              /> 

              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.135994871039!2d-80.31046002404587!3d25.897899502962797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bace5d1235b1%3A0x40b5cb76ccd4410a!2sEsperanza%20Skin%20Care!5e0!3m2!1sen!2sus!4v1705526970563!5m2!1sen!2sus" 
                title="Esperanza Location" 
                width="100%"
                height="519"
                style={{ border: 0, borderRadius: 10, position: "absolute", maxWidth: "404px" }}
                className="hidden md:block lg:left-[55%]"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />

            </div>

          </div>

        </div>

        <div className="absolute flex justify-between w-full mt-[260px]">
          <img className="opacity-[0.3] z-[-1]" src={bg2} alt="_bg" />
          <img className="hidden sm:block opacity-[0.6]" src={bg4} alt="_bg" />
        </div>

      </div>
    </>
  );
}

export default InTouch;
