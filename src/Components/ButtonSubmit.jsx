export default function ButtonSubmit({ label }) {
    return(
        <div className="py-3 ">
            <button className="text-sm text-white w-full h-9 border border-solid border-[#ccc] cursor-pointer rounded-xl bg-blue-600 hover:bg-blue-800  transition-colors duration-300 ease-in-out">{label}</button>
        </div>
    );
}