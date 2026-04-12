import Header from "../Components/Header.jsx";
import Sidebar from "../Components/SideBar.jsx";
import Trash from "../assets/icons/Trash.svg";
import Search from "../assets/icons/Search.svg";
import { useSearchParams } from "react-router";
import HistoryBlue from "../assets/icons/Historyblue.svg";

import Ghaluh from "../assets/profileGaluh.svg";
import Profile1 from "../assets/profile1.svg";
import Profile2 from "../assets/profile2.svg";

export default function History() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const itemsPerPage = 5;

  const allHistory = [
    {
      id: 1,
      image: Ghaluh,
      name: "Ghaluh 1",
      phone: "082116304337",
      amount: "+Rp.50.000",
      isIncome: true,
    },
    {
      id: 2,
      image: Profile1,
      name: "Cameron Williamson",
      phone: "(308) 555-0121",
      amount: "-Rp.50.000",
      isIncome: false,
    },
    {
      id: 3,
      image: Profile2,
      name: "Cody Fisher",
      phone: "(704) 555-0127",
      amount: "-Rp.50.000",
      isIncome: false,
    },
    {
      id: 4,
      image: Profile1,
      name: "Kristin Watson",
      phone: "(603) 555-0123",
      amount: "-Rp.50.000",
      isIncome: false,
    },
    {
      id: 5,
      image: Profile2,
      name: "Floyd Miles",
      phone: "(671) 555-0110",
      amount: "+Rp.50.000",
      isIncome: true,
    },
    {
      id: 6,
      image: Profile1,
      name: "Wade Warren",
      phone: "(225) 555-0118",
      amount: "-Rp.50.000",
      isIncome: false,
    },
    {
      id: 7,
      image: Profile2,
      name: "Savannah Nguyen",
      phone: "(217) 555-0113",
      amount: "+Rp.50.000",
      isIncome: true,
    },
    {
      id: 8,
      image: Profile1,
      name: "Budi Santoso",
      phone: "081234567890",
      amount: "-Rp.50.000",
      isIncome: false,
    },
  ];

  const filteredData = allHistory.filter((data) => {
    return data.name.toLowerCase().includes(searchQuery.toLowerCase());
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
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      <div className="flex">
        <Sidebar
          activePage="history"
          isactive="history"
          className="hidden md:block"
        />

        <main className="flex-1 p-4 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-2xl"></span>
            <img src={HistoryBlue} alt="" />
            <h2 className="font-bold text-xl text-[#3A3D42]">
              History Transaction
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-[#EAEAEA] p-8 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <h3 className="font-bold text-lg text-[#3A3D42]">
                Find Transaction
              </h3>

              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="Enter Number Or Full Name"
                  className="w-full border border-gray-200 rounded-lg p-3 pr-10 focus:outline-primary text-sm"
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <img
                  src={Search}
                  alt="search"
                  className="absolute right-3 top-3.5 w-5 h-5"
                />
              </div>
            </div>

            <div className="flex flex-col">
              {paginatedData.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between p-4 rounded-lg ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <div className="flex items-center gap-4 w-1/3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />

                    <span className="text-[#7A7886] text-sm md:text-base">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-[#7A7886] text-sm md:text-base w-1/3 text-center">
                    {item.phone}
                  </span>

                  <span
                    className={`font-medium text-sm md:text-base w-1/4 text-center ${item.isIncome ? "text-green-500" : "text-red-500"}`}
                  >
                    {item.amount}
                  </span>

                  <button className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors">
                    <img src={Trash} alt="trash" />
                  </button>
                </div>
              ))}

              {paginatedData.length === 0 && (
                <div className="text-center py-10 text-gray-400">
                  Transaction not found.
                </div>
              )}
            </div>

            <div className="flex items-center justify-between mt-8 text-sm text-[#7A7886]">
              <span>
                Show {paginatedData.length} History of {filteredData.length}
                History
              </span>

              {totalPages > 1 && (
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`hover:text-primary ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
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
                          className={`w-8 h-8 rounded-lg font-bold ${currentPage === pageNumber ? "bg-primary text-white" : "hover:bg-gray-100"}`}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`hover:text-primary ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
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
