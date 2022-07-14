import { useState } from 'react';
import {  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend ,  ComposedChart,
    Line,
    Area ,
    ResponsiveContainer,
    LabelList,} from 'recharts';
    import "./sotuv_chart.css"
function Sotuv_chart_top() {
    const data = [
        {
          name: "Yan",
          uv: 4000,
          dollar: 2400.12,
          amt: 2400.12
        },
        {
          name: "Fev",
          uv: 3000,
          dollar: 1398.23,
          amt: 2210
        },
        {
          name: "Mar",
          uv: 2000,
          dollar: 980.12,
          amt: 2290
        },
        {
          name: "Apr",
          uv: 2780,
          dollar: 3908.13,
          amt: 2000
        },
        {
          name: "May",
          uv: 1890,
          dollar: 4800,
          amt: 2181
        },
        {
          name: "Iyun",
          uv: 2390,
          dollar: 3800,
          amt: 2500
        },
        {
          name: "Iyul",
          uv: 3890,
          dollar: 4300,
          amt: 2100
        },
        {
          name: "Aug",
          uv: 2790,
          dollar: 3300,
          amt: 2100
        },
        {
          name: "Sen",
          uv: 3390,
          dollar: 8300,
          amt: 2100
        },
        {
          name: "Okt",
          uv: 3490,
          dollar: 2300,
          amt: 2100
        },
        {
          name: "Noy",
          uv: 3490,
          dollar: 7300,
          amt: 2100
        },
        {
          name: "Dek",
          uv: 3490,
          dollar: 4300,
          amt: 2100
        }
      ];
        const data2 = [
            {
              name: 534,
              pv: 534,
            },
            {
              name: 234,
              pv: 234,
            },
            {
              name: 334,
              pv: 334,

            },
            {
              name: 634.30,
              pv: 634,

            },
            {
              name: 734,
              pv: 734,

            },
            {
              name: 749,
              pv: 734,

            },
            {
              name: 679,
              pv: 679,

            },
            {
              name: 524,
              pv: 524,

            },
            {
              name: 334,
              pv: 234,

            },
            {
              name: 434,
              pv: 434,

            },
            {
              name: 334,
              pv: 334,

            },
            {
              name: 234,
              pv: 234.39,

            }];
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
      let [posData, setposData] = useState({});
    return(
        <>
             <div className="Dashboard_charts__top">
          <div className="Dashboard_chart__left">
            <div className='Dashboard_chart__left-left'>
                <span className='Dashboard_chart__left--span'>Foyda</span>
                <span className='Dashboard_chart__left--span-green'>Jadvalni ko’rish</span>
            </div>
            <ResponsiveContainer
            width="100%"
            height={272}
            margin={{ top: 0, bottom: 0 }}
          >
          <BarChart className='BarChart_foydali'
      data={data}
      margin={{
        top: 20,
        right: 10,
        left: 10,
        bottom: 5
      }}
    >

      <CartesianGrid  fill="#fff"   strokeDasharray="0 1" />
      
      <XAxis  dataKey="name"   tickLine={false} axisLine={false} />
      <Tooltip dataKey="sum" content={<CustomTooltip />}  cursor={{fill: '#fff'}}  
       position={{ x: posData.x, y: posData.y - 50 }} />
      <Legend />
      <Bar radius={20} onMouseOver={(data) => {
          setposData(data);
        }}  barSize={16} yAxisId="left" dataKey="dollar"  background={{fill: "#FFF"}}   fill="rgba(40, 150, 114, 0.3)" width={20}  />
    </BarChart>
    </ResponsiveContainer>
          </div>
          <div className='Dashboard_chart__right'>
          <span className='Dashboard_chart__right--span'>TOP 10 joylashuv</span>
          <ResponsiveContainer
            height={272}
            margin={{ top: 0, bottom: 0 }}
          >
    <BarChart className='BarChart_TOP'
      data={data2}
      margin={{ left: 0, right: 0  , top : 25}}
    >
      <CartesianGrid  fill="#fff"   strokeDasharray="0 1" />
      <XAxis dataKey="name" fill='black' tickLine={false} axisLine={false} />

      <Legend />
      <Bar radius={20} barSize={16}  yAxisId="left" dataKey="pv"  background={{fill: "#FFF"}}   fill="#289672"  />
    </BarChart>
    </ResponsiveContainer>
    </div>
    <hr  className='headring_sotuv_dashboard_headring'/>
      </div>
        </>
    )
}
export default Sotuv_chart_top