import {useState} from 'react';
import { Eye, EyeOff } from 'lucide-react';
/**
 * Komponen untuk menampilkan isi form
 * @param {object} props
 * @param {string} props.label - Memberikan nama Input
 * @param {string} props.type - Memberikan type input
 * @param {string} props.icon -  Memberikan Icon gambar sesuai input
 * @param {string} props.placeholder - berikan tampilan teks dalam input
 * @param {string} props.value -  berikan nilai inputan nya
 * @param {function} props.onChange - Mengupdate input value
 * @returns {JSX.Element}
 */


function FormInput({label, type, placeholder, icon, onChange, value}) {
    const [togglePass, setTogglePass] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword ? (togglePass ? "text" : "password") : type;

    return(
        <div className="py-1">
            <label className="text-base">{label}</label>
            <div className="flex gap-2 border border-[#ccc] rounded-xl bg-gray-100 py-1 px-2">
                <img src={icon} alt="Descriptions" />
                <input
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full"
                />
                {isPassword && (
                    <button className='cursor-pointer' type='button' onClick={() => setTogglePass(!togglePass)}>
                        {togglePass ? <EyeOff size={16}/> : <Eye size={16}/>}
                    </button>
                )}
            </div>
        </div>
    );
}

export default FormInput;