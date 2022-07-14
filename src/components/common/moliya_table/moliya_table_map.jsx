import "./../../css/style.css"
const Moliya_table_map =  ({data_table})=> {
    const data = [
        {
            mahsulot : "Mahsulot 1",
            usz : 324552200,
            usd : 200,
            harajat : 10,
        },
        {
            mahsulot : "Mahsulot 2",
            usz : 424552200,
            usd : 300,
            harajat : 20,
        },
        {
            mahsulot : "Mahsulot 3",
            usz : 524552200,
            usd : 400,
            harajat : 30,
        },
        {
            mahsulot : "Mahsulot 4",
            usz : 624552200,
            usd : 500,
            harajat : 40,
        },
        {
            mahsulot : "Mahsulot 5",
            usz : 724552200,
            usd : 500,
            harajat : 50,
        },
        {
            mahsulot : "Mahsulot 6",
            usz : 824552200,
            usd : 600,
            harajat : 60,
        },
        {
            mahsulot : "Mahsulot 7",
            usz : 924552200,
            usd : 700,
            harajat : 70,
        },
        {
            mahsulot : "Mahsulot 8",
            usz : 1024552200,
            usd : 800,
            harajat : 80,
        },        {
            mahsulot : "Mahsulot 9",
            usz : 1124552200,
            usd : 900,
            harajat : 90,
        },
        {
            mahsulot : "Mahsulot 10",
            usz : 1224552200,
            usd : 1000,
            harajat : 98,
        }
    ]
    return(
        <>
                {
                    data && data.map(e => <>
                        <tr className="about_tr" > 
                            <th className="about_tr_th" style={{borderLeft:"2px solid #289672",borderTop: "2px solid #289672" , borderBottom: "2px solid #289672",borderTopLeftRadius: "7px" , borderBottomLeftRadius: "7px"}}>{e.mahsulot}</th>
                            <td className="about_tr_td"  style={{borderTop: "2px solid #289672" , borderBottom: "2px solid #289672"}}>{e.usz}</td>
                            <td className="about_tr_td" style={{borderTop: "2px solid #289672" , borderBottom: "2px solid #289672" }}>{e.usd}$</td>
                            <td className="about_tr_td_table" style={{borderTop: "2px solid #289672" , borderBottom: "2px solid #289672" , borderRight: "2px solid #289672" , borderTopRightRadius: "7px" , borderBottomRightRadius: "7px"}}><p className="about_tr_td_padding">{e.harajat}%</p></td>
                        </tr>
                            <hr  className="headering-table"/>
                    </>)
                }

        </>
    )
}
export default Moliya_table_map