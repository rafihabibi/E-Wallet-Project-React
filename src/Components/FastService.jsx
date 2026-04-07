import SendWhite from '../assets/icons/SendWhite.svg';
import TopUp from '../assets/icons/topUpFastService.svg';

export default function FastService() {
    return(
         <div className='px-4'>
                <div className="flex items-center justify-between bg-white border border-[#E8E8E8] rounded-md px-3 py-4">
                  <h4 className="text-[#0B132A] font-semibold text-base">Fast Service</h4>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 bg-primary hover:bg-primary text-white px-4 py-2 rounded-md text-sm cursor-pointer">
                        <img src={TopUp} alt="topup" className="w-4 h-4" /> Top Up </button>
                        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm cursor-pointer">
                        <img src={SendWhite} alt="transfer" className="w-4 h-4" />Transfer</button>
                    </div>
                </div>
                </div>
    );
}