import Header from "../Components/Header.jsx";
import Sidebar from "../Components/SideBar.jsx";
import SendBlue from "../assets/icons/sendBlue.svg";
import Stepper from "../Components/Stepper.jsx";
import FindPeopleList from "../Components/FindPeopleList.jsx";
import Ghaluh1 from "../assets/profileGaluh.svg";
import Profile1 from "../assets/profile2.svg";
import Profile2 from "../assets/profileImage.svg";
import Search from "../assets/icons/Search.svg";
import { useSearchParams } from "react-router";

export default function FindPeople() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const itemsPerPage = 5;
  const daftarOrang = [
    { id: 1, image: Ghaluh1, name: "Ghaluh", phone: "(239) 555-0108" },
    { id: 2, image: Profile1, name: "Ajeng annjani", phone: "(480) 555-3232" },
    { id: 3, image: Profile1, name: "Haji namruh", phone: "(480) 555-6454" },
    { id: 4, image: Profile1, name: "Kunta Panji", phone: "(480) 555-6445" },
    { id: 5, image: Profile1, name: "Sulis aja", phone: "(480) 555-1213" },
    { id: 6, image: Profile2, name: "Semu", phone: "(480) 555-2323" },
    { id: 7, image: Ghaluh1, name: "Ghaluh", phone: "(480) 555-0103" },
    { id: 8, image: Ghaluh1, name: "Ghaluh", phone: "(480) 555-0103" },
  ];
  const filteredData = daftarOrang.filter((data) => {
    const query = searchQuery.toLowerCase().replace(/\s+/g, "");
    const matchName = data.name.toLowerCase().includes(query);
    const cleanPhone = data.phone.replace(/[\s()-]/g, "");
    const matchPhone = cleanPhone.includes(query);
    return matchName || matchPhone;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handleSearch = (e) => {
    const text = e.target.value;
    const newParams = new URLSearchParams(searchParams);
    if (text) {
      newParams.set("search", text);
    } else {
      newParams.delete("search");
    }
    newParams.set("page", 1);
    setSearchParams(newParams);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("page", newPage);
      setSearchParams(newParams);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-18 md:pb-0">
      <Header />
      <div className="flex">
        <Sidebar
          className=" md:block"
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
                  {paginatedData.length} Result Found
                </p>
              </div>
              <div className="flex border gap-2 px-2 border-border rounded-md">
                <input
                  type="text"
                  name=""
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Enter Number or Name"
                  className="w-full"
                />
                <img src={Search} alt="search" className="pr-3" />
              </div>
            </div>
            <div>
              {paginatedData.map((item) => (
                <FindPeopleList
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  phone={item.phone}
                />
              ))}
            </div>
            <div className="flex justify-end gap-2">
              {totalPages > 1 && (
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`cursor-pointer hover:text-primary ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    Prev
                  </button>

                  <div className="flex gap-2">
                    {[...Array(totalPages)].map((_, i) => {
                      const pageNumber = i + 1;
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`cursor-pointer w-8 h-8 rounded-lg font-bold ${currentPage === pageNumber ? "bg-primary text-white" : "hover:bg-gray-100"}`}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`hover:text-primary ${currentPage === totalPages ? " opacity-50 cursor-not-allowed" : ""}`}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
