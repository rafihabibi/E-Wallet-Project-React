import HeroImage from '../assets/HeroImage.svg';
import IconGplay from '../assets/icons/gplay.svg';
import iconApple from '../assets/icons/appstore.svg';

export default function Hero() {
    return(
        <section className='flex flex-col-reverse md:flex-row justify-between py-15'>
        <div className="px-6 md:px-20 py-20">
            <h2 className='text-4xl font-bold pb-2'>Smart Way to Your <br/> Financial Business</h2>
            <p className='text-[#4F5665] text-sm py-4'>We bring you a mobile app for banking problems that <br/> oftenly wasting much of your times.</p>
        <div className='pb-5'>
            <button className='bg-primary border rounded-md text-white px-2.5 py-2.5 '>Get Started</button>
        </div>
        <div>
            <p>Available on</p>
        </div>
        <div className='flex gap-3 py-3 '>
            <img src={IconGplay} alt="Icon Google Play" />
            <img src={iconApple} alt="Icon Google Apple" />
         </div>

        </div>
        <div>
            <img src={HeroImage} alt="Hero Image" />
        </div>
        </section>
    );
}