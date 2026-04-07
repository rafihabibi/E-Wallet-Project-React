import {useState} from 'react';
import LogoEWallet from './LogoEWallet.jsx';
import { NavLink } from 'react-router';

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
    return(
    <nav className="bg-primary pl-4 pr-10 py-4 md:px-20 md:py-3 text-white">
        <div className='flex justify-between items-center relative'>
            <LogoEWallet teksColor='text-white'/>
            <div className="hidden  md:flex gap-4">
                <NavLink to="/login"><button className="px-4 py-2 cursor-pointer">Sign In</button></NavLink>
                <NavLink to="/register"><button className="bg-white text-primary px-4 py-2 rounded-md font-medium cursor-pointer">Sign Up</button></NavLink>
            </div>
            <button onClick={toggleMenu} className="flex md:hidden text-white focus:outline-none">
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
        </div>
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 pb-4 ` }>
        <div className="flex flex-col gap-2 ">
          <button className="px-4 py-2 text-center w-full">Sign In</button>
          <button className="bg-white text-primary px-4 py-2 rounded-md font-medium w-full">Sign Up</button>
        </div>
      </div>
    </nav>
    );
}