import {useState} from 'react';

export default function PinWrapper() {
    const [pin, setPin] = useState(new Array(6).fill(""));
    return(
        <div className="flex justify-between gap-2 ">
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
    );
}