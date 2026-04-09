import TransferSucces from "../assets/transferSucces.svg";

export default function PopUpSucces({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md text-center">
            <div className="border-b pb-4 mb-6 text-left">
              <p className="text-sm font-semibold text-gray-500 uppercase">
                Transfer to Ghaluh 1
              </p>
            </div>
            <div className="pb-10">
              <div className="flex justify-center mb-6">
                <img src={TransferSucces} alt="" />
              </div>
              <div>
                <h2 className="font-semibold">
                  Yeay Transfer{" "}
                  <span className="text-green-400 font-semibold">Success</span>
                </h2>
                <p className="text-gray-400 text-sm mt-2">
                  Thank you for using this application for your financial
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold mb-4 cursor-pointer hover:bg-blue-800"
            >
              Done
            </button>
            <button className="w-full bg-white text-primary border-primary py-4 rounded-xl font-bold mb-4 hover:bg-gray-300 cursor-pointer">
              Transfer Again
            </button>
          </div>
        </div>
      )}
    </>
  );
}
