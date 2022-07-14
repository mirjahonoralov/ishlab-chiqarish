import Tolov_table_top from "./tolov_table_top"
import "./tolov_table.css"
const Tolov_table =  ()=> {
    const data_table = [
        {name : "Valyuta dollar $" , title : "Mahsulot 1" ,id:1},
        {name : "Valyuta so’m " , title : "Yoqilg’i 1", id:2},
        {name : "Valyuta dollar $" , title : "Yoqilg’i 1", id:2},
        {name : "Valyuta so’m " , title : "Yoqilg’i 1", id:2},

    ]
    return(
        <>
            {data_table.map(elem =>(
                    <div className="tolov_center_table_left">
            <Tolov_table_top key={elem.id} data_table={elem} />
            </div>

))}
        </>
    )
}
export default Tolov_table