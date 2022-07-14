function Small_option({ SetSelectValue , value , option , title , defaultValue , name}) {
    return(
        <>
            <div>
            <p className="form-padding">{title}</p>
        <select className="small-option" name={name} onChange={SetSelectValue}>
            <option  selected disabled hidden>{defaultValue}</option>
            {option.map(option=>(
            <option key={option.id} value={option.id}>{option.title}</option>
            ))}
        </select>
            </div>
        </>
    )
}
export default Small_option