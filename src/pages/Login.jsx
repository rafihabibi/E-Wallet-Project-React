import LogoEWallet from "../Components/LogoEWallet";
import AuthLayout from "../Components/AuthLayout.jsx";
import Heading from "../Components/HeadingAuth.jsx";
import ImageLogin from "../assets/sideLoginImage.svg";
import Oath from "../Components/Oath.jsx";
import IconFB from "../assets/icons/icon-facebook.svg";
import IconG from "../assets/icons/icon-google.svg";
import FormInput from "../Components/FormInput.jsx";
import Email from "../assets/icons/email.svg";
import iconPassword from "../assets/icons/Password.svg";
import BtnSubmit from "../Components/ButtonSubmit.jsx";
import { Link, useNavigate } from "react-router";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { getUser } from "../utils/auth.js";
import PopUpSucces from "../Components/PopUpSuccess.jsx";
import Check from "../assets/checkLogin.png";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice.js";
import usePopup from "../hooks/usePopUp.js";

const schemaLogin = Joi.object({
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } }),
  password: Joi.string().required(),
});

function Login() {
  const { popUpSucc, popupOpen, popupClose } = usePopup();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schemaLogin),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const registerUser = getUser();
    const { email, password } = data;
    if (!registerUser || email !== registerUser.email) {
      setError("email", { type: "manual", message: "email not registered!" });
      return;
    }

    if (!registerUser || password !== registerUser.password) {
      setError("password", {
        type: "manual",
        message: "Your Password is incorrect!",
      });
      return;
    }
    if (
      registerUser &&
      email === registerUser.email &&
      password === registerUser.password
    ) {
      popupOpen();
      dispatch(login());
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    }
  };
  // const {email, pass, errors, setEmail, setPass, validate} =useLogin();
  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const isValid = validate();
  //     if(isValid) {
  //         window.alert("Welcome!");
  //         navigate("/dashboard");

  //     }
  // };
  return (
    <>
      <AuthLayout image={<img src={ImageLogin} alt="Login" />}>
        <LogoEWallet />
        <Heading
          title="Hello Welcome Back 👋"
          description="Fill out the form correctly or you can login with several option."
        />
        <Oath icon={IconG} label="Sign In With Google" />
        <Oath icon={IconFB} label="Sign In With Facebook" />
        <div
          className="flex items-center text-[#AAAAAA]
            before:content-[''] before:flex-1 before:border-b before:border-[#ccc] before:mr-3.75
            after:content-[''] after:flex-1 after:border-b after:border-[#ccc] after:ml-3.75"
        >
          Or
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label="Email"
            icon={Email}
            type="text"
            placeholder="Enter Your Emails"
            authData={register("email")}
          />
          {errors.email && (
            <p className="text-red-500 ">{errors.email.message}</p>
          )}
          <FormInput
            label="Password"
            icon={iconPassword}
            type="password"
            placeholder="Enter Your Password"
            authData={register("password")}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <p className="flex justify-end gap-1 text-[#4F5665] text-sm">
            Forgot Password?{" "}
            <Link to="/forgotPassword" className="text-blue-700">
              Reset
            </Link>
          </p>
          <BtnSubmit label="Login" />
          <PopUpSucces
            info="Login, "
            image={Check}
            isOpen={popUpSucc}
            onClose={() => {
              popupClose();
              navigate("/dashboard");
            }}
          />
        </form>

        <p className="text-center m-2 text-[#4F5665]">
          Not Have An Account? <Link to="/register">Register</Link>
        </p>
      </AuthLayout>
    </>
  );
}

export default Login;
