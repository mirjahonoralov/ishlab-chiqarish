import React from "react";
import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from "recharts"; 
import "./Mijozlar_tahlili.css"

const COLORS = ["#289672" ,"#E87F45", "#0D7E7E" ];
const data = [
    {
      name: "X 10 ",
      uv: "A 10",
      pv: 2400,
      amt: 2400
    },
    {
      name: "X 10 ",
      uv: "B 20",
      pv: 1398,
      amt: 2210
    },
    {
      name: "C 30",
      uv: "C 30",
      pv: 9800,
      amt: 2290
    }
  ];
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  };
function Mijozlar_tahlili_Chart() {
  let [posData, setposData] = useState({});
    return(
        <>
            <div className="mijozlar_tahlili_chart_left">
                <h3 className="mijozlar_tahlili_chart_left_heading">ABC taxlili savdo bo’yicha</h3>
            <div className="mijozlar_tahlili_chart_left_chart">
            <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid fill="#fff"  strokeDasharray="6  6" />
      <XAxis tickLine={false} axisLine={false} dataKey="name" />
      <YAxis tickLine={false} axisLine={false} />
      <Tooltip  content={<CustomTooltip />} position={{ x: posData.x, y: -25 }}   />
      <Legend  radius={[20, 20, 0, 0]} onMouseOver={(data) => {
          setposData(data);
        }}/>
      <Bar dataKey="pv" fill="#8884d8" radius={[20, 20, 0, 0]}  >
      {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
          </Bar>
    </BarChart>
            </div>
            </div>
            <div className="mijozlar_tahlili_chart_right">
            <h3 className="mijozlar_tahlili_chart_left_heading">ABC taxlili savdo bo’yicha</h3>

<div className="mijozlar_tahlili_chart_right_chart">
<BarChart
width={500}
height={300}
data={data}
margin={{
top: 5,
right: 30,
left: 20,
bottom: 5
}}
>
<CartesianGrid strokeDasharray="6 6" />
<XAxis dataKey="name" tickLine={false} axisLine={false} />
<YAxis tickLine={false} axisLine={false} />
<Tooltip content={<CustomTooltip />} position={{ x: posData.x, y: -25 }}  cursor={{fill: '#ffffff00'}} />
<Legend />
<Bar dataKey="pv" fill="#8884d8" background={{fill : "#ffffff00"}} radius={[20, 20, 0, 0]} >
{data.map((entry, index) => (
    <Cell
      key={`cell-${index}`}
      fill={COLORS[index % COLORS.length]}
    />
  ))}
</Bar>
</BarChart>
</div>
            </div>
        </>
    )
}
export default Mijozlar_tahlili_Chart