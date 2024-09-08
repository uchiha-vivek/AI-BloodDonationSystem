import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons for hamburger menu
import { navigation } from "../constants";

const Header: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State for toggling navigation

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-n-8/90 backdrop-blur-sm border-b border-n-6">
        <div className="flex items-center justify-flex-start px-5 lg:px-7.5 xl:px-10 py-4">
          <Link to="/" className="block w-[12rem] text-white">
            LifeLedger
          </Link>

          {/* Hamburger Menu Icon */}
          <button className="lg:hidden text-white" onClick={toggleNav}>
            {isNavOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <nav
            className={`hidden lg:flex lg:flex-row lg:bg-transparent`}
          >
            <div className="flex items-center">
              {navigation.map((item) => (
                <Link
                  to={item.url}
                  id={item.id}
                  className={`block relative font-code text-2xl uppercase text-white transition-colors px-6 py-6 md:py-8 lg:mr-1 lg:text-xs lg:font-semibold`}
                  key={item.id}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>

          {/* Buttons for 'Donor' and 'Organization' */}
          <div className="hidden lg:flex items-center ml-10 space-x-4">
            <button className="px-4 py-2 border-2 border-white text-white rounded-lg transition-colors duration-200 whitespace-nowrap">
              Register as Donor
            </button>
            <button className="px-4 py-2 border-2 border-white text-white rounded-lg transition-colors duration-200 whitespace-nowrap">
              Register as Organization
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Overlay for Mobile View */}
      {isNavOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center lg:hidden transition-opacity duration-300 ease-in-out">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={toggleNav}
          >
            <FiX size={24} />
          </button>
          <nav className="flex flex-col items-center space-y-6">
            {navigation.map((item) => (
              <Link
                to={item.url}
                id={item.id}
                className="text-2xl font-bold text-white uppercase"
                key={item.id}
                onClick={() => setIsNavOpen(false)} // Close nav on click
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Buttons */}
          <div className="flex flex-col items-center space-y-4 mt-8">
            <button className="px-4 py-2 border-2 border-white text-white rounded-lg transition-colors duration-200">
              Register as Donor
            </button>
            <button className="px-4 py-2 border-2 border-white text-white rounded-lg transition-colors duration-200">
              Register as Organization
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
