import Strelka_select from "../../../../assets/icons/super_modal/strelka.svg"
import NarxSiyosatiTable from "./Narx_siyosati_table"
const Narx_siyosati = ()=>{
    const option3 =[
        {title : "Saidbek" , id : 1},
        {title : "Javohir" , id : 2},
    ]
    const select = [
        {title : "Modelni tanlang" , placeholder : 'Chiqim tanlang' , id : 1},
        {title : "Maxsulot turi" , placeholder : 'Maxsulot turi' , id : 2},
        {title : "Maxsulot nomi" , placeholder : 'Maxsulot nomi' , id : 3},
        {title : "Qismlarni tanlang" , placeholder : 'Qismlarni tanlang' , id : 4},
        {title : "Valyuta" , placeholder : 'Valyuta' , id : 5}


    ]
    return(
        <>
        <div className="price_policy_selects">
        {select.map(elem => 
           <>
            <div>
            <p className="policy_form-padding">{elem.title}</p>
                <div>
                <select className="policy_small-option">
            <option  selected disabled hidden>{elem.placeholder}</option>
            {option3.map(option=>(
            <option key={option.id} value={option.id}>{option.title}</option>
            ))}
        </select>
        <img className="policy_select_strelka" src={Strelka_select} width={12} height={12} alt="" />
                </div>
            </div>
        </> )}
            </div>
            <NarxSiyosatiTable/>
        </>
    )
}
export default Narx_siyosati