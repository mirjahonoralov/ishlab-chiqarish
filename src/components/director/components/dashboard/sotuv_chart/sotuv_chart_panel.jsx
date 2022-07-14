import { fontSize } from '@mui/system';
import {  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend ,  ComposedChart,
  Line,
  Area ,
  ResponsiveContainer,
  LabelList,} from 'recharts';

  import "./sotuv_chart.css"
  import Sotuv_chart_top from './sotuv_chart_top';
  import Sotuv_chart_category from './sotuv_chart_category';
import { useState } from 'react';
function Sotuv_chart_panel() {

            const data5 = [
              {
                name: 134.392,
                pv: 134.392,
              },
              {
                name: 734.450,
                pv: 734.450,
              },
              {
                name: 634.30,
                pv: 634.30,
              },
              {
                name: 834.356,
                pv: 834.356,
              },
              {
                name: 134.43,
                pv: 134.43,
              },
              {
                name: 334.35,
                pv: 334.35,
              },
              {
                name: 234.53,
                pv: 234.53,
              },
              {
                name:634.30,
                pv: 634.30,
              },
              {
                name: 734.450,
                pv: 734.450,
              },
              {
                name: 724.35,
                pv: 724.35,
              },
              {
                name: 934.531,
                pv: 934.531,
              },
              {
                name: 134.54,
                pv: 134.54,
              },
              {
                name: 474.65,
                pv: 474.65,
              },
              {
                name: 329.102,
                pv: 329.102,
              },
              {
                name: 504.650,
                pv: 504.650,
              },
              {
                name: 234.430,
                pv: 234.430,
              },
              {
                name: 234.710,
                pv: 234.710,
              },
              
            ]
            const getIntroOfPage = (label) => {
              if (label === 134.392) {
                return "Mahsulot nomi";
              } if (label === 34.234) {
                return 'Mahsulot nomi';
              } if (label === 834.356) {
                return 'Mahsulot nomi';
              } if (label === 734.450) {
                return 'Mahsulot nomi';
              } if (label === 634.30) {
                return 'Mahsulot nomi';
              } if (label === 734.450) {
                return 'Mahsulot nomi';
              }
              if (label === 834.356) {
                return 'Mahsulot nomi';
              }
              if (label === 934.531) {
                return 'Mahsulot nomi';
              }
              if (label === 134.54) {
                return 'Mahsulot nomi';
              }
              if (label === 474.65) {
                return 'Mahsulot nomi';
              }
              if (label === 329.102) {
                return 'Mahsulot nomi';
              }
              if (label === 504.650) {
                return 'Mahsulot nomi';
              }
              if (label === 234.430) {
                return 'Mahsulot nomi';
              }
              if (label === 234.710) {
                return 'Mahsulot nomi';
              }
              if (label === 724.35) {
                return 'Mahsulot nomi';
              }
              if (label ===  334.35) {
                return 'Mahsulot nomi';
              }
              if (label ===  234.53) {
                return 'Mahsulot nomi';
              }
              if (label ===  134.43) {
                return 'Mahsulot nomi';
              }
            };

            const dataCategory = [
              {name : "Top 20 kategoriya " , id : 1},
              {name : "To’p 20 Mijozlar" , id : 1}
            ]

            const CustomTooltip2 = ({ active, payload, label }) => {
              if (active) {
                return (
                  <div className="custom-tooltip2">
                    <p className="intro2">{getIntroOfPage(label)}</p>
                    <p className="label2">{`${payload[0].value}`}</p>
                  </div>
                );
              }
            
              return null;
            };
            // const formatLabel = (value) => (value !== ' ' ? `${value}%` : ' ');
            let [posData, setposData] = useState({});
    return(
        <>
        <Sotuv_chart_top/>

            <div className='Dashboard_charts__center'>
            {dataCategory.map(elem =>(  
          <Sotuv_chart_category key={elem.id} dataCategory={elem} />
        ))}
          <hr  className='headring_sotuv_dashboard_headring'/>
            </div>
      <div className='Dashboard_charts__bottom'>
      <span className='Dashboard_charts__center-left--span'>TOP 20 maxsulot </span>
      <BarChart
      width={1100}
      height={312}
      data={data5}
      margin={{
        top: 20,
        right: 50,
        left: 30,
        bottom: 5
      }}
    >
      <CartesianGrid  fill="#fff"   strokeDasharray="0 1" />
      <XAxis dataKey="name" tickLine={false} axisLine={false} />
      <Tooltip content={CustomTooltip2} cursor={{fill: '#fff'}}  
       position={{ x: posData.x, y: posData.y - 50 }}
     />
      <Legend />
      <Bar         onMouseOver={(data5) => {
          setposData(data5);
        }} radius={20} barSize={16} yAxisId="left" dataKey="pv"  background={{fill: "#FFF"}}    fill="#2896719c"   />
    </BarChart>
      </div>
      </>
    )
}
export default Sotuv_chart_panel