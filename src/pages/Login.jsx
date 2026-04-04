import LogoEWallet from "../Components/LogoEWallet";
import AuthLayout from '../Components/AuthLayout.jsx';
import Heading from '../Components/Heading.jsx';
import ImageLogin from '../assets/sideLoginImage.svg';
import ButtonSM from '../Components/buttonSM.jsx';
import IconFB from "../assets/icons/icon-facebook.svg";
import IconG from "../assets/icons/icon-google.svg";
import FormInput from '../Components/FormInput.jsx';
import Email from '../assets/icons/email.svg';
import Passoword from '../assets/icons/Password.svg';
import BtnSubmit from '../Components/ButtonSubmit.jsx';
import { Link } from 'react-router'

function Login() {
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
        <FormInput 
            label="Email"
            icon={Email} 
            type="email"
            placeholder="Enter Your Emails" />
        <FormInput
            label="Password"
            icon={Passoword} 
            type="password"
            placeholder="Enter Your Password" />
        <BtnSubmit label="Login"/>
        <p className="text-center m-2 text-[#4F5665]">Not Have An Account? <Link to="/register">Register</Link></p>
        </AuthLayout>
        </>

    )
}

export default Login