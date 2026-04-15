import Sidebar from "../Components/SideBar.jsx";
import Header from "../Components/Header.jsx";
import TwoUser from "../assets/icons/2User.svg";
import ProfilePicture from "../assets/profilePicture.svg";
import EditSquare from "../assets/icons/EditSquare.svg";
import Delete from "../assets/icons/Delete.svg";
import FormInput from "../Components/FormInput.jsx";
import User from "../assets/icons/User.svg";
import Phone from "../assets/icons/Phone.svg";
import Email from "../assets/icons/email.svg";
import { Link, NavLink } from "react-router";
import ButtonSubmit from "../Components/ButtonSubmit.jsx";

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-20 md:pb-0">
      <Header />
      <div className="flex">
        <Sidebar
          isactive="profile"
          activePage="profile"
          classname="hidden md:block"
        />
        <main className="flex-1 p-4 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-2xl"></span>
            <img src={TwoUser} alt="user icon" />
            <h2 className="font-bold text-xl text-[#3A3D42]">Profile</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-[#EAEAEA] px-6 py-6 w-full">
            <div className="bg-[#FFFFFF] ">
              <h2 className="font-semibold px-2 py-2">Profile Picture</h2>
              <div className="flex ">
                <div className="px-2 ">
                  <img
                    src={ProfilePicture}
                    alt="Profile Picture"
                    className="rounded-md "
                  />
                </div>
                <div className="flex flex-col gap-2 py-5">
                  <button className="border  rounded bg-primary flex items-center gap-3 text-white px-2 py-2 cursor-pointer hover:bg-blue">
                    <img src={EditSquare} alt="Edit Square" />
                    Change Profile
                  </button>
                  <button className="border rounded border-red flex items-center gap-3 px-2 py-2 text-red hover:bg-gray-200 cursor-pointer">
                    <img src={Delete} alt="" />
                    Delete Profile
                  </button>
                </div>
              </div>
            </div>
            <form>
              <p className="text-gray-500 text-sm ">
                The profile picture must be 512 x 512 pixels or less
              </p>
              <div className="py-2">
                <FormInput
                  label="Full Name"
                  type="text"
                  placeholder="Ghaluh Wizard Anggoro"
                  icon={User}
                />
                <FormInput
                  label="Phone"
                  type="text"
                  placeholder="628821163049"
                  icon={Phone}
                />
                <FormInput
                  label="Email"
                  type="text"
                  placeholder="ghaluhwizard@gmail.com"
                  icon={Email}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Password</p>
                <NavLink to="/profile/changePassword">
                  <p className="text-blue-400">Change Password</p>
                </NavLink>
                <p className="font-semibold">Pin</p>
                <NavLink to="/profile/changePin">
                  <p className="text-blue-400">Change Pin</p>
                </NavLink>
              </div>
              <ButtonSubmit label="Submit" />
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
