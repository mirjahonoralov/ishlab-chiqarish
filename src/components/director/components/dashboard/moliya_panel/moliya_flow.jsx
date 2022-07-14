import { PieChart, Pie, Legend, Tooltip ,Cell ,    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,}  from "recharts";
  import "./moliya.css"

const Moliya_Flow = () =>{
    
    const CustomTooltip3 = ({ active, payload, label }) => {
        if (active) {
          return (
            <div className="custom-tooltip3">
              <p className="label3"></p>
              <div className="chart_div__sum" >
                <p className="label3">Xarajat</p>
              <p className="label3_value1">{`${payload[0].value}$`}</p>       
              </div>
              <div className="chart_div__sum">
                <p className="label3">Foyda</p>
              <p className="label3_value2">{`${payload[1].value}$`}</p>
              </div>
              <div className="chart_div__sum">
                <p className="label3">Haqdorlik</p>
              <p className="label3_value3">{`${payload[2].value}$`}</p>
              </div>
            </div>
          );
        }
      
        return null;
      };
  
    const data_finance = [
        {
          name: 1,
          haqdorlik: 5000,
          Foyda: 1000,
          Xarajat: 7400
        },
        {
          name: 2,
          haqdorlik: 6000,
          Foyda: 7098,
          Xarajat: 2110
        },
        {
          name: 3,
          haqdorlik: 9500,
          Foyda: 12000,
          Xarajat: 4290
        },
        {
          name: 4,
          haqdorlik: 5780,
          Foyda: 5908,
          Xarajat: 9000
        },
        {
          name: 5,
          haqdorlik: 2890,
          Foyda: 4800,
          Xarajat: 5181
        },
        {
          name: 6,
          haqdorlik: 3390,
          Foyda: 4800,
          Xarajat: 6500
        },
        {
          name: 7,
          haqdorlik: 9890,
          Foyda: 2200,
          Xarajat: 5400
        },
        {
            name: 8,
            haqdorlik: 9790,
            Foyda: 7000,
            Xarajat: 4200
          },
          {
            name: 9,
            haqdorlik: 5490,
            Foyda: 5400,
            Xarajat: 7300
          },
          {
            name: 10,
            haqdorlik: 6790,
            Foyda: 1700,
            Xarajat: 5300
          }
          ,
          {
            name: 11,
            haqdorlik: 6490,
            Foyda: 7500,
            Xarajat: 4200
          }
          ,
          {
            name: 12,
            haqdorlik: 4390,
            Foyda: 7500,
            Xarajat: 7500
          },
          {
            name: 13,
            haqdorlik: 4490,
            Foyda: 3300,
            Xarajat: 4300
          }
          ,
          {
            name: 14,
            haqdorlik: 3590,
            Foyda: 2300,
            Xarajat: 5600
          }
          ,
          {
            name: 15,
            haqdorlik: 4390,
            Foyda: 5400,
            Xarajat: 7500
          }
          ,
          {
            name: 16,
            haqdorlik: 5490,
            Foyda:7600,
            Xarajat: 6500
          }
          ,
          {
            name: 17,
            haqdorlik: 9490,
            Foyda: 7300,
            Xarajat: 3100
          }
          ,
          {
            name: 18,
            haqdorlik: 5490,
            Foyda: 6300,
            Xarajat: 7400
          }
          ,
          {
            name: 19,
            haqdorlik: 5290,
            Foyda: 7400,
            Xarajat: 3400
          }
          ,
          {
            name: 20,
            haqdorlik: 6590,
            Foyda: 7600,
            Xarajat:3200
          }
          ,
          {
            name: 21,
            haqdorlik: 5490,
            Foyda: 6500,
            Xarajat: 7600
          }
          ,
          {
            name: 22,
            haqdorlik: 6590,
            Foyda: 8400,
            Xarajat: 5400
          }
          ,
          {
            name: 23,
            haqdorlik: 5490,
            Foyda: 7600,
            Xarajat: 4500
          }
          ,
          {
            name: 24,
            haqdorlik: 6590,
            Foyda: 7600,
            Xarajat: 9000
          }
          ,
          {
            name: 25,
            haqdorlik: 5490,
            Foyda: 6500,
            Xarajat: 7500
          }
          ,
          {
            name: 26,
            haqdorlik: 6540,
            Foyda: 6500,
            Xarajat: 4200
          },
          {
            name: 27,
            haqdorlik: 4390,
            Foyda: 6500,
            Xarajat: 3200
          }
          ,
          {
            name: 28,
            haqdorlik: 5490,
            Foyda: 6700,
            Xarajat: 6500
          }
          ,
          {
            name: 29,
            haqdorlik: 3490,
            Foyda: 6500,
            Xarajat: 4300
          }
          ,
          {
            name: 30,
            haqdorlik: 6500,
            Foyda: 5400,
            Xarajat: 2400
          }
          ,
          {
            name: 31,
            haqdorlik: 4390,
            Foyda: 6500,
            Xarajat: 5400
          }
      ];
    return(
        <div className="Finance_bottom">
        <div className="Finance_bottom_top">
                <h3 className="Finance_bottom_top-heading">Pul aylanma</h3>
                <ul className="Finance_bottom_top-list">
                    <li className="Finance_bottom_top-list-item1">Haqdorlik</li>
                    <li className="Finance_bottom_top-list-item2">Foyda</li>
                    <li className="Finance_bottom_top-list-item3">Xarajat</li>
                </ul>
        </div>
      <LineChart
width={1100}
height={300}
data={data_finance}
margin={{
  top: 5,
  right: 30,
  left: 20,
  bottom: 5
}}
>
<CartesianGrid strokeDasharray="0 1" />
<XAxis dataKey="name" axisLine={false} tickLine={false} />
<Tooltip  content={CustomTooltip3}           position={{
      y: 0
    }} />
<Legend />
<Line
  strokeWidth={2}
  type="monotone"
  dataKey="haqdorlik"
  stroke="#FF5900"
  activeDot={{ r: 8 }}
/>
      <Line
  strokeWidth={2}
  type="monotone"
  dataKey="Foyda"
  stroke="#00B1B9"
  activeDot={{ r: 8}}
/>
  
<Line  strokeWidth={2} type="monotone" dataKey="Xarajat" stroke="#289672" />
</LineChart> 
      </div>
    )
}
export default Moliya_Flow