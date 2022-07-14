import { PieChart, Pie, Legend, Tooltip ,Cell ,    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,}  from "recharts";
  import "./moliya.css"
    const Moliya_category = ()=>{
    
    const data01 = [
        { name: "Tayyor xomashyo", value: 30 },
        { name: "Tayyor", value: 30 },
        { name: "Yarim tayyor", value: 30 },
      ];
      const COLORS = ["#12A474" ,"#0D6246 ", "#22936E" ];
      const data02 = [
        { name: "Tayyor xomashyo", value: 30 },
        { name: "Tayyor", value: 30 },
        { name: "Yarim tayyor", value: 30 },
      ];
      const COLORS2 = ["#35DCA5" ,"#02AB73", "#12C188" ];
    return(
        <>
                                        <div className="dashboard_category">
                                <div className="dashboard_category_chart">
                                <h3 className="dashboard_category_chart_heading">Kategoriyalar foyda ulushi</h3>
                                <div className="dashboard_category_chart_about">
                                    <ul className="dashboard_category_chart_about_list">
                                        <li className="dashboard_category_chart_about_list-item1">Tayyor xomashyo</li>
                                        <li  className="dashboard_category_chart_about_list-item2">Tayyor</li>
                                        <li  className="dashboard_category_chart_about_list-item3">Yarim tayyor</li>

                                    </ul>
                                    <PieChart width={270} height={250}>
                    <Pie dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx={148}
                        cy={120}
                        outerRadius={110}
                        fill="#12A474"
                        label
                        
                    >
                                  {data01.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
                </Pie>
                    <Tooltip />
                    </PieChart>
                                </div>
                            </div>
                                <div className="dashboard_category_chart_left">
                                <h3 className="dashboard_category_chart_heading">Kategoriyalar sotuv ulushi</h3>
                                <div className="dashboard_category_chart_about">
                                    <ul className="dashboard_category_chart_about_list">
                                        <li className="dashboard_category_chart_about_list-item4">Tayyor xomashyo</li>
                                        <li  className="dashboard_category_chart_about_list-item5">Tayyor</li>
                                        <li  className="dashboard_category_chart_about_list-item6">Yarim tayyor</li>

                                    </ul>
                                    <PieChart width={270} height={250}>
                    <Pie dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx={148}
                        cy={120}
                        outerRadius={110}
                        fill="#12A474"
                        label
                        
                    >
                                  {data02.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS2[index % COLORS.length]}
                />
              ))}
                </Pie>
                    <Tooltip />
                    </PieChart>
                                </div>
                            </div>

                            </div>
        </>
    )
}
export default Moliya_category