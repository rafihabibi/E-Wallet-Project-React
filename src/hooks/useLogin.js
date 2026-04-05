import {useState} from 'react';
import {getUser} from '../utils/auth.js';


export default function useLogin() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [errors, setErrors] = useState({});

    function validate(){
        const dataUser = getUser();
        const newErrors = {};

        if(email === ""){
            newErrors.email = "Email is Required";
        } else if (email !== dataUser?.email ){
            newErrors.email = "Email is Incorect!";
        } 
        if(pass === "" ){
            newErrors.password = "Password is Required";
        } else if(pass !== dataUser?.password) {
            newErrors.password = "Password is Incorect!";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    return {email, pass, errors, setEmail, setPass, setErrors,validate};
}