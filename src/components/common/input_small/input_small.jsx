function Input_small({value , title , placeholder ,onChange , name }) {
    return(
        <>
            <div className="">
            <p className="form-padding">{title}</p>
            <input className="small-input" name={name} onChange={onChange}  placeholder={placeholder} value={value} type="text" />
               </div>
        </>
    )    
}
export default Input_small


