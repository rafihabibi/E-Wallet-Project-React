import LogoEWallet from "../Components/LogoEWallet.jsx";
import Heading from "../Components/HeadingAuth.jsx";
import FormInput from "../Components/FormInput.jsx";
import ButtonSubmit from "../Components/ButtonSubmit.jsx";
import Email from "../assets/icons/email.svg";

export default function ForgotPassword() {
  return (
    <main className="flex justify-center bg-white md:bg-primary items-center min-h-screen md:bg-[radial-gradient(circle,_#7B9BFF_0%,_#3868FD_72%)]">
      <div className="w-125 h-100 bg-white p-7 rounded-xl">
        <LogoEWallet />
        <Heading
          title="Fill Out Form Correctly 👋"
          description="We will send new pasword to your email"
        />
        <form>
          <FormInput
            label="Email"
            icon={Email}
            type="text"
            placeholder="Enter Your Emails"
          />
          <ButtonSubmit label="Submit" />
        </form>
      </div>
    </main>
  );
}
