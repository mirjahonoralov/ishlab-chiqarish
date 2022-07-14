import {WrapperTop , Wrapper ,WrapperBottom , Background_img , WrapperBottomLeft , WrapperAbout , FormProfile} from "./styled-profile-top"
import Photo_icons from "../../../../assets/icons/customer-panel/profile/photo_icons.svg"
import Icons_photograph from "../../../../assets/icons/customer-panel/profile/icons_photograph.svg"
import CommonButton from "../../../common/button/index"
const ProfileTop = ({SetClick ,click , onSubmit}) =>{
    return(
        <>
        <Wrapper>
        <WrapperTop>
        <input type="file" id="file" name="file" required />
                    <label for="file" name="file"><img src={Photo_icons} width={40} height={40} alt={Photo_icons} /></label>
            <h1>Moritz Mentges</h1>
        </WrapperTop>
        <WrapperBottom>
            <WrapperBottomLeft>
            <Background_img>
            <input type="file" id="file" name="file" required />
                    <label for="file" name="file">            <img src={Icons_photograph} width={86} height={86} alt="" /></label>
            </Background_img>
                <WrapperAbout>
                <h3>Moritz Mentges</h3>
                <span>Kompaniya nomi</span>
                </WrapperAbout>
            </WrapperBottomLeft>
            {click ? 
            <CommonButton  onClick={() =>SetClick(false)} margin="0px 0px 0px 1030px" top="-50px"  name="Tahrirlash"/>
            :<div>
                <CommonButton bg="white" color="black" border="1px solid gray"  onClick={() =>SetClick(true)} margin="0px 0px 0px 830px" width="185px"  top="-50px"  name="Bekor qilish"/>
                <CommonButton  onClick={()=>onSubmit()} margin="0px 0px 0px 1030px" top="-98px"  name="Saqlash"/>
            </div> 
            }
        </WrapperBottom>
        </Wrapper>

        </>
    )
}
export default ProfileTop