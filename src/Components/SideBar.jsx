import DashboardWhite from '../assets/icons/whiteDashboardIcon.svg';
import DashboardGrey from '../assets/icons/dashboardGrey.svg';
import Send from '../assets/icons/SendIconGray.svg';
import History from '../assets/icons/historyIconGray.svg';
import Upload from '../assets/icons/UploadGray.svg';
import TwoUsers from '../assets/icons/twoUserGray.svg';
import LogOut from '../assets/icons/LogOutIcon.svg';
import { NavLink } from 'react-router';


export default function Sidebar({activePage}) {
    return(
        <aside className='fixed bottom-0 w-full bg-white z-50 border-t md:relative md:w-64 md:min-h-screen md:border-r md:border-t-0 md:border-[#EAEAEA]'>
            <ul className='flex justify-around py-3 md:flex-col md:justify-start md:p-6 md:gap-4'>
               <NavLink to="/dashboard"><li className={`flex flex-col items-center md:flex-row md:gap-4 p-3 rounded-xl ${activePage === "dashboard" ? "bg-primary text-white hover:bg-blue-600" :"text-[#AAAAAA] hover:bg-gray-100"} cursor-pointer`}><img src={activePage === "dashboard" ? DashboardWhite : DashboardGrey} alt="Dashboard"/>
                <span className='hidden md:block'>Dashborad</span>
                </li></NavLink>

                <NavLink to="/transfer"><li className={`${activePage === "transfer" ? "bg-primary text-white" : "text-[#aaaaaa] hover:bg-gray-100"} flex flex-col items-center md:flex-row md:gap-4 p-3 rounded-xl hover:bg-gray-100 text-[#AAAAAA] cursor-pointer`}><img src={Send} alt="Send"/>
                <span className='hidden md:block'>Transfer</span>
                </li></NavLink>
                
                <li className='flex flex-col items-center md:flex-row md:gap-4 p-3 rounded-xl hover:bg-gray-100 text-[#AAAAAA] cursor-pointer'><img src={History} alt="History" />
                <span className='hidden md:block'>History</span>
                </li>

                <li className='flex flex-col items-center md:flex-row md:gap-4 p-3 rounded-xl hover:bg-gray-100 text-[#AAAAAA] cursor-pointer'><img src={Upload} alt="Upload" />
                <span className='hidden md:block'>Top Up</span>
                </li>

                <li className='flex flex-col items-center md:flex-row md:gap-4 p-3 rounded-xl hover:bg-gray-100 text-[#AAAAAA] cursor-pointer'><img src={TwoUsers} alt="TwoUser" />
                <span className='hidden md:block'>Profile</span>
                </li>

                <li className='flex flex-col items-center md:flex-row md:gap-4 p-3 rounded-xl hover:bg-gray-100 text-[#AAAAAA] cursor-pointer'><img src={LogOut} alt="lOGOUT" />
                <span className='hidden md:block'>Keluar</span>
                </li>
            </ul>
        </aside>
    );
}