import { useState } from "react"
import Super_input from "./../../../common/super_input/super_input"
import Select_option from "../../../common/select_option/select_option";
import Calendar from "../../../common/calendar/calendar";
import Textarea from "../../../common/textarea/textarea";
import * as Yup from "yup"
import {useFormik} from "formik"
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Close_Form from "../../../../assets/icons/super_modal/close_form.svg"
function Yetkazib_b_qoshish() {
    const [selectValue2 , selectSetValue2] = useState('')
    const formik = useFormik({
        initialValues:{
            Mijoz_name : "",
            izoh : "",
            Telefon_raqam :"",
            category : "",
            Ombor: "",
            Aktivligi: "",
            Manzili : ""
        },
        validationSchema: Yup.object({
            Mijoz_name: Yup.string().max(15 , "Harfingiz 15tadan ko'payib ketdi !").required("Bu joyning ma'lumotni toldirmadiz !"),
            Telefon_raqam: Yup.string().max(30 , "Harfingiz 15tadan ko'payib ketdi !").required("Bu joyning ma'lumotni tanlamadiz"),
            Ombor: Yup.string().max(30 , "Harfingiz 15tadan ko'payib ketdi !").required("Bu joyning ma'lumotni tanlamadiz"),
            category: Yup.string().max(30 , "Harfingiz 15tadan ko'payib ketdi !").required("Bu joyning ma'lumotni tanlamadiz"),
            Manzili: Yup.string().max(30 , "Harfingiz 15tadan ko'payib ketdi !").required("Bu joyning ma'lumotni tanlamadiz"),
            // Miqdor: Yup.string().max(30 , "Harfingiz 15tadan ko'payib ketdi !").required("Bu joyning ma'lumotni tanlamadiz"),
        }),
        onSubmit: (values) =>{
            console.log(values);
        }   
    })
 

        const option2 =[ 
            {title : "1 chi ombor" ,id : 1},
            {title : "2 chi ombor" ,id : 2}
        ]

    return(
        <>

            <form onSubmit={formik.handleSubmit}>
                <div className="about_form">
                    <span className="about_form_span">Chiqim qo’shish</span>
                    <img src={Close_Form} className="about_form_img-close" width={12} height={12} alt={Close_Form} />
                </div>
            <div className="form_top">
            <div>
            <Super_input name="Mijoz_name" onChange={formik.handleChange} value={formik.values.Mijoz_name} title={"Yetkazib beruvchi ismi"} placeholder={"Ismini kiriting"} onBlur={formik.handleBlur} />
            {formik.touched.Mijoz_name && formik.errors.Mijoz_name ? <p className="padding-error">{formik.errors.Mijoz_name}</p> : null}
            </div>
                <div>
                <Super_input name="Telefon_raqam" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.Telefon_raqam} title={"Telefon raqami"} placeholder={"Raqamini kiriting"} />
            {formik.touched.Telefon_raqam && formik.errors.Telefon_raqam ? <p className="padding-error">{formik.errors.Telefon_raqam}</p> : null}
                </div>
        </div>
        <div className="form_center">
            <div>
            <Super_input name="category" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.category} title={"Mahsulot nomi"} placeholder={"Mahsulot nomini kiriting"} />
            {formik.touched.category && formik.errors.category ? <p className="padding-error">{formik.errors.category}</p> : null}
            </div>
            <Select_option name="Ombor"   option={option2} SetSelectValue={formik.handleChange} title="Ombor" defaultValue="Omborni tanlang" value={selectValue2} />
        </div>
        <div className="form_bottom">
            <div>
            <Super_input name="Manzili" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.Manzili} title={"Manzili"} placeholder={"Manzil kiriting"} />
            {formik.touched.Manzili && formik.errors.Manzili ? <p className="padding-error">{formik.errors.Manzili}</p> : null}
            </div>
            <div className="qoshish_checkbox">
            <FormControl onChange={formik.handleChange} value={formik.values.Aktivligi}>
      <FormLabel id="demo-row-radio-buttons-group-label">Noaktiv</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="Aktivligi"
      >
        <FormControlLabel value="Aktive" control={<Radio />} label="Aktive" />
        <FormControlLabel value="Noaktiv" control={<Radio />} label="Noaktiv" />
      </RadioGroup>
    </FormControl>
            </div>
        </div>
        <Textarea name="izoh"  onChange={formik.handleChange} value={formik.values.izoh} title={"Izoh qoldiring"} placeholder={"O’z izohingizni qoldiring"}/>

                <button className="form_button_tolov" type="submit">To’lash</button>
            </form>

        </>
    )
}
export default Yetkazib_b_qoshish