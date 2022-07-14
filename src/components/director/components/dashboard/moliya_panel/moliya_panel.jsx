import { useRef } from "react"  
    import Moliya_table from "../../../../common/moliya_table/moliya_table";
    import Moliya_income from "./moliya_income";
    import Moliya_indebtedness from "./moliya_indebtedness";
    import Moliya_category from "./moliya_category";
    import Moliya_Flow from "./moliya_flow";
    import "./moliya.css"
  function Moliya_panel() {
      const dataIncome = [
        {name : "Sotuv" , id :1},
        {name : "Daromad" , id :2}
      ]
      const dataIndebt =[
        {name : "Umumiy haqdorlik bo’yicha" , id :1},
        {name: "May oyi, 2022 sanasi bo’yicha haqdorlik", id :2}
      ]
    return(
        <>
            <div className="dashboard_finance">
                    <div className="dashboard_finance__top">

                  {dataIncome.map(elem =>(
                    <Moliya_income key={elem.id} dataIncome={elem} />
                  ))}

                    </div>

                    <div className="Moliya_indebtedness">
                                  {dataIndebt.map(elem =>(
                                    <div className="dataIndebt_class">
                    <Moliya_indebtedness key={elem.id} dataIndebt={elem} />
                                    </div>
                  ))}
                              </div>
            </div>
            <Moliya_category/>
            <div className="Finance_center_table">
              <Moliya_table/>
            </div>
                  <Moliya_Flow/>
        </>
    )
}
export default Moliya_panel