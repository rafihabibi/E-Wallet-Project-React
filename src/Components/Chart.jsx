import { useState } from "react";

export default function IncomeChart() {
    const [chartType, setChartType] = useState("Income");
    const incomeData = [
        { day: 'Sat', value: 15000 },
        { day: 'Sun', value: 1000 }, 
        { day: 'Mon', value: 93000 }, 
        { day: 'Tue', value: 31000 },
        { day: 'Wed', value: 45000 },
        { day: 'Thu', value: 25000 },
        { day: 'Fri', value: 16000 },
    ];

    const DataChart = [
        { day: 'Sat', value: 20000 },
        { day: 'Sun', value: 1000 }, 
        { day: 'Mon', value: 100000 }, 
        { day: 'Tue', value: 80000},
        { day: 'Wed', value: 67000 },
        { day: 'Thu', value: 21000 },
        { day: 'Fri', value: 9000 },
    ];

    const MAX_VALUE = 100000;
    const activeData = chartType === "Income" ? incomeData : DataChart;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-[#EAEAEA] p-6 w-full">
            
            <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-xl text-[#3A3D42]">Income Chart</h3>
                
                <div className="flex items-center gap-3">
                    <select name="days" className="bg-[#F5F5F5] rounded-lg px-4 py-2 flex items-center gap-2 text-sm text-black">
                        <option value="7"> 7 Days</option>

                    </select>
                    <select name="charType" className="bg-[#F5F5F5] rounded-lg px-4 py-2 flex items-center gap-2 text-sm text-black" onChange={(e) => setChartType(e.target.value)} value={chartType}>
                        <option value="Income" >income</option>
                        <option value="Expense">expense</option>
                    </select>
                </div>
            </div>

            <div className="relative h-65">  
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-1 text-sm text-[#7A7886] z-10 pr-2">
                    <span>100.000+</span>
                    <span>75.000</span>
                    <span>50.000</span>
                    <span>25.000</span>
                    <span>0</span>
                </div>

                <div className="absolute inset-0 flex flex-col justify-between pl-16 z-0">
                    <div className="w-full border-t border-dashed border-[#EAEAEA]" />
                    <div className="w-full border-t border-dashed border-[#EAEAEA]" />
                    <div className="w-full border-t border-dashed border-[#EAEAEA]" />
                    <div className="w-full border-t border-dashed border-[#EAEAEA]" />
                    <div className="w-full border-b border-[#EAEAEA]" /> 
                </div>

                <div className="ml-16 h-full flex items-end justify-between px-4 z-10 relative">
                    {activeData.map((data, index) => {
                        const barHeightPercentage = (data.value / MAX_VALUE) * 100;
                        
                        return (
                            <div key={index} className="flex-1 flex flex-col items-center gap-4 h-full relative group justify-end">
                                <div 
                                    className="w-8 md:w-10 bg-primary rounded-t-lg transition-all duration-300"
                                    style={{ height: `${barHeightPercentage}%` }} 
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="ml-16 flex items-center justify-between px-4 mt-2 text-sm text-[#7A7886]">
                {activeData.map((data, index) => (
                    <span key={index} className="flex-1 text-center">{data.day}</span>
                ))}
            </div>

        </div>
    );
}