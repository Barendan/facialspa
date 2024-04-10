import bg from "../Assets/products/product-bg.svg";
import cartIcon from "../Assets/products/cart-icon.svg";
import productImg1 from "../Assets/products/product-img-11.jpg";
import productImg2 from "../Assets/products/product-img-22.jpg";
import productImg3 from "../Assets/products/product-img-33.jpg";
import productVineBG from "../Assets/products/vineBG.svg";

function Products() {
  const products = [
    {
      img: productImg3,
      description: "PCA Hyaluronic Acid Boosting Serum",
      price: "$125.00",
    },
    {
      img: productImg2,
      description: "Ideal Complex® Revitalizing Eye Gel",
      price: "$100.00",
    },
    {
      img: productImg1,
      description: "ExLinea® Peptide Smoothing Serum",
      price: "$120.00",
    },
  ];

  return (
    <>
      <div id="productsSection" className="flex justify-center items-center bg-[#DDDAD2] pt-12 pb-24 lg:pt-24 px-4 sm:px-6 md:px-8 lg:px-12 md:py-20"
      style={{ 
        backgroundImage: `url(${productVineBG})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-4rem 10rem",
        backgroundSize: "100% 100%",
      }}>

        <div className="absolute flex w-full justify-end mt-[-100px] md:mt-[-624px]">
          <img src={bg} alt="a leaf" style={{opacity: 0.5}} />
        </div>

        <div className="flex flex-col lg:flex-row rounded-[20px] w-full z-[1] max-w-[1200px]">
          
          <div
            className="w-[90%] lg:w-[45%] 2xl:w-[45%] flex flex-col justify-center gap-3 sm:gap-1 py-4 lg:py-20 rounded-tl-[20px] rounded-tr-[20px] xl:rounded-tr-[0px] xl:rounded-br-[0px] mb-6 mx-auto text-white"
            // data-aos="zoom-in-right"
          >

            <div className="flex flex-col gap-2">
              <p className="fontNothingYouCouldDo text-sm md:text-2xl font-semibold md:font-medium">
                PCA Skin
              </p>
              <p className="fontPrata text-[11vw] sm:leading-[5rem] sm:text-[4rem] lg:text-[3.5rem] font-semibold xl:max-w-[318px]"
              style={{ 
                // fontSize: "clamp(8vw, 11vw, 48px)",
                letterSpacing: "1px"
              }}>
                The Science <br/> 
                of Timeless Beauty
              </p>
            </div>

            <p className="hidden md:flex text-lg lg:text-base md:max-w-[90%]">
              PCA SKIN uses clinically-backed research and science to develop safe and effective products that deliver healthy, beautiful skin delivering on our mission of improving lives through transformative skincare.
            </p>
            <p className="text-sm sm:text-base md:hidden max-w-[380px] sm:max-w-[90%]">
              PCA SKIN uses clinically-backed research and science delivering on their mission of improving lives through transformative skincare.
            </p>


            <div className="bg-[#2E4630] opacity-90 hover:opacity-100 max-w-[200px] flex p-1 mt-5 text-white"
            style={{ boxShadow: "2px 2px 2px gray" }}>
              

              <button 
                onClick={() => window.location.href = "https://esperanzawellness.store/"} 
                className="w-[100%] relative flex px-5 py-2 border"
                // data-aos="fade-left"
                // data-aos-delay="200"
              >
                View Our Store
                <span className="absolute top-1/2 right-3 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 transform rotate-45 bg-transparent"></span>
              </button>

            </div>

          </div>


          {/* Products container with items inside */}
          <div className="lg:rounded-tr-[20px] rounded-bl-[20px] lg:rounded-bl-[0px] rounded-br-[20px] w-[90%] lg:w-[70%] xl:w-[100%] bg-[#EDEBE4] flex flex-col sm:flex-row gap-2 md:gap-6 lg:gap-3 xl:gap-10 py-10 pb-6 md:pb-16 md:py-20 xl:py-0 md:px-6 lg:px-12 lg:my-10 justify-center items-center bg-opacity-50 mx-auto"
          >

            {products.map((item, i) => (
              
              <div
                key={i}
                // data-aos="zoom-in-right"
                data-aos="fade-right"
                data-aos-delay={ i * 200}
                className={`bg-[#EDEBE4] h-fit w-[70%] sm:w-[30%] lg:w-[32%] flex flex-col gap-3 md:gap-6 px-4 pt-2 mb-10 rounded-[16px] border border-[#CFC4C0] items-center shadow-lg hover:shadow-sm hover:bg-[#DDDAD2] cursor-pointer`}
                onClick={() => window.location.href = "https://esperanzawellness.store/"}
              >

                {/* Images for Products (Desktop and Mobile) */}
                <div className="overflow-hidden w-[90%] h-[155px]">

                  <img
                    className="md:flex min-h-[155px] rounded-lg py-2 opacity-70"
                    src={item.img}
                    loading="lazy"
                    alt="a skincare product"
                  />
                
                </div>

                {/* Product Description  */}
                <div className="flex flex-col gap-1 md:gap-3 justify-center items-center">
                  
                  <p className="text-[#785445] text-center text-sm md:text-base
                  lg:text-sm leading-normal fontTest leading-normal">
                    {item.description}
                  </p>

                  <p className="text-[#666] text-center text-base leading-normal fontQuicksand leading-normal">
                    {item.price}
                  </p>

                </div>

                <div className="flex justify-center items-center mb-[-30px] cursor-pointer w-[70%] sm:w-[40%]">
                  <a href="https://esperanzawellness.store/">
                    <img 
                      src={cartIcon}
                      alt="a shopping cart icon" 
                      className="rounded-full hover:scale-110"
                      style={{ boxShadow: "2px 2px 4px gray", opacity: "0.8", transition: "100ms"}}
                    />
                  </a>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </>
  );
}

export default Products;
