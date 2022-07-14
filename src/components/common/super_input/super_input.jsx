 import {useFormik} from "formik"
function Super_input({value , title , placeholder ,onChange , name , style , disabled }) {
    return(
        <>
            <div>
            <p className="form-padding">{title}</p>
            <input className="form-input" style={style} name={name} onChange={onChange} disabled={disabled}  placeholder={placeholder} value={value} type="text" /> 
               </div>
        </>
    )    
}
export default Super_input


