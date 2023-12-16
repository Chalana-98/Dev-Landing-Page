import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./assets/Hero.png";
import Image1 from "./assets/image 1.png";
import Image2 from "./assets/image 2.png";

function App() {
  return (
    <>
      <div className="">
        <Navbar />

        <section className="relative py-12 lg:py-32 px-4">
          <div
            className="z-20  relative flex flex-col justify-end text-white mx-auto "
            style={{ transform: "translateY(110%)" }}
          >
            <div className="w-full md:w-[300px] h-auto px-4 md:px-5 pt-2 pb-4 bg-gradient-to-l from-cyan-500 to-green-400 lg:flex flex-col justify-start items-start gap-4 hidden">
              <div className="w-full md:w-[226px] text-white text-md md:text-lg font-bold font-inter capitalize leading-tight md:leading-[28px]">
                We crush your competitors, goals, and sales records - without
                the B.S.
              </div>
              <a>
                <div className="px-2 md:px-1 py-1 md:py-3 bg-orange-400 rounded-md flex justify-center items-center gap-2">
                  <div className="text-white text-xs md:text-xs font-bold font-inter uppercase ">
                    Get free consultation
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="absolute inset-0 z-10">
            <img
              src={Hero}
              alt=""
              className="w-full h-full object-cover object-center "
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </section>

        <section className="sm:my-60 my-24">
          <div className="w-full md:w-[630px]  h-auto px-4 md:px-10 pt-6 pb-8 bg-gradient-to-l from-cyan-500 to-green-400 flex flex-col justify-start items-start gap-5 md:hidden ">
            <div className="w-full md:w-[556px] text-white text-4xl md:text-5xl font-bold font-inter capitalize leading-tight md:leading-[48px]">
              We crush your competitors, goals, and sales records - without the
              B.S.
            </div>
            <div className="px-3 md:px-5 py-2 md:py-3 bg-orange-400 rounded-md flex justify-center items-center gap-2">
              <a>
                <div className="text-white text-sm md:text-base font-bold font-inter uppercase leading-tight">
                  Get free consultation
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className=" mx-20 mb-20 md:mt-96">
          <div>
            <div className="mt-10 relative flex flex-col rounded-xl bg-white text-gray-700 w-full sm:flex-row sm:px-6">
              <div className="relative overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl">
                <img
                  src={Image2}
                  alt="card-image"
                  className="object-cover w-full h-full sm:h-full sm:object-contain"
                />
              </div>

              <div className="p-6">
                <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-[#6B3CC9] uppercase">
                  Web & Mobile App Development
                </h6>
                <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                  Your web and mobile Apps are pieces of the puzzle to grow your
                  business. We use frameworks which tailor content and
                  engagement methods to respond to different intents shown by
                  your potential customers who interact with your business
                  online.
                </p>
                <a href="#" className="inline-block">
                  <button
                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20 bg-[#F28D35]"
                    type="button"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>

            <div className=" flex flex-col rounded-xl bg-white text-gray-700 mt-20 sm:flex-row sm:gap-[80px]">
              <div className="order-2 sm:order-1 sm:w-1/2">
                <div className="p-6">
                  <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-[#6B3CC9] uppercase">
                    Digital Strategy Consulting
                  </h6>
                  <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    Your digital strategy should complement the overall
                    marketing strategy of the company. In online marketing, each
                    component will never work in isolation and every business
                    needs a different mix. We provide a clear concept and
                    strategic overview to find the most efficient model for your
                    business.
                  </p>
                  <a href="#" className="inline-block">
                    <button
                      className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20 bg-[#F28D35]"
                      type="button"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
              <div className="order-1 sm:order-2 sm:w-1/2">
                <img
                  src={Image1}
                  alt="card-image"
                  className="object-cover w-60 h-auto sm:h-full sm:object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default App;
