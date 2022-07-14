import Moliya_table_map from "./moliya_table_map"
import "./../../css/style.css"
const Moliya_table_top =  ({data_table})=> {
    const jamihisob = [
        {
            usz : 18.298988800,
            usd : 16_400,
            foiz : 100,
        }
    ]
    return(
        <>
        <div className="table_about">
            <p className="table_about_padding">{data_table.name}</p>
            <p className="table_about_padding2">May oyi, 2022</p>
        </div>
        <table className="table_bottom"  border="1">
        <thead className="table_top">
        <tr className="table_tr_top">
        <th className="table_tr_top_th">Xarajat</th>
                    <th className="table_tr_top_th">UZS</th>
                    <th className="table_tr_top_th">USD</th>
                    <th className="table_tr_top_th">Umumiy xarajat ulishi %</th>
                </tr>
        </thead>
                {jamihisob && jamihisob.map(e => <>
                <tbody> 
                <tr className="table_tr_bottom"  >
                <th className="table_bottom_th" style={{
                    borderTopLeftRadius : "7px" , 
                    borderBottomLeftRadius : "7px",
                        }}>Jami</th>
                <th className="table_bottom_th">{e.usz}</th>
                <th className="table_bottom_th">{e.usd}$</th>
                <th className="table_tr_bottom_th_hug" style={{
                    borderTopRightRadius : "7px" , 
                    borderBottomRightRadius : "7px",
                        }}><p className="table_tr_bottom_th_hug_padding">{e.foiz}%</p></th>
                </tr>
            <hr  className="headering-table"/>
    <Moliya_table_map/>
            </tbody>
            <hr  className="headering-table"/>

                </>)}

</table>
        </>
    )
}
export default Moliya_table_top