/**
 * Komponen untuk button Sign In Social Media
 * @param {object} props
 * @param {string} props.icon - icon untuk social media
 * @param {string} props.label - memeberikan info buttonnya
 * @returns {JSX.element}
 */

export default function ButtonSM({icon, label}) {
    return(
        <div className="py-1">
            <button className="flex flex-row items-center justify-center gap-2  px-1 py-3 border border-solid border-[#ccc] 
            rounded-full bg-white w-full text-[#4F5665] transition-colors duration-300 ease-in-out cursor-pointer hover:bg-[#AAAAAA]">
            <img src={icon} alt="description" className=""/><span>{label}</span></button>
        </div>   
    );
}