import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./assets/Hero.png";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        {/* <div className="relative flex h-80">
          <img
            src={Hero}
            className="absolute inset-0 w-full h-[300px] object-cover z-0"
            alt="Hero"
          />

          <div className=" z-10 flex justify-center items-center">
            <div className="bg-white  shadow-md bg-clip-border rounded-xl w-96 flex">
              <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl font-semibold leading-snug text-blue-gray-900">
                  UI/UX Review Check
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit">
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk and near to where you can enjoy the main night
                  life in Barcelona.
                </p>
              </div>
            </div>
          </div>
        </div> */}

      
<section className="relative py-32 px-4">
  <div className="z-20 relative flex text-white  mx-auto">
  <div className="w-[630px] h-auto px-10 pt-6 pb-8 bg-gradient-to-l from-cyan-500 to-green-400 flex-col justify-start items-start gap-5 inline-flex">
  <div className="w-[556px] text-white text-5xl font-bold font-['Inter'] capitalize leading-[48px]">We crush your competitors, goals, and sales records - without the B.S.</div>
  <div className="px-5 py-3 bg-orange-400 rounded justify-start items-start gap-2 inline-flex">
    <div className="text-white text-sm font-bold font-['Inter'] uppercase leading-[14px]">Get free consultation</div>
  </div>
</div>
  </div>
  <div className="absolute inset-0 h-[763px] z-10 flex">
    <img src={Hero} alt="" className="w-full"/>
  </div>
</section>


<section className=" mx-20 mb-20 mt-96">
        <div>
          <div className=" mt-10 relative flex  rounded-xl bg-white text-gray-700  w-full  flex-row px-20">
            <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                startups
              </h6>
              <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Lyft launching cross-platform service this week
              </h4>
              <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses. Yet its own business model disruption
                is only part of the story
              </p>
              <a href="#" className="inline-block">
                <button
                  className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
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

          <div className="relative px-20 flex  rounded-xl bg-white text-gray-700  flex-row gap-[80px] mt-20">
            <div className="p-6">
              <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                startups
              </h6>
              <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Lyft launching cross-platform service this week
              </h4>
              <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses. Yet its own business model disruption
                is only part of the story
              </p>
              <a href="#" className="inline-block">
                <button
                  className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
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
            <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="card-image"
                className="object-cover w-full h-full"
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
