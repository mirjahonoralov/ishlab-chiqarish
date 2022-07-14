import * as Yup from "yup";
import {Wrapper ,Inputs , ModalWrapper} from "./style-profile-form"
import Super_input from "../../../common/super_input/super_input"
import {useFormik} from "formik"
import UniversalModal from "../../../common/unversal_modal/unversal_modal";
import { useState } from "react";
import  CommonButton  from "../../../common/button/index";
import Animation_success from "../../../../assets/icons/customer-panel/profile/animation_success.gif"
function ProfileForm({Click , Submits}) {
    const [open , setOpen ] = useState(false);
    const handleClose = () => setOpen(false);
    const formik = useFormik({
        initialValues:{
            company_name : "Moritz Mentges",
            location : "Mirobo avenum 1500 uy",
            telephon :"+99899 957 86-11",
            location2 : "Mirobod avenum 2000 uy",
            email : "moritzmentges@.com",
            city : "Toshkent",
            company_faculty : "Tekstil",
            region :"Chilonzor tumani",
            rebuplic: "Uzbekistan",
            pochta : "125487",
        },
        validationSchema: Yup.object({
            company_name: Yup.string().required("Bu joyning ma'lumotni to'ldirmadiz !"),
            location: Yup.string().required("Bu joyning ma'lumotni to'ldirmadiz !"),
            telephon: Yup.string().required("Bu joyning ma'lumotni to'ldirmadiz"),
            location2: Yup.string().required("Bu joyning ma'lumotni to'ldirmadiz"),
            email: Yup.string().required("Bu joyning ma'lumotni to'ldirmadiz"),
            city: Yup.string().required("Bu joyning ma'lumotni to'ldirmadiz"),
            company_faculty: Yup.string().required("Bu joyning ma'lumotni to'ldirmadiz"),
            location: Yup.string().required("Bu joyning ma'lumotni to'ldirmadiz"),
            rebuplic: Yup.string().required("Bu joyning ma'lumotni to'ldirmadiz"),
            region: Yup.string().required("Bu joyning ma'lumotni to'ldirmadiz"),
            pochta: Yup.string().required("Bu joyning ma'lumotni to'ldirmadiz"),
        }),
        onSubmit:(values) =>{
            console.log(values);
            setOpen(true)
        }
    })
    Submits(()=>formik.handleSubmit)
        const dataInput = [
            {
             id : 1,
             title : "Kompaniya nomi",
             placeholder : "Kompaniya nomi kiriting",
             value : formik.values.company_name,
             name : "company_name",

            },
            {
                id : 2,
                title : "Manzil 1 ",
                placeholder : "Manzil 1 nomi kiriting",
                value : formik.values.location,
                name : "location",
               },
               {
                id : 3,
                title : "Telefon raqam",
                placeholder : "Telefon raqam kiriting",
                value : formik.values.telephon,
                name : "telephon",
               },
               {
                id : 4,
                title : "Manzil 2",
                placeholder : "Manzil 2 kiriting",
                value : formik.values.location2,
                name : "location2",
               },
               {
                id : 5,
                title : "E-mail manzili",
                placeholder : "E-mail manzili kiriting",
                value : formik.values.email,
                name : "email",
                               },
               {
                id : 6,
                title: "Shahar",
                placeholder : "Shahar kiriting",
                value : formik.values.city,
                name : " city"       
              },
               {
                id : 7,
                title : "Kompaniya yo’nalishi",
                placeholder : "Kompaniya yo’nalishi kiriting",
                value : formik.values.company_faculty,
                name : " company_faculty"
               },
               {
                id : 8,
                title : "Tuman",
                placeholder : "Tuman kiriting",
                value : formik.values.region,
                name : "company_faculty"       
             },
               {
                id : 9,
                title : "Mamalakat",
                placeholder : "Mamalakat kiriting",
                value : formik.values.rebuplic,
                name : "rebuplic"           
             },
               {
                id : 10,
                title : "Pochta indeks",
                placeholder : "Pochta indeks kiriting",
                value : formik.values.pochta,
                name : "pochta"
               },
        ]
    return(
        <Wrapper>
        <h2>Kompaniya ma’lumotlari</h2>
            <Inputs>
        {dataInput.map(elem => <Super_input disabled={Click}  onBlur={formik.handleBlur}
                onChange={formik.handleChange}  style={{marginBottom : "20px" , width : "380px"}} value={elem.value}    name={elem.name}  title={elem.title} placeholder={elem.placeholder}/>)}
            {formik.touched.name && formik.errors.name ? (
                <p className="padding-error">{formik.errors.name}</p>
              ) : null}
            </Inputs>
            <UniversalModal open={open} handleClose={handleClose}>
                <ModalWrapper>
                    <img src={Animation_success} width={174} height={174} alt={Animation_success} />
                <h3>Ma’lumotlar saqlandi</h3>
                <CommonButton  onClick={handleClose} name="Yopish" />
                </ModalWrapper>
            </UniversalModal>
        </Wrapper>
    )
}
export default ProfileForm