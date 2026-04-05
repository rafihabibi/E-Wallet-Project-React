import IconWallet from "../assets/icons/Money-Wallet.svg";

function LogoEWallet({teksColor = "text-blue-600"}) {
    return(
        <div className="flex items-center gap-2">
            <img src={IconWallet} alt="logo wallet"/>
            <p className={teksColor}>E-Wallet</p>
        </div>
    );
}

export default LogoEWallet;
