/* eslint-disable react-hooks/static-components */
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function IncomeChart() {
  const [chartType, setChartType] = useState("Income");

  const incomeData = [
    { day: "Sat", value: 15000 },
    { day: "Sun", value: 1000 },
    { day: "Mon", value: 93000 },
    { day: "Tue", value: 31000 },
    { day: "Wed", value: 45000 },
    { day: "Thu", value: 25000 },
    { day: "Fri", value: 16000 },
  ];

  const expenseData = [
    { day: "Sat", value: 20000 },
    { day: "Sun", value: 1000 },
    { day: "Mon", value: 100000 },
    { day: "Tue", value: 80000 },
    { day: "Wed", value: 67000 },
    { day: "Thu", value: 21000 },
    { day: "Fri", value: 9000 },
  ];

  const activeData = chartType === "Income" ? incomeData : expenseData;

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-sm border border-[#EAEAEA]">
          <p className="font-bold text-[#3A3D42] mb-1">
            {payload[0].payload.day}
          </p>
          <p className="text-primary text-sm font-semibold">
            Rp {payload[0].value.toLocaleString("id-ID")}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#EAEAEA] p-6 w-full">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-bold text-xl text-[#3A3D42]">Income Chart</h3>

        <div className="flex items-center gap-3">
          <select
            name="days"
            className="bg-[#F5F5F5] rounded-lg px-4 py-2 flex items-center gap-2 text-sm text-[#3A3D42] outline-none cursor-pointer"
          >
            <option value="7">7 Days</option>
          </select>
          <select
            name="charType"
            className="bg-[#F5F5F5] rounded-lg px-4 py-2 flex items-center gap-2 text-sm text-[#3A3D42] outline-none cursor-pointer"
            onChange={(e) => setChartType(e.target.value)}
            value={chartType}
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
      </div>

      <div className="h-62 w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={activeData}
            margin={{ top: 10, right: 0, left: -15, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#EAEAEA"
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#7A7886", fontSize: 13 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#7A7886", fontSize: 13 }}
              tickFormatter={(value) =>
                value >= 1000 ? `${value / 1000}k` : value
              }
            />
            // eslint-disable-next-line react-hooks/static-components
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "#F9F9F9" }} />
            <Bar
              dataKey="value"
              fill="#2948FF"
              radius={[6, 6, 0, 0]}
              barSize={35}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
