import Tolov_table_map from "./tolov_table_map"
import "./../../css/style.css"
const Tolov_table_top =  ({data_table})=> {
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
        <table className="table_top">
            <thead>
            <tr className="tolov_tr_top">
        <th className="tolov_tr_top_th">№</th>
                    <th className="table_tr_top_th">Pul aylanma</th>
                    <th className="table_tr_top_th">Kirim</th>
                    <th className="table_tr_top_th">Chiqm</th>
                    <th className="table_tr_top_th">Aylanma</th>
    
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
                <th className="table_bottom_th">{e.usd}$</th>
                <th className="table_bottom_th"  style={{
                    borderTopRightRadius : "7px" , 
                    borderBottomRightRadius : "7px",
                        }}><p className="tolov_tr_bottom_th_hug_padding">{e.usd}$</p></th>
            </tr>
            <hr  className="headering-table"/>
            <Tolov_table_map/>

                    </tbody>
            <hr  className="headering-table"/>

                </>)}

</table>
        </>
    )
}
export default Tolov_table_top