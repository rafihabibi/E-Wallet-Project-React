import LogoEWallet from '../Components/LogoEWallet.jsx';
import Down from '../assets/icons/down.svg';
import ProfileImage from '../assets/profileImage.svg';

export default function Header() {
    return(
        <>
        <header className=' md:bg-white md:text-gray-400 md:flex md:justify-between border-b border-[#EAEAEA] py-6 px-6 md:py-3'>
            <div className='hidden md:block py-2'>
                <LogoEWallet teksColor='text-primary'teksFont='text-base'/>
            </div>
            
            <div className='flex items-center gap-4 md:hidden'> 
                <img src={ProfileImage} alt="Profile" className="w-14 h-14 rounded-full border-2 border-white object-cover" />
                <div className='flex flex-col'>
                    <span>Hello,</span>
                    <span className='font-bold '>Ghaluh Wizard</span>
                </div>
            </div>

            <div className='hidden md:flex items-center  gap-3'>
                <span>Ghaluh Wizard</span>
                <img src={ProfileImage} alt="Profile Image" />
                <img src={Down} alt="Dropdown" className='cursor-pointer'/>
            </div>
        </header>
        </>
    );
};