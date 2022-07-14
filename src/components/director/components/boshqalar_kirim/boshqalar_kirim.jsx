import { useState } from "react"
import Super_input from "../../../common/super_input/super_input"
import Select_option from "../../../common/select_option/select_option";
import Calendar from "../../../common/calendar/calendar";
import Textarea from "../../../common/textarea/textarea";
import Close_Form from "../../../../assets/icons/super_modal/close_form.svg"
import * as Yup from "yup"
import {useFormik} from "formik"
import { Formik, Form } from 'formik'
function Boshqalar_kirim() {
    const [selectValue2 , selectSetValue2] = useState('')
    const formik = useFormik({
        initialValues:{
            kirim : "",
            Kirim_turi : "",
            Tolov_turi : "",
            Valyuta : "",
            Summa : ""
        },
        validationSchema: Yup.object({
            kirim: Yup.string().max(15 , "Harfingiz 15tadan ko'payib ketdi !").required("Bu joyning ma'lumotni toldirmadiz !"),
            Kirim_turi: Yup.string().max(30 , "Harfingiz 15tadan ko'payib ketdi !").required("Bu joyning ma'lumotni tanlamadiz"),
            Tolov_turi: Yup.string().max(30 , "Harfingiz 15tadan ko'payib ketdi !").required("Bu joyning ma'lumotni tanlamadiz"),
            Summa: Yup.string().max(30 , "Harfingiz 15tadan ko'payib ketdi !").required("Bu joyning ma'lumotni tanlamadiz"),
            Valyuta: Yup.string().max(30 , "Harfingiz 15tadan ko'payib ketdi !").required("Bu joyning ma'lumotni tanlamadiz"),
        }),
        onSubmit: (values) =>{
            console.log(values);
            
        }   
    })
    console.log(formik.errors);

 
    const option1 =[ 
        {title : "Naq Pul to'lov" ,id : 1},
        {title : "Vertual to'lov" ,id : 2}
    ]
        const option2 =[ 
            {title : "Dollar" ,id : 1},
            {title : "So'm" ,id : 2},
            {title : "Rubl" ,id : 2},
        ]
        const option3 =[
            {title : "kirim 1" , id : 1},
            {title : "kirim 2" , id : 2},

        ]

    return(
        <>

<form onSubmit={formik.handleSubmit}>
<div className="about_form">
                    <span className="about_form_span">Kirim qo’shish</span>
                    <img src={Close_Form} className="about_form_img-close" width={12} height={12} alt={Close_Form} />
                </div>
            <div className="form_top">
            <div>
            <Select_option option={option3} name="kirim" SetSelectValue={formik.handleChange} value={formik.values.kirim }  title="Qayerdan kirim" defaultValue="Kirimni tanlang" onBlur={formik.handleBlur} />
            { formik.touched.kirim && formik.errors.kirim ? <p className="padding-error">{formik.errors.kirim}</p> : null}
            </div>
            <div>
            <Select_option option={option1} name="Kirim_turi" SetSelectValue={formik.handleChange} value={formik.values.Kirim_turi }  title="Kirim turi" defaultValue="Kirim turini tanlang" onBlur={formik.handleBlur} />
            { formik.touched.Kirim_turi && formik.errors.Kirim_turi ? <p className="padding-error">{formik.errors.Kirim_turi}</p> : null}
            </div>

        </div>
        <div className="form_center">
            <div>
            <p className="form-padding">To’lov sanasi</p>
            <Calendar name="Tolov_sanansi" value={formik.values.Tolov_sanasi} onChange={formik.handleChange}/>
            </div>
            <div>
            <Select_option option={option1} name="Tolov_turi" SetSelectValue={formik.handleChange} value={formik.values.Tolov_turi }  title="To’lov turi" defaultValue="To’lov turini tanlang" onBlur={formik.handleBlur} />
            { formik.touched.Tolov_turi && formik.errors.Tolov_turi ? <p className="padding-error">{formik.errors.Tolov_turi}</p> : null}
            </div>
        </div>
        <div className="form_bottom">
            <div>
            <Select_option option={option2} name="Valyuta" SetSelectValue={formik.handleChange} value={formik.values.Valyuta }  title="Valyuta" defaultValue="To’lov turini tanlang" onBlur={formik.handleBlur} />
            { formik.touched.Valyuta && formik.errors.Valyuta ? <p className="padding-error">{formik.errors.Valyuta}</p> : null}
            </div>
            <div>
            <Super_input name="Summa" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.Summa} title={"Summa"} placeholder={"Summani kiriting"} />
            {formik.touched.Summa && formik.errors.Summa ? <p className="padding-error">{formik.errors.Summa}</p> : null}
            </div>
        </div>
             <Textarea name="izoh"  onChange={formik.handleChange} value={formik.values.izoh} title={"Izoh qoldiring"} placeholder={"izoh"}/>
                <button className="form_button_tolov" type="submit">To’lash</button>
            </form>
        </>
    )
}
export default Boshqalar_kirim