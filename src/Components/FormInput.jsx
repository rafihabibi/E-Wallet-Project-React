import {useState} from 'react'
import { Eye, EyeOff } from 'lucide-react'

function FormInput({label, type, placeholder, icon}) {
    const [togglePass, setTogglePass] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword ? (togglePass ? "text" : "password") : type;

    return(
        <div className="py-1">
            <label className="text-base">{label}</label>
            <div className="flex gap-2 border border-[#ccc] rounded-xl bg-gray-100 py-1 px-2">
                <img src={icon} alt="Descriptions" />
                <input type={inputType}  placeholder={placeholder} className="w-full"/>
                {isPassword && (
                    <button onClick={() => setTogglePass(!togglePass)}> {togglePass ? <EyeOff size={16}/> : <Eye size={16}/>}   
                    </button>
                )}
            </div>
        </div>
    );
}

export default FormInput;