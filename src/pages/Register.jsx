import LogoEWallet from "../Components/LogoEWallet";
import AuthLayout from '../Components/AuthLayout.jsx';
import Heading from '../Components/HeadingAuth.jsx';
import ImageRegister from '../assets/imageSideRegister.png';
import Oath from '../Components/Oath.jsx';
import IconFB from "../assets/icons/icon-facebook.svg";
import IconG from "../assets/icons/icon-google.svg";
import FormInput from '../Components/FormInput.jsx';
import Email from '../assets/icons/email.svg';
import IconPassword from '../assets/icons/Password.svg';
import BtnSubmit from '../Components/ButtonSubmit.jsx';
import {Link, useNavigate } from 'react-router';
import { saveUser } from '../utils/auth.js';
import { useForm } from 'react-hook-form';
import Joi from 'joi';
import  {joiResolver } from '@hookform/resolvers/joi';

const schemaRegister = Joi.object({
        email: Joi.string().email({tlds:{allow:false}}).required(),
        password: Joi.string().min(8).required(),
        confirmPass: Joi.string().valid(Joi.ref("password")).min(8).required().messages({
            "any.only":"Password is not match!"
        })
    });

function Register() {
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: joiResolver(schemaRegister)
    });
    const navigate = useNavigate();
    const onSubmit =(data) => {
        const {email, password} =data;
        saveUser({email, password});
            window.alert("Already registered. Redirecting you to login page...");
            navigate("/login");
        console.log("disimpan:", data);
    };
    // const {email, password, confirmPass, errors, setEmail, setPassword, setConfirmPass, validate} = useRegister();
    

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const isValid = validate();
    //     if(isValid) {
    //         

    //     }
    // };
    return(
        <>
        <AuthLayout image={<img src={ImageRegister} alt="Register"/>}>
        <LogoEWallet/>
        <Heading 
        title="Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users"
        description="Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!" />
        <Oath icon={IconG} label="Sign In With Google"/>
        <Oath icon={IconFB} label="Sign In With Facebook"/>
        <div className="flex items-center text-[#AAAAAA]
            before:content-[''] before:flex-1 before:border-b before:border-[#ccc] before:mr-3.75
            after:content-[''] after:flex-1 after:border-b after:border-[#ccc] after:ml-3.75">Or
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput 
            label="Email"
            icon={Email} 
            type="text"
            placeholder="Enter Your Emails" 
            authData={register("email")}/>
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <FormInput
            label="Password"
            icon={IconPassword} 
            type="password"
            placeholder="Enter Your Password"
            authData={register("password")}/>
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        <FormInput
            label="Password"
            icon={IconPassword} 
            type="password"
            placeholder="Enter Your Password Again"
            authData={register("confirmPass")}/>
            {errors.confirmPass && <p className="text-red-500">{errors.confirmPass.message}</p>}

        <BtnSubmit label="Register"/>
        </form>
        <p className="text-center m-2 text-[#4F5665]">Have An Account? <Link to="/login">Login</Link></p>
        </AuthLayout>
        </>

    );
}

export default Register;