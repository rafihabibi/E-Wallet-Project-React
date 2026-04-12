export default function PopUpSucces({
  btnInfo2,
  info,
  image,
  isOpen,
  onClose,
  textInfo,
  textTransferTo,
}) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 w-fit h-fit text-center">
            <div className="border-b pb-2 text-left">
              <p className="text-sm font-semibold text-gray-500 uppercase">
                {textTransferTo}
              </p>
            </div>
            <div className="pb-5">
              <div className="flex justify-center px-10">
                <img src={image} alt="description" className="w-40" />
              </div>
              <div>
                <h2 className="font-semibold">
                  {info}
                  <span className="text-green-400 font-semibold"> Success</span>
                </h2>
                <p className="text-gray-400 text-sm ">{textInfo}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold mb-4 cursor-pointer hover:bg-blue-800"
            >
              Done
            </button>
            <button className="w-full bg-white text-primary border-primary py-4 rounded-xl font-bold hover:bg-gray-300 cursor-pointer">
              {btnInfo2}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
