import Header from "../Components/Header";
import Sidebar from "../Components/SideBar";
import SendBlue from "../assets/icons/sendBlue.svg";
import PeopleInfo from "../Components/PeopleInfo.jsx";
import { useState } from "react";
import PinPopUp from "../Components/pinPopUp.jsx";
import Stepper from "../Components/Stepper.jsx";
import Ghaluh from "../assets/profileGaluh.svg";
import PopUpSucces from "../Components/PopUpSuccess.jsx";
import TransferSucces from "../assets/transferSucces.svg";

export default function SetNominal() {
  const [errorMsg, setErrorMsg] = useState("");
  const [amount, setAmount] = useState("");
  const [popUpPin, setPopUpPin] = useState(false);
  const [popUpSucc, setPopUpSucc] = useState(false);
  const handleSucces = () => {
    setPopUpPin(false);
    setPopUpSucc(true);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (amount < 10000) {
      setErrorMsg("Minimal 10.000");
      return;
    } else if (amount > 10000000) {
      setErrorMsg("Maksimal 10.000.000");
      return;
    } else {
      setErrorMsg("");
      setPopUpPin(true);
    }
  };
  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-18 md:pb-0">
      <Header />

      <div className="flex">
        <Sidebar
          className="hidden md:block"
          activePage="transfer"
          isactive="transfer"
        />
        <main className="flex-1 p-4 md:p-8">
          <div className="flex items-center gap-3 mb-8">
            <img src={SendBlue} alt="send icon" />
            <h2 className="text-xl font-bold text-[#3A3D42]">Transfer Money</h2>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-[#EAEAEA] p-6 md:p-10">
            <div className="flex items-center justify-start gap-4 mb-10">
              <Stepper isactive="set-nominal" />
            </div>
            <div className="bg-[#F9F9F9] rounded-xl p-5 mb-10 flex items-center justify-between">
              <PeopleInfo img={Ghaluh} />
            </div>
            <form onSubmit={handelSubmit}>
              <div className="flex flex-col gap-8">
                <div>
                  <label className="block text-[#7A7886] mb-2">Amount</label>
                  <p className="text-sm text-[#7A7886] mb-4">
                    Type the amount you want to transfer...
                  </p>
                  <div className="relative">
                    <input
                      onChange={(e) => setAmount(e.target.value)}
                      type="number"
                      placeholder="Enter Nominal Transfer"
                      className="w-full border border-border rounded-lg p-4 pl-12 "
                    />
                    <p className="text-red-500 text-sm absolute -bottom-6 left-6">
                      {errorMsg}
                    </p>
                  </div>
                </div>
                <div>
                  <label className="block text-[#7A7886] mb-2">Notes</label>
                  <textarea
                    placeholder="Enter Some Notes"
                    className="w-full border border-border rounded-lg p-4 h-32"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end mt-10">
                <button
                  type="submit"
                  className="bg-primary text-white  py-4 rounded-xl  w-full hover:bg-blue-600 cursor-pointer"
                >
                  Submit & Transfer
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
      <PinPopUp
        isOpen={popUpPin}
        onClose={() => setPopUpPin(false)}
        onSucces={handleSucces}
      />
      <PopUpSucces
        textTransferTo="Transfer to Ghaluh 1"
        textInfo="Thank you for using this application for your financial"
        info="Yeay Transfer"
        image={TransferSucces}
        btnInfo2="Transfer Again"
        isOpen={popUpSucc}
        onClose={() => setPopUpSucc(false)}
      />
    </div>
  );
}
