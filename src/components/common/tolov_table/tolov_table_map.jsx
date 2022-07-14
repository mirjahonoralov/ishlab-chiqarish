import "./../../css/style.css"
const Tolov_table_map =  ({data_table})=> {
    const data = [
        {
            id : 1,
            mahsulot : "Valyuta sotib olish",
            usz : 6.9,
            usd : 8.45,
            harajat : 1.55,
        },
        {
            id : 2,
            mahsulot : "Valyuta sotib olish",
            usz : 6.9,
            usd : 8.45,
            harajat : 1.55,
        },
        {
            id : 3,
            mahsulot : "Valyuta sotib olish",
            usz : 6.9,
            usd : 8.45,
            harajat : 1.55,
        },
        {
            id : 4,
            mahsulot : "Valyuta sotib olish",
            usz : 6.9,
            usd : 8.45,
            harajat : 1.55,
        },
        {
            id : 5,
            mahsulot : "Valyuta sotib olish",
            usz : 6.9,
            usd : 8.45,
            harajat : 1.55,
        },
        {
            id : 6,
            mahsulot : "Valyuta sotib olish",
            usz : 6.9,
            usd : 8.45,
            harajat : 1.55,
        },
        {
            id : 7,
            mahsulot : "Valyuta sotib olish",
            usz : 6.9,
            usd : 8.45,
            harajat : 1.55,
        },
        {
            id : 8,
            mahsulot : "Valyuta sotib olish",
            usz : 16.9,
            usd : 8.45,
            harajat : 1.55,
        },      
        {
            id : 9,
            mahsulot : "Valyuta sotib olish",
            usz : 16.9,
            usd : 8.45,
            harajat : 1.55,
        },
        {
            id : 10,
            mahsulot : "Valyuta sotib olish",
            usz : 16.9,
            usd : 8.45,
            harajat : 1.55,
        }
    ]
    return(
        <>
                {
                    data && data.map(e => <>
                        <tr className="about_tr" > 
                        <th className="about_tr_th" style={{borderLeft:"2px solid #cdcdcd",borderTop: "2px solid #cdcdcd" , borderBottom: "2px solid #cdcdcd",borderTopLeftRadius: "7px" , borderBottomLeftRadius: "7px"}}>{e.id}</th>
                            <th className="about_tr_th" style={{borderTop: "2px solid #cdcdcd" , borderBottom: "2px solid #cdcdcd"}}>{e.mahsulot}</th>
                            <td className="about_tr_td"  style={{borderTop: "2px solid #cdcdcd" , borderBottom: "2px solid #cdcdcd"}}>{e.usz}</td>
                            <td className="about_tr_td" style={{borderTop: "2px solid #cdcdcd" , borderBottom: "2px solid #cdcdcd" }}>{e.usd}</td>
                            <td className="about_tr_td_table" style={{borderTop: "2px solid #cdcdcd" , borderBottom: "2px solid #cdcdcd" , borderRight: "2px solid #cdcdcd" , borderTopRightRadius: "7px" , borderBottomRightRadius: "7px"}}><p className="tolov_tr_td_padding">-{e.harajat}</p></td>
                        </tr>
                            <hr  className="headering-table"/>
                    </>)
                }

        </>
    )
}
export default Tolov_table_map