import DashboardWhite from "../assets/icons/whiteDashboardIcon.svg";
import DashboardGrey from "../assets/icons/dashboardGrey.svg";
import Send from "../assets/icons/SendIconGray.svg";
import History from "../assets/icons/historyIconGray.svg";
import Upload from "../assets/icons/UploadGray.svg";
import TwoUsers from "../assets/icons/twoUserGray.svg";
import LogOut from "../assets/icons/LogOutIcon.svg";
import { NavLink } from "react-router";

export default function Sidebar({ activePage, isactive }) {
  return (
    <aside className="fixed bottom-0 w-full bg-white z-50 border-t md:relative md:w-64 md:min-h-screen md:border-r md:border-t-0 md:border-[#EAEAEA]">
      <ul className="flex justify-around py-3 md:flex-col md:justify-start md:p-6 md:gap-4">
        <NavLink to="/dashboard">
          <li
            className={`flex flex-col items-center md:flex-row md:gap-4 p-3 rounded-xl ${activePage === "dashboard" ? "bg-primary text-white hover:bg-blue-600" : "text-[#AAAAAA] hover:bg-gray-100"} cursor-pointer`}
          >
            <img
              src={activePage === "dashboard" ? DashboardWhite : DashboardGrey}
              alt="Dashboard"
            />
            <span className="hidden md:block">Dashborad</span>
          </li>
        </NavLink>

        <NavLink to="/findPeople">
          <li
            className={`${activePage === "transfer" ? "bg-primary text-white hover:bg-blue-600" : "text-[#aaaaaa] hover:bg-gray-100"} flex flex-col items-center md:flex-row md:gap-4 p-3 rounded-xl  text-[#AAAAAA] cursor-pointer`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.5039 0.0772939C18.1889 -0.121981 18.931 0.0702488 19.434 0.582527C19.937 1.0938 20.123 1.83957 19.918 2.52999L18.669 6.73188C18.55 7.13144 18.1339 7.35789 17.7359 7.23913C17.3389 7.11936 17.1129 6.69867 17.2319 6.30012L18.481 2.09722C18.551 1.86171 18.4259 1.7027 18.3689 1.64533C18.3119 1.58696 18.1519 1.46014 17.9209 1.52758L1.82937 6.20652C1.57336 6.281 1.51736 6.49537 1.50536 6.58394C1.49436 6.6725 1.49036 6.89392 1.71837 7.03482L5.10449 9.11816C5.4575 9.33555 5.5695 9.80052 5.35249 10.1568C5.21149 10.3883 4.96548 10.5171 4.71247 10.5171C4.57947 10.5171 4.44446 10.4819 4.32246 10.4064L0.936341 8.32206C0.265318 7.90942 -0.0866946 7.16667 0.018309 6.38265C0.123313 5.59762 0.658331 4.97464 1.41336 4.75523L17.5039 0.0772939ZM16.0282 10.3492C16.1482 9.94867 16.5652 9.72122 16.9622 9.84199C17.3592 9.96175 17.5852 10.3824 17.4662 10.782L15.1441 18.596C14.9191 19.3519 14.2971 19.8833 13.5201 19.9829C13.4331 19.995 13.3471 20 13.2611 20C12.583 20 11.963 19.6518 11.602 19.0539L7.50187 12.2645C7.32286 11.9666 7.36786 11.5841 7.61287 11.3386L13.4341 5.48007C13.7271 5.18518 14.2011 5.18518 14.4941 5.48007C14.7871 5.77496 14.7871 6.25302 14.4941 6.54791L9.08992 11.9877L12.8841 18.2699C13.0221 18.4984 13.2391 18.4964 13.3291 18.4863C13.4171 18.4742 13.6301 18.4199 13.7061 18.1643L16.0282 10.3492Z"
                fill={isactive === "transfer" ? "#FFFFFF" : "#4F5665"}
              />
            </svg>
            <span className="hidden md:block">Transfer</span>
          </li>
        </NavLink>

        <NavLink to="/history">
          <li
            className={`${activePage === "history" ? "bg-primary text-white hover:bg-blue-600" : "text-[#aaaaaa] hover:bg-gray-100"} flex flex-col items-center md:flex-row md:gap-4 p-3 rounded-xl  text-[#AAAAAA] cursor-pointer`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.90918 3.36365V7H6.54556"
                stroke={isactive === "history" ? "#FFFFFF" : "#4F5665"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12C2 17.5229 6.47715 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C8.299 2 5.06755 4.01056 3.33839 6.99905"
                stroke={isactive === "history" ? "#FFFFFF" : "#4F5665"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0026 6L12.002 12.0044L16.2417 16.2441"
                stroke={isactive === "history" ? "#FFFFFF" : "#4F5665"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="hidden md:block">History</span>
          </li>
        </NavLink>

        <NavLink to="/topUp">
          <li
            className={`${activePage === "topUp" ? "bg-primary text-white hover:bg-blue-600" : "text-[#aaaaaa] hover:bg-gray-300"} flex flex-col items-center md:flex-row md:gap-4 p-3 rounded-xl  text-[#AAAAAA] cursor-pointer`}
          >
            <img src={Upload} alt="" />
            <span className="hidden md:block">Top Up</span>
          </li>
        </NavLink>

        <li
          className={`${activePage === "profile" ? "bg-primary text-white hover:bg-blue-600" : "text-[#aaaaaa] hover:bg-gray-300"} flex flex-col items-center md:flex-row md:gap-4 p-3 rounded-xl  text-[#AAAAAA] cursor-pointer`}
        >
          <img src={TwoUsers} alt="TwoUser" />
          <span className="hidden md:block">Profile</span>
        </li>

        <li
          className={`${activePage === "keluar" ? "bg-primary text-white hover:bg-blue-600" : "text-[#aaaaaa] hover:bg-gray-100"} flex flex-col items-center md:flex-row md:gap-4 p-3 rounded-xl  text-[#AAAAAA] cursor-pointer`}
        >
          <img src={LogOut} alt="lOGOUT" />
          <span className="hidden md:block">Keluar</span>
        </li>
      </ul>
    </aside>
  );
}
