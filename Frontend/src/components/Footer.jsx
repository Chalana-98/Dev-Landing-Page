import Logo from "../assets/Logo.png";

function Footer() {
  return (
    <div>
      <footer className="bg-[#6B3CC9] ">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 mx-6 ">
              <a href="https://flowbite.com/" className="flex items-center">
              <img className="h-6 w-auto" src={Logo} alt="Your Company" />
              
              </a>
              <p className="mt-4 text-sm text-white">
  Your goal is our target. Not anything in between. We use <br />
  online marketing platforms and tools to achieve a single <br/> objective - your business results.
</p>

            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                  Our Technology
                </h2>
                <ul className="text-white font-medium">
                  <li className="">
                    ReactJS
                  </li>
                  <li>
                   Gatsby
                  </li>
                  <li>
                   NextJS
                  </li>
                  <li>
                   NodeJS
                  </li>
                  <li>
                   GraphQL
                  </li>
                  <li>
                   Laravel
                  </li>
                </ul>
              </div>
              <div>
              </div>
              <div>
                <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                  Our Services
                </h2>
                <ul className="text-white font-medium">
                <li>
                  Social Media Marketing
                  </li>
                  <li>
                   Web & Mobile App Development
                  </li>
                  <li>
                   Data Analytics
                  </li>
                  <li>
                  Google Marketing Solutions
                  </li>
                  <li>
                   Serch Engine Optimization
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-white-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center  divide-x flex justify-center">
            <span className="text-sm text-white sm:text-center  mx-3">
              Privacy Policy
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
            <span className="text-sm text-white sm:text-center  mx-3">
             Terms and Conditions
            </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
