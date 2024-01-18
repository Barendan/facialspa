import bg from "../Assets/product-bg.svg";
import cartIcon from "../Assets/cart-icon.svg";
import collapseIcon from "../Assets/collapse-icon.svg";
import productImg1 from "../Assets/product-img-1.png";
import productImg2 from "../Assets/product-img-2.png";
import productImg3 from "../Assets/product-img-3.png";
import productMainImg from "../Assets/product-main-img.png";
import productBg2 from "../Assets/product-bg-2.svg";

function Products() {
  const products = [
    {
      img: productImg1,
      description: "Oriflame Cosmetics And Beauty Products",
      price: "$30.00",
      brownBg: false,
    },
    {
      img: productImg2,
      description: "Cream Skin care Aesthetics Beauty Parlour",
      price: "$30.00",
      brownBg: true,
    },
    {
      img: productImg3,
      description: "Hand Skin care Aesthetics Beauty Parlour",
      price: "$30.00",
      brownBg: false,
    },
  ];
  return (
    <>
      <div id="productsSection" className="px-4 sm:px-6 md:px-8 lg:px-24 py-20 flex justify-center items-center bg-[#DDDAD2] mt-8">

        {/* <div className="absolute flex w-full justify-end mt-[-624px]">
          <img className="" src={bg} alt="_bg" />
        </div> */}

        <div className="flex flex-col xl:flex-row rounded-[20px] w-full z-[1]">
          
          <div
            className="w-full xl:w-[30%] 2xl:w-[35%] flex flex-col gap-5 px-8 py-40 rounded-[20px] xl:rounded-tr-[0px] xl:rounded-br-[0px] bg-no-repeat bg-cover"
            // style={{ backgroundImage: `url(${productMainImg})` }}
            // data-aos="zoom-in-right"
          >

            <div className="flex flex-col gap-2">
              <p className="text-white fontQuicksand text-2xl font-medium leading-normal">
                Our Products
              </p>
              <p className="text-white fontAbril text-[50px] font-medium leading-normal xl:max-w-[318px]">
                Feel Better With Beauty Studio
              </p>
            </div>

            <p className="text-white fontQuicksand text-lg leading-normal xl:max-w-[438px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer
            </p>

            <button className="w-fit flex text-lg font-quicksand leading-normal bg-white text-[#2E4630] rounded-tl-[30px] rounded-br-[30px] py-4 px-6 mt-5">
              View Our Store
            </button>

            {/* <div className="hidden xl:flex w-full justify-end">
              <img
                className="absolute mr-[-61px] mt-[-290px] cursor-pointer hidden md:block"
                src={collapseIcon}
                alt="_collapse"
              />
            </div> */}

          </div>

          <div
            className="xl:rounded-tr-[20px] rounded-bl-[20px] xl:rounded-bl-[0px] rounded-br-[20px] w-full xl:w-[70%] 2xl:w-[65%] flex flex-col lg:flex-row gap-12 lg:gap-10 py-20 xl:py-0 px-12 justify-center items-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${productBg2})` }}
          >
            {products.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in-right"
                // data-aos="slide-up"
                // data-aos="zoom-in"
                className={`h-fit flex flex-col gap-4 p-4 rounded-[16px] border border-[#CFC4C0] ${
                  item.brownBg ? "bg-[#CFC4C0]" : "bg-transparent"
                } ${item.brownBg ? "shadow-md" : ""}`}
              >
                <img
                  className="min-w-[210px] min-h-[242px] rounded-lg"
                  src={item.img}
                  alt="_product"
                />
                <div className="flex flex-col gap-3 justify-center items-center">
                  <p className="text-[#785445] text-center text-base leading-normal fontTest leading-normal">
                    {item.description}
                  </p>
                  <p className="text-[#666] text-center text-base leading-normal fontQuicksand leading-normal">
                    {item.price}
                  </p>
                </div>
                <div className="flex justify-center items-center mb-[-55px] cursor-pointer">
                  <img src={cartIcon} alt="_cart" className=" rounded-full " onClick={() => console.log("Cart Clicked!")}/>
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
