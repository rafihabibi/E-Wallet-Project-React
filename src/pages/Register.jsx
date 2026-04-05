import LogoEWallet from "../Components/LogoEWallet";
import AuthLayout from '../Components/AuthLayout.jsx';
import Heading from '../Components/Heading.jsx';
import ImageRegister from '../assets/imageSideRegister.png';
import ButtonSM from '../Components/buttonSM.jsx';
import IconFB from "../assets/icons/icon-facebook.svg";
import IconG from "../assets/icons/icon-google.svg";
import FormInput from '../Components/FormInput.jsx';
import Email from '../assets/icons/email.svg';
import IconPassword from '../assets/icons/Password.svg';
import BtnSubmit from '../Components/ButtonSubmit.jsx';
import useRegister from '../hooks/useRegister.js';
import {Link, useNavigate } from 'react-router';
import { saveUser } from '../utils/auth.js';



function Register() {
    const {email, password, confirmPass, errors, setEmail, setPassword, setConfirmPass, validate} = useRegister();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validate();
        if(isValid) {
            saveUser({email, password});
            window.alert("Already registered. Redirecting you to login page...");
            navigate("/login");

        }
    };
    return(
        <>
        <AuthLayout image={<img src={ImageRegister} alt="Register"/>}>
        <LogoEWallet/>
        <Heading 
        title="Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users"
        description="Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!" />
        <ButtonSM icon={IconG} label="Sign In With Google"/>
        <ButtonSM icon={IconFB} label="Sign In With Facebook"/>
        <div className="flex items-center text-[#AAAAAA]
            before:content-[''] before:flex-1 before:border-b before:border-[#ccc] before:mr-3.75
            after:content-[''] after:flex-1 after:border-b after:border-[#ccc] after:ml-3.75">Or
        </div>
        <form onSubmit={handleSubmit}>
            <FormInput 
            label="Email"
            icon={Email} 
            type="text"
            placeholder="Enter Your Emails"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
        <FormInput
            label="Password"
            icon={IconPassword} 
            type="password"
            placeholder="Enter Your Password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
            {errors.password && <p className="text-red-500">{errors.password}</p>}

        <FormInput
            label="Password"
            icon={IconPassword} 
            type="password"
            placeholder="Enter Your Password Again"
            value={confirmPass}
            onChange={(e)=>setConfirmPass(e.target.value)}/>
            {errors.confirmPass && <p className="text-red-500">{errors.confirmPass}</p>}

        <BtnSubmit label="Register"/>
        </form>
        <p className="text-center m-2 text-[#4F5665]">Have An Account? <Link to="/login">Login</Link></p>
        </AuthLayout>
        </>

    );
}

export default Register;