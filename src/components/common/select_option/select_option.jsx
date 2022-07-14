
import select_strelka from "./../../../assets/icons/super_modal/strelka.svg" 
function Select_option({ SetSelectValue , value , option , title , defaultValue , name}) {
    return(
        <>
            <div>
            <p className="form-padding">{title}</p>
        <select className="form-select" name={name} onChange={SetSelectValue}>
            <option  selected disabled hidden>{defaultValue}</option>
            {option.map(option=>(
            <option key={option.id} value={option.id}>{option.title}</option>
            ))}
        </select>
        <img src={select_strelka}  className="form_select-strelka" alt="" />
            </div>
        </>
    )
}
export default Select_option