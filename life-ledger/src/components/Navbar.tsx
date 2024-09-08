import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
        <div className="flex  justify-evenly px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          {/* Logo */}
          <Link to='/' className="block w-[12rem]">
            LifeLedger
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:mx-auto lg:bg-transparent">
            <div className="relative z-2 flex flex-row items-center justify-center m-auto">
              {/* Add your desktop nav links here */}
            </div>
          </nav>

          {/* Hamburger Icon for Mobile */}
          <button 
            className="lg:hidden block text-white p-2 ml-auto" 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {/* Simple Hamburger Icon */}
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:hidden flex flex-col items-center justify-center">
            {/* Add your mobile nav links here */}
          </nav>
        )}
      </div>
    </>
  );
};

export default Navbar;
