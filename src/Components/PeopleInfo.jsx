import Star from "../assets/icons/Star.svg";
import Verified from "../assets/icons/verified.svg";
import Galuh from "../assets/profileGaluh.svg";

export default function PeopleInfo({ img }) {
  return (
    <>
      <div className="flex items-center justify-between bg-[#F9F9F9] rounded-xl p-5 border border-[#EAEAEA] w-full">
        <div className="flex items-center gap-4">
          <img
            src={img}
            alt="Profile"
            className="w-16 h-16 rounded-xl object-cover"
          />

          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-[#3A3D42] text-lg">Ghaluh 1</h4>
            <p className="text-[#7A7886] text-sm">(239) 555-0108</p>

            <div className="flex items-center gap-1 bg-primary w-fit px-2 py-1 rounded-md">
              <img src={Verified} alt="verified" className="w-3 h-3" />
              <span className="text-[10px] text-white font-semibold">
                Verified
              </span>
            </div>
          </div>
        </div>

        <button className="text-gray-400 hover:text-yellow-500 cursor-pointer">
          <img src={Star} alt="Star Icon" className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}
