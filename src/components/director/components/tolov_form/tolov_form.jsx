import * as React from 'react';
import { useState } from "react"
import Super_input from "./../../../common/super_input/super_input"
import Select_option from "../../../common/select_option/select_option"
import Calendar from "../../../common/calendar/calendar";
import Textarea from "../../../common/textarea/textarea";
import * as Yup from "yup"
import {useFormik} from "formik"
import { Formik, Form } from 'formik'
import Close_Form from "../../../../assets/icons/super_modal/close_form.svg"
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import select_strelka from "./../../../../assets/icons/super_modal/strelka.svg";
import "./tolov_form.css"
import { useRef } from 'react';
function Tolov_form() {
    const modalHeight = useRef()
    const modalBorder = useRef()
    const modal_static = useRef()
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
    const [demo, setDemo] = React.useState("");


    const handleChange = (newValue) => {
            console.log(newValue);
            setDemo(newValue)
    };

    const option1 =[ 
        {title : "Naq Pul to'lov" ,id : 1},
        {title : "Vertual to'lov" ,id : 2}
    ]
        const option2 =[ 
            {title : "1 chi kassa" ,id : 1},
            {title : "2 chi kassa" ,id : 2}
        ]

        const [formAdd , setFormAdd] = useState([
            {            
            Mijoz_name: '',
            Tolov_turi: '',
            Tolov_sanansi : '',
            Izoh_qoldirish : '',
            Miqdor : ''
        },
    ])  
    const handleFormChange = (event , index) =>{
        // if(demo){
        //     data = [...formAdd,demo]
        // }
        let data = [...formAdd];
        data[index][event.target.name] = event.target.value;
        setFormAdd(data)
    }
    const submit = () =>{
        console.log(formAdd);
    }
    
    const SubmitAdd = () =>{
        let object ={
            Mijoz_name: '',
            Tolov_turi: '',
            Tolov_sanansi : '',
            Izoh_qoldirish : '',
            Miqdor : ''
        }
        modalHeight.current.style.height = "550px"
        setFormAdd([...formAdd, object])
    }
    return(
        <>
            <form ref={modalHeight} style={{overflow : "scroll"}} onSubmit={submit}>
            <div  className="about_form">
                                
                              <span className="about_form_span">Mijoz to’lovlari</span>
                              <img src={Close_Form} className="about_form_img-close" width={12} height={12} alt={Close_Form} />
                            </div>
                    {formAdd.map((form , index) =>{
                        return(
                            <>
                                <div ref={modalBorder} className='forms'>
                                <div  className="form_top">
                                <div  key={index} className="">
                                            <div className='form_top_static'>
                                            <p className="form-padding">Mijoz ismi </p>
                                            <span className='form_top_static_span' ref={modal_static}>{index + 1}</span>
                                            </div>
                                        <input name="Mijoz_name" className="form-input"   type="text" placeholder="Mijoz ismi" onChange={event => handleFormChange(event , index)} value={form.name} />
                                        </div>
                                <div key={index}>
                                <p className="form-padding">To’lov turi</p>
                                <select className="form-select" name="Tolov_turi" onChange={event => handleFormChange(event , index)}>
                                                <option  selected disabled hidden>To’lov turini tanlang</option>
                                                {option1.map(option=>(
                                                <option key={option.id} value={option.id}>{option.title}</option>
                                                ))}
                                            </select>
                                        <img src={select_strelka}  className="form_select-strelka" alt="" />
                                </div>
                                
                                </div>
                                <div  className="form_center" key={index}>
                                <div>
                                <p className="form-padding">To’lov turi</p>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                                <DateTimePicker
                                value={value}
                                name="Tolov_sanansi"
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                            </LocalizationProvider>
                                </div>
                                    <div>
                                    <p className="form-padding">Kassa</p>
                                    <select className="form-select" name="Tolov_turi" onChange={event => handleFormChange(event , index)}>
                                                <option  selected disabled hidden>Kassani tanlang</option>
                                                {option1.map(option=>(
                                                <option key={option.id} value={option.id}>{option.title}</option>
                                                ))}
                                            </select>
                                        <img src={select_strelka}  className="form_select-strelka" alt="" />
                                    </div>
                                </div>
                                <div className="form_bottom">
                                    <div>
                                    <p className="form-padding">Miqdor</p>
                                    <input name="Miqdor" className="form-input"   type="text" placeholder="Miqdorni kiriting" onChange={event => handleFormChange(event , index)} value={form.name} />
                                    </div>
                                    <div className='form_texarea_div'>
                                    <p className="form-padding1">Izoh qoldirish</p>
                                 <textarea className="textarea" id="w3review" name='Izoh_qoldirish' placeholder='O’z izohingizni qoldiring'  onChange={event => handleFormChange(event , index)} rows="4"  cols="50"/>
                                    </div>   
                                </div>
                                </div>
                            </>
                        )
                    })}
                <br />
            </form>
                <div className='form_buttons'>
                <button className='form_button_add' onClick={SubmitAdd}><span className='form_button_icon'>+</span> Yana qo’shish</button>
                <button  className="form_button_tolov" onClick={submit}>Qo'shish</button>
                </div>

        </>
    )
}
export default Tolov_form