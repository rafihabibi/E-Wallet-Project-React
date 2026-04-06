import IconWallet from "../assets/icons/Money-Wallet.svg";

function LogoEWallet({teksColor = "text-blue-600", teksFont = "font-base"}) {
    return(
        <div className="flex items-center gap-2">
            <img src={IconWallet} alt="logo wallet"/>
            <p className={`${teksColor} ${teksFont}`}>E-Wallet</p>
        </div>
    );
}

export default LogoEWallet;
