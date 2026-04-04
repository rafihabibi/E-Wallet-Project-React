import LogoEWallet from "../Components/LogoEWallet";
import AuthLayout from '../Components/AuthLayout.jsx';
import Heading from '../Components/Heading.jsx';
import ImageRegister from '../assets/imageSideRegister.png';
import ButtonSM from '../Components/buttonSM.jsx';
import IconFB from "../assets/icons/icon-facebook.svg";
import IconG from "../assets/icons/icon-google.svg";
import FormInput from '../Components/FormInput.jsx';
import Email from '../assets/icons/email.svg';
import Passoword from '../assets/icons/Password.svg';
import BtnSubmit from '../Components/ButtonSubmit.jsx';
import { Link } from 'react-router'

function Register() {
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
        <FormInput
            label="Password"
            icon={Passoword} 
            type="password"
            placeholder="Enter Your Password Again"/>
        <BtnSubmit label="Register"/>
        <p className="text-center m-2 text-[#4F5665]">Have An Account? <Link to="/login">Login</Link></p>
        </AuthLayout>
        </>

    )
}

export default Register