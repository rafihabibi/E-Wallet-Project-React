import Star from "../assets/icons/Star.svg";

export default function FindPeopleList({ image, phone, name }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl cursor-pointer bg-white hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
      <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <p className="flex-1 text-center font-medium text-gray-400">{name}</p>

      <p className="flex-1 text-center text-[#7A7886]">{phone}</p>

      <button className="shrink-0 hover:scale-110 transition-transform">
        <img src={Star} alt="star" className="w-6 h-6" />
      </button>
    </div>
  );
}
