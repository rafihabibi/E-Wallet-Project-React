import IconDownload from '../assets/icons/Download.svg';
import IconHeadphone from '../assets/icons/Headphones.svg';
import Shield from '../assets/icons/shield.svg';

export default function AboutApp() {
    return(
        <section className="flex flex-col md:flex-row px-6 md:px-20 py-20 gap-10">
            <div className=' flex flex-col justify-center items-center md:items-start w-full md:w-[30%] text-center md:text-left'>
                <h2 className=' text-3xl font-semibold'>About The Aplication</h2>
                <p className='text-[#4F5665] text-xs'>We have some great features from the application and it’s totally free to use by all users around the world.</p>
            </div>
            <div className='grid grid-cols-1  md:grid-cols-3 gap-6 w-full md:w-[65%]'>
                <div className=' flex flex-col items-center text-center bg-[#396AFC] text-white border rounded-xl 
                px-5 py-10 gap-6 '>
                    <img src={IconHeadphone} alt="icon headphone" className='border rounded-full bg-white w-10 h-10 p-2 '/>
                    <h2 className='font-semibold text-2xl  md:text-xl py-1'>24/7 Support</h2>
                    <p className=''>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
                </div>
                <div className=' flex flex-col items-center text-center bg-[#396AFC] text-white border rounded-xl 
                px-5 py-10 gap-6 '>
                    <img src={Shield} alt="icon headphone" className='border rounded-full bg-white w-10 h-10  p-2'/>
                    <h2 className='font-semibold text-2xl  md:text-xl py-1'>Data Privacy</h2>
                    <p className=''>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
                </div>
                <div className=' flex flex-col items-center text-center bg-[#396AFC] text-white border rounded-xl 
                px-5 py-10 gap-6 '>
                    <img src={IconDownload} alt="icon headphone" className='border rounded-full bg-white w-10 h-10  p-2'/>
                    <h2 className='font-semibold text-2xl md:text-xl py-1'>Easy Download</h2>
                    <p className=''>Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.</p>
                </div>
            </div>
        </section>
    );
}