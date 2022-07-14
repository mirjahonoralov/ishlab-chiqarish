import ProfileTop from "./profile-top/profile-top"
import ProfileForm from "./profile-form/profile-form"
import { useState } from "react"
const ProfileComponents = () =>{
        const [Click , SetClick] = useState(true)
        const [Submits , SetSubmits] = useState()
        const onSubmit=()=>{
            return Submits()
        }
    return(
        <>
            <ProfileTop click={Click}  onSubmit={onSubmit} SetClick={SetClick}/>
            <ProfileForm Click={Click}  Submits={SetSubmits}  />
        </>
    )
}
export default ProfileComponents