import Header from "../Components/Header.jsx";
import Sidebar from "../Components/SideBar";
import User from "../assets/icons/User.svg";
import TwoUser from "../assets/icons/2User.svg";
import FormInput from "../Components/FormInput.jsx";
import Password from "../assets/icons/Password.svg";
import ButtonSubmit from "../Components/ButtonSubmit.jsx";

export default function changePassword() {
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

          <div className="bg-white rounded-2xl shadow-md border border-[#EAEAEA] px-6 py-6 w-full">
            <div className="bg-[#FFFFFF]">
              <h2>Change Password</h2>
              <form>
                <div className="">
                  <FormInput
                    label="Existing Password"
                    type="password"
                    placeholder="Enter Your Existing Password"
                    icon={Password}
                  />
                  <FormInput
                    label="Existing Password"
                    type="password"
                    placeholder="Enter Your New Password"
                    icon={Password}
                  />
                  <FormInput
                    label="Existing Password"
                    type="password"
                    placeholder="Re-Type Your New Password"
                    icon={Password}
                  />
                </div>
                <ButtonSubmit label="Submit" />
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
