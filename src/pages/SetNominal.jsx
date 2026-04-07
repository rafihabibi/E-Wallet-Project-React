import Header from "../Components/Header";
import Sidebar from "../Components/SideBar";
import SendBlue from '../assets/icons/sendBlue.svg';
import PeopleInfo from '../Components/PeopleInfo.jsx';
import { useState } from "react";
import { NavLink } from "react-router";
import PinPopUp from "../Components/pinPopUp.jsx";
import Stepper from "../Components/Stepper.jsx";

export default function SetNominal() {
    const [popUp, setPopup] = useState(false);
    return (
        <div className="min-h-screen bg-[#FAFAFA]">
            <Header />
            
            <div className="flex">
                <Sidebar className="hidden md:block" activePage="transfer" />
                <main className="flex-1 p-4 md:p-8">
                    <div className="flex items-center gap-3 mb-8">
                        <img src={SendBlue} alt="send icon" />
                        <h2 className="text-xl font-bold text-[#3A3D42]">Transfer Money</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-[#EAEAEA] p-6 md:p-10">
                        <div className="flex items-center justify-start gap-4 mb-10">
                            <Stepper isactive="set-nominal"/>
                        </div>
                        <div className="bg-[#F9F9F9] rounded-xl p-5 mb-10 flex items-center justify-between">
                                <PeopleInfo/>
                            </div>
                        <div className="flex flex-col gap-8">
                            <div>
                                <label className="block text-[#7A7886] mb-2">Amount</label>
                                <p className="text-sm text-[#7A7886] mb-4">Type the amount you want to transfer...</p>
                                <div className="relative">
                                    <input type="text" placeholder="Enter Nominal Transfer" className="w-full border border-border rounded-lg p-4 pl-12 focus:outline-primary" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[#7A7886] mb-2">Notes</label>
                                <textarea placeholder="Enter Some Notes" className="w-full border border-border rounded-lg p-4 h-32 focus:outline-primary"></textarea>
                            </div>
                        </div>

                        <div className="flex justify-end mt-10">
                            <button onClick={() => setPopup(true)} className="bg-primary text-white  py-4 rounded-xl  w-full hover:bg-blue-600 cursor-pointer">
                                Submit & Transfer
                            </button>
                        </div>

                    </div>
                </main>
            </div>
            <PinPopUp isOpen={popUp} onClose={() => setPopup(false)} />
        </div>
    );
}