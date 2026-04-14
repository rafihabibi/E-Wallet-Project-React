import { Link } from "react-router";

export default function Stepper({ isactive }) {
  return (
    <ol className="flex items-center gap-3 text-sm md:text-base font-sm">
      <Link to="/findPeople">
        <li
          className={`flex items-center gap-2 ${isactive === "find-people" ? "text-[#3A3D42]" : "text-[#AAAAAA]"}`}
        >
          <span
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm
          ${isactive === "find-people" ? "bg-primary text-white" : "bg-[#F5F5F5] text-[#AAAAAA]"}`}
          >
            1
          </span>
          Find People
        </li>
      </Link>
      <div className="w-10 md:w-20 border-t-2 border-dashed border-[#EAEAEA]" />
      <Link to="/findPeople/transfer">
        <li
          className={`flex items-center gap-2 ${isactive === "set-nominal" ? "text-primary" : "text-[#AAAAAA]"}`}
        >
          <span
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm
          ${isactive === "set-nominal" ? "bg-primary text-white" : "bg-[#F5F5F5] text-[#AAAAAA]"}`}
          >
            2
          </span>{" "}
          Set Nominal{" "}
        </li>
      </Link>
      <div className="w-10 md:w-20 border-t-2 border-dashed border-[#EAEAEA]" />
      <li
        className={`flex items-center gap-2 ${isactive === "finish" ? "text-[#3A3D42]" : "text-[#AAAAAA]"}`}
      >
        <span
          className={`w-8 h-8 flex items-center justify-center rounded-full text-sm
          ${isactive === "finish" ? "bg-primary text-primary" : "bg-[#F5F5F5] text-[#AAAAAA]"}`}
        >
          3
        </span>{" "}
        Finish
      </li>
    </ol>
  );
}
