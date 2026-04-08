import LogoEwallet from '../Components/LogoEWallet.jsx';
import PhoneIcon from '../assets/icons/phoneIcon.svg';
import MailIcon from '../assets/icons/mailIcon.svg';
import Twitter from '../assets/icons/twitter.svg';
import Facebook from '../assets/icons/facebook.svg';
import Ig from '../assets/icons/ig.svg';
import Github from '../assets/icons/github.svg';
import Email from '../assets/icons/email.svg';
export default function Footer() {
    return(
        <section className='bg-primary flex flex-col'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 text-white px-5 md:px-20 py-16'>
                <div >
                <LogoEwallet teksColor='text-white' teksFont='text-2xl font-sm'/>
                <p className='py-2'>Clarity gives you the blocks and components you need to create a truly professional website.</p>
            </div>

            <div className='flex flex-col gap-2'>
                <h2 className='font-bold text-base'>GET IN TOUCH</h2>
                <div className='flex flex-row gap-3 items-center'>
                    <img src={PhoneIcon} alt="Phone Icon" />
                    <p>+62 5637 8882 9901</p>
                </div>
                <div className='flex flex-row gap-3'>
                    <img src={MailIcon} alt="Email Icon" />
                    <p>contact@zwallet.com</p>
                </div>
            </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='font-bold '>SOCIAL MEDIA</h2>
                    <div className='flex gap-2'>
                        <img src={Twitter} alt="Twitter" className='bg-white rounded-full p-4' />
                        <img src={Facebook} alt="Facebook" className='bg-white rounded-full p-4' />
                        <img src={Ig} alt="Instagram" className='bg-white rounded-full p-4' />
                        <img src={Github} alt="Github" className='bg-white rounded-full p-4'/>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='font-bold'>NEWSLETTER</h2>
                    <div className='flex flex-row items-center bg-white rounded-md px-3 py-2 gap-2'>
                        <img src={Email} alt="Email Icon" />
                        <input type="text" placeholder='Enter Your Email' className='border rounded-md' />
                    </div>
                    <button className='border bg-white text-primary rounded-md py-2'>Subscribe</button>
                </div>
            </div>
            <hr className="mt-10 mb-5 border-gray-400" />
            <p className='text-center text-white pb-4'>© Copyright {new Date().getFullYear()}. All Rights Reserved by ClarityUI</p>
        </section>
    );
}