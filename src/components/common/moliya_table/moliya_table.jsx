import Moliya_table_top from "./moliya_table_top"
const Moliya_table =  ()=> {
    const data_table = [
        {name : "Mahsulot xarajatlari" , title : "Mahsulot 1" ,id:1},
        {name : "Doimiy xarajatlar" , title : "Yoqilg’i 1", id:2},

    ]
    return(
        <>
            {data_table.map(elem =>(
                    <div className="Finance_center_table_left">
            <Moliya_table_top key={elem.id} data_table={elem} />
            </div>

))}
        </>
    )
}
export default Moliya_table