export default function CardAmount({ icon, label, rp, persent, iconArrow, history, }) {
  return (
  <div className=" gap-3 text-[#4F5665]">
       <div className="flex flex-col gap-4 border border-[#E8E8E8] bg-white p-5 rounded-sm w-full max-w-65">
    <div className="flex items-center gap-3 text-[#4F5665]">
        <img src={icon} alt="icon" className="w-5 h-5" />
        <p className="text-sm">{label}</p>
    </div>
    <h3 className="text-2xl font-semibold text-[#4F5665]">{rp}</h3>
    <div className="flex items-center gap-2 text-sm text-green-500">
        <span>{persent}</span>
        <img src={iconArrow} alt="arrow" className="w-4 h-4" />
        <span>{history}</span>
      </div>
    </div>
  </div>
  );
}