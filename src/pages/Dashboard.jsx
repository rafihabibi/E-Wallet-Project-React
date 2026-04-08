import Header from '../Components/Header.jsx';
import Sidebar from '../Components/SideBar.jsx';
import CardAmount from '../Components/CardAmount.jsx';
import Balance from '../assets/icons/balance.svg';
import ArrowRise from '../assets/icons/ArrowRise.svg';
import Income from '../assets/icons/income.svg';
import ArrowDown from '../assets/icons/arrowDown.svg';
import Expanse from '../assets/icons/expanse.svg';
import FastService from '../Components/FastService.jsx';
import Profile1 from '../assets/profile1.svg';
import Ghaluh from '../assets/profileGaluh.svg'
import Profile2 from '../assets/profile2.svg';
import TransactionItem from '../Components/TransactionHistory.jsx';
import Chart from '../Components/Chart.jsx';
import { Link } from 'react-router';


function Dashboard() {
    const transaction = [
        {id: 1, image: Ghaluh, name:"Ghaluh", detail:"Transfer", amount: "+Rp.50.000", isIncome: true},
        {id: 2, image: Profile2, name:"Flyod Miles", detail:"Send", amount:"-Rp.50.000", isIncome: false},
        {id: 3, image: Profile1, name:"Ujang", detail:"Transfer", amount: "+Rp.50.000", isIncome: true},
        {id: 4, image: Profile2, name:"Flyod Miles", detail:"Send", amount:"-Rp.50.000", isIncome: false}, 
        {id: 5, image: Profile1, name:"Robert Fox", detail:"Transfer", amount: "+Rp.50.000", isIncome: true},
    ];
    return (
        <div>
            <Header />
            <div className="flex">
                <Sidebar className="hidden md:block" activePage="dashboard" />
                <main className="flex-1 p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                        
                        <div className="flex-1 flex flex-col gap-6">
                            <div className="flex flex-col md:flex-row gap-4">
                                <CardAmount icon={Balance} label="Balance" rp="Rp.120.000" persent="+2%" iconArrow={ArrowRise} history="3 Days Ago" />
                                <CardAmount icon={Income} label="Income" rp="Rp.2.100.000" persent="+11.01%" iconArrow={ArrowRise} history="" />
                                <CardAmount icon={Expanse} label="Expense" rp="Rp.120.000" persent="-5.06%" iconArrow={ArrowDown} history="" />
                            </div>
                            <FastService />
                            <div className="bg-gray-100  rounded-md ">
                                <Chart/>
                            </div>
                        </div>

                        <div className="w-full lg:w-87 bg-white border border-[#EAEAEA] rounded-md p-5">
                            <h3 className="font-semibold text-lg mb-4">Transaction History</h3>
                        {transaction.map((item) => (
                            <TransactionItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            detail={item.detail}
                            amount={item.amount}
                            isIncome={item.isIncome}/>
                        ))}
                        
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;