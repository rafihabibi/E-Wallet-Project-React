import Person from "../assets/changePinPerson.svg";
import Heading from "../Components/HeadingAuth.jsx";
import AuthLayout from "../Components/AuthLayout.jsx";
import LogoEWallet from "../Components/LogoEWallet.jsx";
import PinWrapper from "../Components/PinWrapper.jsx";
import ButtonSubmit from "../Components/ButtonSubmit.jsx";
import { Link } from "react-router";

export default function EnterPin() {
  return (
    <>
      <AuthLayout image={<img src={Person} alt="EnterPin" />}>
        <form>
          <div className="">
            <LogoEWallet />
            <Heading
              title="Enter Your Pin 👋"
              description="Please save your pin because this so important"
            />
            <PinWrapper />
            <ButtonSubmit label="Submit" />
            <p></p>
          </div>
        </form>
        <p className="text-center m-2 text-[#4F5665]">
          Forgot Your Pin? <Link to="/login">Reset</Link>
        </p>
      </AuthLayout>
    </>
  );
}
