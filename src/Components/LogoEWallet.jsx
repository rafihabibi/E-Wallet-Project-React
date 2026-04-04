import IconWallet from "../assets/icons/Money-Wallet.svg"

function LogoEWallet() {
    return(
        <div className="flex items-center gap-2 text-blue-500 font-bold">
            <img src={IconWallet} alt="logo wallet"/>
            <p className="">E-Wallet</p>
        </div>
    );
}

export default LogoEWallet
