import MoneyIcon from '../assets/icons/Moneyicon.svg';
import MobileFeature from '../assets/mobileFeature.svg';
import WaveDown from '../assets/waveDown.svg';
import WaveUp from '../assets/waveUp.svg';

export default function Feature() {
    return (
        <section className=" flex flex-col md:flex-row justify-between items-center px-6 md:px-20 pt-16 pb-29 md:pb-22 relative">
            <div className='absolute inset-0 -z-10 flex flex-col '>
                <img src={WaveUp} alt="waveUP" className=''/>
                <div className="bg-[#2948FF] grow w-full"></div>
                <img src={WaveDown} alt="waveDown" className=''/>
            </div>

            <div className='w-full md:w-1/2 relative -top-10 md:left-20 left-24 '>
            <img src={MobileFeature} alt="Phone" />
            </div>

            <div className='flex flex-col gap-6 w-full md:w-1/2 text-white relative top-10'>
                <h1 className='text-3xl font-medium'>All The Great Zwallet Features.</h1>
                <p>We have some great features from the application and it’s 
                    totally free to use by all users around the world </p>

                <div className="flex flex-row gap-4 items-center ">
                    <img src={MoneyIcon} alt="Money Icon" className='rounded-full bg-white border w-10 h-10 p-2'  />
                
                    <div className="flex flex-col ">
                        <h2 className='font-bold'>Small Fee</h2>
                        <p className=''>We only charge 5% of every success transaction done in Zwallet app.</p>
                    </div>
                </div>

                 <div className="flex flex-row gap-4 items-center ">
                    <img src={MoneyIcon} alt="Money Icon" className='rounded-full bg-white border w-10 h-10 p-2'/>
                
                    <div className="flex flex-col">
                        <h2 className='font-bold'>Small Fee</h2>
                        <p>We only charge 5% of every success transaction done in Zwallet app.</p>
                    </div>
                </div>

                 <div className="flex flex-row gap-4 items-center">
                    <img src={MoneyIcon} alt="Money Icon" className='rounded-full bg-white border w-10 h-10 p-2'/>
                
                    <div className="flex flex-col">
                        <h2 className='font-bold'>Small Fee</h2>
                        <p>We only charge 5% of every success transaction done in Zwallet app.</p>
                    </div>
                </div>
                <div className='md:pt-5  text-center'>
                    <button className='border border-white rounded-md bg-white text-[#3969FD] font-semibold md:px-5 md:py-3 px-30 py-2'>Get Started</button>
                </div>
            </div>
            
        </section>
    );
}