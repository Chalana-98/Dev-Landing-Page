import { useState } from "react";
import Logo from "../assets/Logo.png";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <nav className="bg-[#6B3CC9] border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img className="h-6 w-auto" src={Logo} alt="Your Company" />
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isExpanded}
            onClick={toggleExpand}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full sm:w-auto ${
              isExpanded ? "block" : "hidden sm:block"
            }`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 sm:p-0 mt-4 border  rounded-lg sm:flex-row sm:space-x-8 rtl:space-x-reverse sm:mt-0 sm:border-0">
              <li>
                <a href="default.asp" className=" text-white">
                  SERVICES
                </a>
              </li>
              <li>
                <a href="news.asp" className=" text-white">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="contact.asp" className=" text-white">
                  CONTACT US
                </a>
              </li>
              <li>
                <a href="about.asp" className=" text-white">
                  CAREERS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
