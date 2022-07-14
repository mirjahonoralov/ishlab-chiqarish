function Textarea({value , title , placeholder , name , onChange}) {
    return(
        <>
            <p className="form-padding1">{title}</p>
            <textarea className="textarea" id="w3review" name={name} onChange={onChange}  placeholder={placeholder} value={value}  rows="4"  cols="50"/>
        </>
    )    
}
export default Textarea


