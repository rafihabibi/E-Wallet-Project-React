import LogoEWallet from "../Components/LogoEWallet";
import AuthLayout from '../Components/AuthLayout.jsx';
import Heading from '../Components/Heading.jsx';
import ImageLogin from '../assets/sideLoginImage.svg';
import ButtonSM from '../Components/buttonSM.jsx';
import IconFB from "../assets/icons/icon-facebook.svg";
import IconG from "../assets/icons/icon-google.svg";
import FormInput from '../Components/FormInput.jsx';
import Email from '../assets/icons/email.svg';
import iconPassword from '../assets/icons/Password.svg';
import BtnSubmit from '../Components/ButtonSubmit.jsx';
import { Link, useNavigate } from 'react-router';
import useLogin from '../hooks/useLogin.js';

function Login() {
    const {email, pass, errors, setEmail, setPass, validate} =useLogin();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if(isValid) {
            window.alert("Welcome!");
            navigate("/dashboard");
            
        }
    };
    return(
        <>
        <AuthLayout image={<img src={ImageLogin} alt="Login"/>}>
        <LogoEWallet/>
        <Heading 
        title="Hello Welcome Back 👋"
        description="Fill out the form correctly or you can login with several option." />
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
            {errors.email && <p className="text-red-500 ">{errors.email}</p>}
        <FormInput
            label="Password"
            icon={iconPassword} 
            type="password"
            placeholder="Enter Your Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)} />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
        <BtnSubmit label="Login"/>
        </form>
        <p className="text-center m-2 text-[#4F5665]">Not Have An Account? <Link to="/register">Register</Link></p>
        </AuthLayout>
        </>

    );
}

export default Login;