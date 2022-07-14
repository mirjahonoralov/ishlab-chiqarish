import { useState } from "react"
import Super_input from "./../../../common/super_input/super_input"
import Select_option from "../../../common/select_option/select_option";
import Calendar from "../../../common/calendar/calendar";
import Textarea from "../../../common/textarea/textarea";
import Input_small from "../../../common/input_small/input_small";
import Small_option from "../../../common/small_option/small_option";
import Small_calendar from "../../../common/small_calendar/small_calendar"
import * as Yup from "yup"
import {useFormik} from "formik"
import { Formik, Form } from 'formik'
function Buyirtma_qarz() {
    const [selectValue2 , selectSetValue2] = useState('')
    const [MijozName , SetMijozName ] = useState('')
    const formik = useFormik({
        initialValues:{
            Mijoz_name : "",
            Tolov_turi : "",
            Tolov_sanansi : "",
            kassa : "",
            izoh : "",
            turi : "",
            summa : "",
            Tolanishi_kerak : "",
            tolov_kiritilgan : ""
        },
        validationSchema: Yup.object({
            kassa: Yup.string().max(15 , "Harfingiz 15tadan ko'payib ketdi !").required("Bu joyning ma'lumotni toldirmadiz !"),
            tolov_kiritilgan: Yup.string().max(30 , "Harfingiz 15tadan ko'payib ketdi !").required("Bu joyning ma'lumotni tanlamadiz"),
            Tolov_turi: Yup.string().max(30 , "Harfingiz 15tadan ko'payib ketdi !").required("Bu joyning ma'lumotni tanlamadiz"),
        }),
        onSubmit: (values) =>{
            console.log(values);
        }   
    })

 
    const option1 =[ 
        {title : "Naq Pul to'lov" ,id : 1},
        {title : "Vertual to'lov" ,id : 2}
    ]
        const option2 =[ 
            {title : "1 chi kassa" ,id : 1},
            {title : "2 chi kassa" ,id : 2}
        ]
        const option3 =[ 
            {title : "1 chi tur" ,id : 1},
            {title : "2 chi tur" ,id : 2}
        ]
    return(
        <>
        
        <form onSubmit={formik.handleSubmit}>
            <div className="form_top">
            <div>
            <p className="form-padding">To’lov sanasi</p>
            <Small_calendar name="Sana" value={formik.values.Tolov_sanansi} onChange={formik.handleChange}/>
            </div>
            <div>
            <Small_option name="kassa"   option={option2} SetSelectValue={formik.handleChange} title="Kassa" defaultValue="Kassani tanglang" value={selectValue2} />
            {formik.touched.kassa && formik.errors.kassa ? <p className="padding-error">{formik.errors.kassa}</p> : null}
            </div>
            <Input_small name="Mijoz_name"   value="Miraki Madad" title={"Mijoz"} placeholder={"Mijoz ismini kiriting"} onBlur={formik.handleBlur} />

        </div>
        <div className="form_center">
            <Small_option name="turi"   option={option3} SetSelectValue={formik.handleChange} title="Turi" defaultValue="Yarim tayyor" value={selectValue2} />
            <Input_small   onChange={formik.handleChange} value="53546" title={"Buyurtma kodi"} placeholder={"Mijoz ismini kiriting"} onBlur={formik.handleBlur} />

            <div>
            <Small_option option={option1} name="Tolov_turi" SetSelectValue={formik.handleChange} value={formik.values.Tolov_turi }  title="To’lov turi" defaultValue="To’lov turini tanlang" onBlur={formik.handleBlur} />
            { formik.touched.Tolov_turi && formik.errors.Tolov_turi ? <p className="padding-error">{formik.errors.Tolov_turi}</p> : null}
            </div>
        </div>
        <div className="form_bottom">
            <Input_small name="summa" onBlur={formik.handleBlur} onChange={formik.handleChange} value="-377,000" title={"Summa"} placeholder={"Miqdorni kiriting"} />
            <Input_small name="Tolanishi_kerak" onBlur={formik.handleBlur} onChange={formik.handleChange} value="-377,000" title={"To’lanishi kerak"} placeholder={"Miqdorni kiriting"} />
            <div>
            <Input_small name="tolov_kiritilgan" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.tolov_kiritilgan} title={"To’lov kiriting"} placeholder={"To’lov kiriting"} />
            {formik.touched.tolov_kiritilgan && formik.errors.tolov_kiritilgan ? <p className="padding-error">{formik.errors.tolov_kiritilgan}</p> : null}
            </div>

        </div>
        <div className="form_texarea_div">
        <Textarea name="izoh"  onChange={formik.handleChange} value={formik.values.izoh} title={"Izoh qoldiring"} placeholder={"izoh"}/>
            </div>
                <button type="submit" className="form_button_tolov">To’lash</button>
            </form>
        </>
    )
}
export default Buyirtma_qarz