import Header from "../Components/Header.jsx";
import Sidebar from "../Components/SideBar.jsx";
import SendBlue from "../assets/icons/sendBlue.svg";
import Stepper from "../Components/Stepper.jsx";
import PeopleInfo from "../Components/PeopleInfo.jsx";
import FindPeopleList from "../Components/FindPeopleList.jsx";
import Ghaluh1 from "../assets/profileGaluh.svg";
import Search from "../assets/icons/Search.svg";

export default function FindPeople() {
  const daftarOrang = [
    { id: 1, name: "Ghaluh 1", phone: "(239) 555-0108" },
    { id: 2, name: "Ghaluh 2", phone: "(480) 555-0103" },
    { id: 3, name: "Ghaluh 2", phone: "(480) 555-0103" },
    { id: 4, name: "Ghaluh 2", phone: "(480) 555-0103" },
    { id: 5, name: "Ghaluh 2", phone: "(480) 555-0103" },
    { id: 6, name: "Ghaluh 2", phone: "(480) 555-0103" },
    { id: 7, name: "Ghaluh 2", phone: "(480) 555-0103" },
    { id: 8, name: "Ghaluh 2", phone: "(480) 555-0103" },
  ];
  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-13 md:pb-0">
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
            <div className="flex items-center justify-between gap-4 mb-10">
              <Stepper isactive="find-people" />
            </div>
            <div className="flex items-center justify-between gap-2 py-2">
              <div>
                <h2 className="font-bold">Find People</h2>
                <p className="text-gray-500 text-sm">
                  8 Result Found For Ghaluh
                </p>
              </div>
              <div className="flex border gap-2 px-2 border-border rounded-md">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Number"
                  className="w-full"
                />
                <img src={Search} alt="search" className="pr-3" />
              </div>
            </div>
            <div>
              {daftarOrang.map((orang) => (
                <FindPeopleList
                  key={orang.id}
                  image={Ghaluh1}
                  name={orang.name}
                  phone={orang.phone}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
