import bg from "../Assets/product-bg.svg";
import cartIcon from "../Assets/cart-icon.svg";
import productImg1 from "../Assets/product-img-11.jpg";
import productImg2 from "../Assets/product-img-22.jpg";
import productImg3 from "../Assets/product-img-33.jpg";
// import productMainImg from "../Assets/product-main-img.png";
// import productBg2 from "../Assets/product-bg-2.svg";

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
      <div id="productsSection" className="flex justify-center items-center bg-[#DDDAD2] pt-12 pb-24 lg:pt-32 px-4 sm:px-6 md:px-8 lg:px-12 md:py-20">

        <div className="absolute flex w-full justify-end mt-[-100px] md:mt-[-624px]">
          <img className="" src={bg} alt="a leaf" />
        </div>

        <div className="flex flex-col lg:flex-row rounded-[20px] w-full z-[1]">
          
          <div
            className="w-full lg:w-[45%] 2xl:w-[35%] flex flex-col gap-5 px-8 py-8 lg:py-20 rounded-tl-[20px] rounded-tr-[20px] xl:rounded-tr-[0px] xl:rounded-br-[0px] bg-no-repeat bg-cover mb-6"
            // style={{ backgroundImage: `url(${productMainImg})` ,backgroundPosition:'center', backgroundSize:'cover'}}
            // data-aos="zoom-in-right"
          >

            <div className="flex flex-col gap-2">
              <p className="text-white fontQuicksand text-sm md:text-2xl font-semibold md:font-medium leading-normal">
                Our Products
              </p>
              <p className="text-white fontAbril text-5xl font-medium xl:leading-normal xl:max-w-[318px]">
                Feel Better With PCA Beauty
              </p>
            </div>

            <p className="text-white fontQuicksand text-sm md:text-lg font-normal leading-normal xl:max-w-[438px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer
            </p>

            <button 
              onClick={() => window.location.href = "https://esperanzawellness.store/"} 
              className="w-fit flex mt-4 hover:shadow-md hover:bg-[#2E4630] hover:text-white text-[#2E4630] text-sm md:text-xl font-normal font-quicksand leading-normal bg-white rounded-tr-[30px] rounded-bl-[30px] py-4 px-6 mr-5 hover:duration-300 shadow-lg"
              // style={{ boxShadow: "2px 2px 2px" }}
              // data-aos="fade-left"
              // data-aos-delay="200"
            >
              View Our Store
            </button>

          </div>


          {/* Products container with items inside */}
          <div className="lg:rounded-tr-[20px] rounded-bl-[20px] lg:rounded-bl-[0px] rounded-br-[20px] w-full lg:w-[70%] xl:w-[100%] bg-[#EDEBE4] flex flex-row gap-2 sm:gap-6 lg:gap-3 xl:gap-10 py-10 pb-16 md:py-20 xl:py-0 md:px-6  lg:px-12 justify-center items-center bg-no-repeat bg-cover bg-opacity-50"
            // style={{ backgroundImage: `url(${productBg2})` }}
          >

            {products.map((item, index) => (
              
              <div
                key={index}
                // data-aos="zoom-in-right"
                // data-aos="slide-up"
                // data-aos="zoom-in"
                className={`bg-[#EDEBE4] h-fit w-[30%] lg:w-[32%] flex flex-col gap-3 md:gap-6 px-4 pt-2 rounded-[16px] border border-[#CFC4C0] items-center shadow-lg hover:shadow-sm hover:bg-[#DDDAD2] cursor-pointer`}
                onClick={() => window.location.href = "https://esperanzawellness.store/"}
              >
                {/* Images for Products (Desktop and Mobile) */}

                <div className="overflow-hidden h-[155px]">

                  <img
                    className="md:flex min-h-[155px] rounded-lg py-2"
                    src={item.img}
                    alt="a skincare product"
                    />
                
                </div>

                {/* <img
                  className="md:hidden md:min-w-[210px] md:min-h-[242px] rounded-lg"
                  src={item.img}
                  alt="a skincare product"
                  width={105}
                  height={115}
                /> */}

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

                <div className="flex justify-center items-center mb-[-30px] cursor-pointer w-[40%]">

                  <a href="https://esperanzawellness.store/">

                    <img 
                      src={cartIcon} 
                      alt="a shopping cart icon" 
                      className="rounded-full shadow-lg hover:scale-125" 
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
