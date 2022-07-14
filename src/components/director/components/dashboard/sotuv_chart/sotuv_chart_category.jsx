
import {  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend ,  ComposedChart,
    Line,
    Area ,
    ResponsiveContainer,
    LabelList,} from 'recharts';

function Sotuv_chart_category({dataCategory}) {
    const data1 = [
        {
          name: '',
          count: ' ',
        },
        {
          name: "1.Kategoriya",
          count:514.154
        },
        {
          name: "2.Kategoriya",
          count :283.967
        },
        {
          name: "3.Kategoriya",
          count :353.212
        },
        {
          name: "4.Kategoriya",
          count :200.605
        },
        {
          name: "5.Kategoriya",
          count :105.371
        },
        {
          name: "6.Kategoriya",
          count :362.591
        },
        {
          name: "7.Kategoriya",
          count :105.371
        },
        {
          name: "8.Kategoriya",
          count :792.780
        },
        {
          name: "9.Kategoriya",
          count :606.005
        },
        {
          name: "10.Kategoriya",
          count :596.305
        },
        {
          name: "11.Kategoriya",
          count :439.618
        },
        {
          name: "12.Kategoriya",
          count :268.194
        },              {
          name: "13.Kategoriya",
          count :384.307
        },              {
          name: "14.Kategoriya",
          count :207.528
        },           
        {
          name: "15.Kategoriya",
          count :439.618
        },
        {
          name: "16.Kategoriya",
          count :384.307
        },
        {
          name: "17.Kategoriya",
          count :299.202
        },
        {
          name: "18.Kategoriya",
          count :209.528
        },
        {
          name: "19.Kategoriya",
          count: 268.194
        },
        {
          name: "20.Kategoriya",
          count: 207.528
        }
      ];
      const data4 = [
        {
          name: '',
          count: ' ',
        },
        {
          name:"Mijoz 1",
          count: 240.12
        },
        {
          name:"Mijoz 2",
          count: 398.23
      },
        {
          name:"Mijoz 3",
          count: 800.34
      },
        {
          name:"Mijoz 4",
          count: 908.13
      },
        {
          name:"Mijoz 5",
          count: 800.23
      },
        {
          name:"Mijoz 6",
          count: 300.54
      },
        {
          name:"Mijoz 7",
          count: 300.346
      },
        {
          name:"Mijoz 8",
          count: 700.54
      },
        {
          name:"Mijoz 9",
          count: 200.34
      },
        {
          name: "Mijoz 10",
          count: 500.34
      },
        {
          name: "Mijoz 11",
          count: 330.14
      },
        {
          name: "Mijoz 12",
          count: 730.54
      },              {
          name: "Mijoz 13",
          count: 830.357,
        },              {
          name: "Mijoz 14",
          count: 230.357,
        },           
        {
          name: "Mijoz 15",
          count: 230.357,
        },
        {
          name: "Mijoz 16",
          count: 930.357,
        },
        {
          name: "Mijoz 17",
          count: 430.357,
        },
        {
          name: "Mijoz 18",
          count: 390.357,
        },
        {
          name: "Mijoz 19",
          count: 1800.357,
        },
        {
          name: "Mijoz 20",
          count: 1000.357,
        }
      ];
        return(
          <>
            <div className='Dashboard_charts__center-left '>
              <span className='Dashboard_charts__center-left--span'>{dataCategory.name}</span>
              <ResponsiveContainer
            width="95%"
            height={1017}
            margin={{ top: 100, bottom: 0 }}
          >
            <BarChart
              className="BarChart_categoriya"
              data={data1}
              layout="vertical"
              margin={{ left: 40, right: 0 }}
            >
              <XAxis hide width={"45%"} axisLine={false} type="number" />
              <YAxis
                axisLine={false}
                dataKey="name"
                yAxisId={0}
                minTickGap={0}
                tickLine={false}
                type="category"
                width={65}
              />
              <YAxis
              className='countery'
                axisLine={false}
                type="category"
                dataKey="count"
                tickFormatter={(value) => value.toLocaleString()}
                orientation="right"
                yAxisId={1}
                tick={{ marginLeft: "20px" }}
                mirror
                tickLine={false}
              />
              <Bar
                dataKey="count"
                barSize={16}
                radius={20}
                fill="rgba(40, 150, 114, 0.3)"
              >
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        </>
        )
}
export default Sotuv_chart_category