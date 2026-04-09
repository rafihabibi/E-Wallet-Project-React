import Sidebar from "../Components/SideBar.jsx";
import Header from "../Components/Header.jsx";
import TwoUser from "../assets/icons/2User.svg";
import ButtonSubmit from "../Components/ButtonSubmit.jsx";
import PinWrapper from "../Components/PinWrapper.jsx";

export default function ChangePin() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      <div className="flex">
        <Sidebar isactive="profile" activePage="profile" />
        <main className="flex-1 p-4 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-2xl"></span>
            <img src={TwoUser} alt="user icon" />
            <h2 className="font-bold text-xl text-[#3A3D42]">Profile</h2>
          </div>

          <div className="md:bg-white md:rounded-2xl md:shadow-md md:border md:border-[#EAEAEA] px-6 py-6 w-full">
            <div className="flex flex-col items-center">
              <h2 className="font-semibold text-xl">Change Pin 👋 </h2>
              <p className="text-sm text-gray-500">
                Please save your pin because this so important.
              </p>
              <div className="py-20">
                <PinWrapper />
              </div>
            </div>
            <ButtonSubmit label="Submit" />
          </div>
        </main>
      </div>
    </div>
  );
}
