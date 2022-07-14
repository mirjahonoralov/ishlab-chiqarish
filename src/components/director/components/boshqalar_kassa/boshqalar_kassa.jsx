import { useState } from "react"
import Super_input from "./../../../common/super_input/super_input"
import Select_option from "../../../common/select_option/select_option";
import Calendar from "../../../common/calendar/calendar";
import Textarea from "../../../common/textarea/textarea";
import Close_Form from "../../../../assets/icons/super_modal/close_form.svg"
import * as Yup from "yup"
import {useFormik} from "formik"
import { Formik, Form } from 'formik'
function Boshqalar_kassa() {
    const [selectValue2 , selectSetValue2] = useState('')
    const formik = useFormik({
        initialValues:{
            Kassa_name : "",
            Bolim : "",
            Telefon_raqam : "",
        },
        validationSchema: Yup.object({
            Kassa_name: Yup.string().max(15 , "Harfingiz 15tadan ko'payib ketdi !").required("Bu joyning ma'lumotni toldirmadiz !"),
            Bolim: Yup.string().max(30 , "Harfingiz 15tadan ko'payib ketdi !").required("Bu joyning ma'lumotni tanlamadiz"),
            Telefon_raqam: Yup.string().max(30 , "Harfingiz 15tadan ko'payib ketdi !").required("Bu joyning ma'lumotni tanlamadiz"),
        }),
        onSubmit: (values) =>{
            console.log(values);
            
        }   
    })
    console.log(formik.errors);

 
        const option1 =[ 
            {title : "1 chi bolim" ,id : 1},
            {title : "2 chi bolim" ,id : 2}
        ]

    return(
        <>

         
<form onSubmit={formik.handleSubmit}>
<div className="about_form">
                              <span className="about_form_span">Kassa qo’shish</span>
                              <img src={Close_Form} className="about_form_img-close" width={12} height={12} alt={Close_Form} />
                            </div>
            <div className="form_top">
            <div>
            <Super_input name="Kassa_name" onChange={formik.handleChange} value={formik.values.Kassa_name} title={"Kassa nomi"} placeholder={"Kassa nomini kiriting"} onBlur={formik.handleBlur} />
            {formik.touched.Kassa_name && formik.errors.Kassa_name ? <p className="padding-error">{formik.errors.Kassa_name}</p> : null}
            </div>

        </div>
        <div className="form_center">
        <div>
            <Select_option option={option1} name="Bolim" SetSelectValue={formik.handleChange} value={formik.values.Bolim }  title="Bo’lim" defaultValue="Bo’lim tanlang" onBlur={formik.handleBlur} />
            { formik.touched.Bolim && formik.errors.Bolim ? <p className="padding-error">{formik.errors.Bolim}</p> : null}
            </div>

           
        </div>        
        <div>
            <Super_input name="Telefon_raqam" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.Telefon_raqam} title={"Telefon raqam"} placeholder={"Telefon raqan kiriting"} />
            {formik.touched.Telefon_raqam && formik.errors.Telefon_raqam ? <p className="padding-error">{formik.errors.Telefon_raqam}</p> : null}
            </div>   
                <button className="form_button_tolov_small" type="submit">Saqlash</button>
            </form>


        </>
    )
}
export default Boshqalar_kassa