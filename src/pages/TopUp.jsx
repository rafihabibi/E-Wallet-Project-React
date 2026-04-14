import Header from "../Components/Header.jsx";
import SideBar from "../Components/SideBar.jsx";
import PeopleInfo from "../Components/PeopleInfo.jsx";
import Upload from "../assets/icons/Upload.svg";
import Bri from "../assets/bri.svg";
import Dana from "../assets/dana.svg";
import Bca from "../assets/bca.svg";
import Gopay from "../assets/gopay.svg";
import Ovo from "../assets/ovo.svg";
import ButtonSubmit from "../Components/ButtonSubmit.jsx";
import Ghaluh from "../assets/profileImage.svg";

export default function TopUp() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] pb-6">
      <Header />
      <div className="flex">
        <SideBar activePage="topUp" />
        <section className="flex-1 p-8">
          <div className="flex items-center gap-4">
            <img src={Upload} alt="Top Up" />
            <h2>Top Up Account</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4 pb-10">
            <div className="col-span-2 border border-border px-4">
              <h2 className=" font-bold text-xl py-3 px-1">
                Account Information
              </h2>
              <PeopleInfo img={Ghaluh} />
              <div>
                <label className="block text-black py-2 text-base font-bold">
                  Amount
                </label>
                <p className="text-sm text-gray-400 mb-4">
                  Type the amount you want to transfer to your e-wallet account
                </p>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Enter Nominal Transfer"
                    className="w-full border border-border rounded-lg p-4 pl-12 focus:outline-primary"
                  />
                </div>
                <div className="flex flex-col gap-2 py-5">
                  <h2 className="text-xl font-bold">Payment Method</h2>
                  <p className="text-gray-400">
                    Choose your payment method fot top up account
                  </p>
                  <label className="flex gap-4 border py-4 rounded-md border-border text-gray-400 px-3">
                    <input type="radio" value="dana" name="payment" />
                    <img src={Dana} alt="dana" />
                    <p>Dana</p>
                  </label>
                  <label className="flex gap-4 border py-4 rounded-md border-border text-gray-400 px-3">
                    <input type="radio" name="payment" value="bca" />
                    <img src={Bca} alt="bca" />
                    <p>Bank Central Asia</p>
                  </label>
                  <label className="flex gap-4 border py-4 rounded-md border-border text-gray-400 px-3">
                    <input type="radio" value="gopay" name="payment" />
                    <img src={Gopay} id="gopay" alt="gopay" />
                    <p>Gopay</p>
                  </label>
                  <label className="flex gap-4 border py-4 rounded-md border-border text-gray-400 px-3 ">
                    <input type="radio" name="payment" value="ovo" />
                    <img src={Ovo} alt="ovo" />
                    <p>Ovo</p>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 h-fit rounded-xl border border-border px-3 py-3">
              <h2 className="font-bold text-base">Payment</h2>
              <div className="flex flex-col">
                <div className="flex justify-between py-2">
                  <p className="text-[#4F5665] font-bold">Order</p>
                  <p className="font-bold">idr. 40.000</p>
                </div>
                <div className="flex justify-between py-2">
                  <p className="text-[#4F5665] font-bold">Delivery</p>
                  <p className="font-bold">Idr.0</p>
                </div>
                <div className="flex justify-between py-2">
                  <p className="text-[#4F5665] font-bold">Tax</p>
                  <p className="font-bold">Idr. 4000</p>
                </div>
                <div className="border-b-2 border-border"></div>
                <div className="flex justify-between py-2">
                  <p className="text-[#4F5665] font-bold">Sub Total</p>
                  <p className="font-bold">Idr. 44.000</p>
                </div>
              </div>
              <ButtonSubmit label="Submit" />
              <p className="text-gray-400 text-sm">
                *Get Discount if you pay with Bank Central Asia
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
