import Card from "../../../common/card/card"
import "./../../../css/style.css"
import Mijozlar_tahlili_Chart from "./Mijozlar_tahlili_Chart"
import Mijoz_Tahlili_table from "./Mijoz_Tahlilii_table"
import "./Mijozlar_tahlili.css"
function Mijoz_tahlili_component() {
    const cardData = [
        {name : "97382" , title : "1 yilgi umumiy buyurtma" , id : 1},
        {name : "1234" , title : "Oxirgi 3 oylik umumiy buyurtma" , id : 2},
        {name : "34533" , title : "Keyingi 3 oylik taxmin" , id : 3},
        {name : "Yarim tayyor" , title : "Qaysi mahsulotdan" , id : 4},
        {name : "1243" , title : "Qancha" , id : 5},
    ]
    return(
        <>
            <div className="cards">
                    {cardData && cardData.map(elem =>(
               <Card data={elem} key = {elem.id}/>
                    ))}
            </div>
            <div className="chart_mijozlar_tahlili">
                        <Mijozlar_tahlili_Chart/>
            </div>
            <div className="table_mijoz_tahlili">
                    <Mijoz_Tahlili_table/>
            </div>
        </>
    )
}
export default Mijoz_tahlili_component