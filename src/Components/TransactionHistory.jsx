import Profile from "../assets/profile1.svg";
import Profile2 from "../assets/profile2.svg";
import { Link } from "react-router";

export default function TransactionItem({
  image,
  name,
  detail,
  amount,
  isIncome,
}) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-xl object-cover"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-[#0B132A]">{name}</span>
          <span className="text-sm text-[#AAAAAA]">{detail}</span>
        </div>
      </div>

      <span className={`${isIncome ? "text-green" : "text-red"}`}>
        {amount}
      </span>
    </div>
  );
}
