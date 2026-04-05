import AirBnb from '../assets/airBnB.svg';
import Canon from '../assets/canon.svg';
import Dell from '../assets/dell.svg';
import DropBox from '../assets/dropbox.svg';
import HnM from '../assets/h&m.svg';
import Microsoft from '../assets/Microsoft.svg';


export default function Footer() {
    return(
        <section className='flex flex-wrap flex-col md:flex-row items-center h-auto object-contain justify-center py-10 px-10 gap-30 md:justify-evenly bg-[#E8E8E84D] md:py-5'>
            <img src={Microsoft} alt="Microsoft" className="w-40 md:w-23 h-auto object-contain"/>
            <img src={DropBox} alt="Dropbox" className="w-40 md:w-23 h-auto object-contain"/>
            <img src={HnM} alt="H&M"className="w-40 md:w-23 h-auto object-contain"/>
            <img src={AirBnb} alt="AirBnB" className="w-40 md:w-23 h-auto object-contain"/>
            <img src={Canon} alt="Canon"className="w-40 md:w-23 h-auto object-contain"/>
            <img src={Dell} alt="Dell"className="w-40 md:w-23 h-auto object-contain"/>
        </section>
    );
}