import {useState} from 'react';
import {getUser} from '../utils/auth.js';


export default function useRegister() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [errors, setErrors] = useState({});

    function validate() {
        const emailExists = getUser()?.email;
        const newErrors = {};


       
        if(email === "") {
            newErrors.email = "Email is required";
        } else if (!email.includes("@")){
            newErrors.email = "Email must content @";
        } else if (email === emailExists){
            newErrors.email = "Email alredy Exists!";
        }
        if(password === ""){
            newErrors.password = "Password is required";
        } else if(password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long";
        }
        if(confirmPass === ""){
            newErrors.confirmPass = "Password is required";
        } else if(confirmPass !== password){
            newErrors.confirmPass = "The passwords you entered are different";
        }
         
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    return {email, password, confirmPass, errors, setEmail, setPassword, setConfirmPass, setErrors, validate};

}