import { useState } from 'react';
import { NavLink } from 'react-router';

export default function PinPopUp({isOpen, onClose}) {
    const [pin, setPin] = useState(new Array(6).fill(""));
    return(
        <>
        {isOpen && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 w-full max-w-md text-center"> 
              <div className="border-b pb-4 mb-6 text-left">
                    <p className="text-sm font-semibold text-gray-500 uppercase">Transfer to Ghaluh 1</p>
                </div>
                <div className="text-left mb-8">
                    <h3 className="text-2xl font-bold text-[#3A3D42] mb-2">Enter Your Pin 👋</h3>
                    <p className="text-[#7A7886]">Enter Your Pin For Transaction</p>
                </div>
                <div className="flex justify-between gap-2 mb-10">
                    {pin.map((_, index) => (
                        <input key={index} type="text" value={pin[index]} onChange={(e) => {
                                const newPin = [...pin];
                                newPin[index] = e.target.value.slice(0, 1);
                                setPin(newPin);
                            }}
                            maxLength="1"
                            className="w-12 h-12 text-center border-b"
                        />
                    ))}
                </div>
                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold mb-4 cursor-pointer hover:bg-blue-800"> Next</button>
                <button onClick={onClose} className="w-full bg-gray-200 text-gray-700 py-4 rounded-xl font-bold mb-4 hover:bg-gray-300 cursor-pointer"> Cancel</button>
                    <p className="text-sm text-center text-[#7A7886] cursor-pointer">Forgot Pin?<NavLink to="/dashboard" className="text-primary">Reset</NavLink></p>
                    </div>
                </div>
            )}
        </>
    );
}