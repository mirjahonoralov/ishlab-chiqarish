import PhoneInput from "react-phone-input-2";
const UnversalPhone = () =>{
    return(
        <>
                <PhoneInput
          style={{
            width: "404px",
            height: "50px",
            marginTop: "15px",
          }}
          country={"uz"}
        //   value={userData.phoneNumber}
        //   onChange={(phone) => handleChange("phone_number", phone)}
        />
        </>
    )
}
export default UnversalPhone