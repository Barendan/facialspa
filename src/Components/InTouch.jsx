// import mapImg from "../Assets/map-img.svg";
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import phoneIcon from "../Assets/phone-icon.svg";
import locationIcon from "../Assets/location-icon.svg";
import mailIcon from "../Assets/mail-icon.svg";
// import bg1 from "../Assets/touch-bg-1.svg";
import bg2 from "../Assets/touch-bg-2.svg";
import bg3 from "../Assets/touch-bg-3.svg";
// import bg4 from "../Assets/touch-bg-4.svg";
// import bg5 from "../Assets/touch-bg-5.svg";

function InTouch() {
  
  return (
    <>
      <div id="inTouchSection" className="flex justify-center items-center py-20 px-4 sm:px-6 md:px-8 lg:px-24">

        <div className="absolute flex justify-between w-full mt-[-1431px] lg:mt-[-714px]">
          {/* <img className="opacity-[0.9]" src={bg1} alt="_bg" /> */}
          <img className="hidden sm:block opacity-[0.0] z-[-1]" src={bg3} alt="_bg" />
          <img className="hidden sm:block opacity-[0.3] z-[-1]" src={bg3} alt="_bg" />
        </div>

        <div data-aos="flip-up" data-aos-delay="200" className="flex flex-col relative w-[90%]">

          <div className="flex flex-col lg:flex-row">
            
            <div className="w-full lg:w-[70%] bg-[#EDEBE4] rounded-[20px] lg:rounded-tr-[0px] lg:rounded-br-[0px] flex flex-col gap-10 p-20 py-6 lg:pr-[200px] xl:pr-[300px]">
              
              <div className="flex flex-col gap-8">
                
                <div className="flex flex-col gap-3">
                  <p className="text-[#232323] text-[47px] fontAbril font-medium leading-normal ">
                    Get in <span className="text-[#2E4630]"></span>Touch
                  </p>
                  <p className="text-[#666] fontQuicksand leading-normal text-lg">
                    We would love to make you feel amazing. Contact us and let's make it happen!
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Name*"
                    className="border border-[#DFD8CA] rounded-[10px] py-3 px-4 bg-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-[#DFD8CA] rounded-[10px] py-3 px-4 bg-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number*"
                    className="border border-[#DFD8CA] rounded-[10px] py-3 px-4 bg-transparent"
                  />
                  <textarea
                    placeholder="Message"
                    className="border border-[#DFD8CA] rounded-[10px] py-3 px-4 bg-transparent h-[152px]"
                  />
                  <button onClick={() => console.log("Send!")} className="rounded-full text-white bg-[#2E4630] p-3 fontQuicksand text-sm leading-normal hover:shadow-md cursor-pointer ">
                    Send
                  </button>
                </div>
              </div>
              
              <div className="flex gap-10 justify-start flex-wrap items-center">

                <div className="flex gap-3 justify-start items-center">

                  <img src={phoneIcon} alt="_phone" />

                  <div className="fex flex-col gap-1">
                    <p className="fontMont font-medium text-sm leading-normal text-[#2E4630]">
                      Phone
                    </p>
                    <p className="fontMont text-sm leading-normal text-[#666]">
                      03 5432 1234
                    </p>
                  </div>

                </div>

                <div className="flex gap-3 justify-start items-center">
                  <img src={locationIcon} alt="_location" />

                  <div className="fex flex-col gap-1">
                    <p className="fontMont font-medium text-sm leading-normal text-[#2E4630]">
                      Location
                    </p>
                    <p className="fontMont text-sm leading-normal text-[#666]">
                      03 5432 1234
                    </p>
                  </div>

                </div>

                <div className="flex gap-3 justify-start items-center">
                  <img src={mailIcon} alt="_email" />

                  <div className="fex flex-col gap-1">
                    <p className="fontMont font-medium text-sm leading-normal text-[#2E4630]">
                      Email
                    </p>
                    <p className="fontMont text-sm leading-normal text-[#666]">
                      info@marcc.com.au
                    </p>
                  </div>

                </div>

              </div>
            </div>


            {/* <div className='absolute mt-[577px] ml-[577px]'>
                <img className='opacity-[0.3]' src={bg5} alt="_bg"/>
            </div> */}

            <div className="w-full lg:w-[30%]  bg-[#2E4630] rounded-[20px] lg:rounded-tl-[0px] lg:rounded-bl-[0px] flex justify-center items-center py-80 lg:py-0">

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.135994871039!2d-80.31046002404587!3d25.897899502962797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bace5d1235b1%3A0x40b5cb76ccd4410a!2sEsperanza%20Skin%20Care!5e0!3m2!1sen!2sus!4v1705526970563!5m2!1sen!2sus" title="Esperanza Location" width="100%" height="519" style={{border:0,borderRadius:10,position:'absolute', maxWidth: "404px"}} className="lg:left-[55%]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>

          {/* <div className="flex justify-center items-center mt-[-325px]">
            <img
              className="opacity-[0.3] w-[185px] h-[322px]"
              src={bg5}
              alt="_bg"
            />
          </div> */}

        </div>

        <div className="absolute flex justify-between w-full mt-[460px]">
          <img className="opacity-[0.3] z-[-1]" src={bg2} alt="_bg" />
          <img className="hidden sm:block opacity-[0.2]" src={bg2} alt="_bg" />
          {/* <img className="hidden sm:block opacity-[0.9]" src={bg4} alt="_bg" /> */}
        </div>

      </div>
    </>
  );
}

export default InTouch;
