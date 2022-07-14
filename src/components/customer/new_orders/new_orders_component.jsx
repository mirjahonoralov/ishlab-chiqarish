import React, { useState } from "react";
import * as Yup from "yup";
import {
  Wrapper,
  TopWrapper,
  Form,
  Top,
  Center,
  Bottom,
  Bottom2,
  Button,
} from "./new_orders";
import UnversalModal from "../../common/unversal_modal/unversal_modal";
import Super_input from "../../common/super_input/super_input";
import Select_option from "../../common/select_option/select_option";
import Calendar from "../../common/calendar/calendar";
import Orders_modal from "./orders_modals/orders_modals";
import Orders_modal_ok from "./orders_modals/orders_modals_ok";
import OrdersTableModal from "./orders-table-modal/orders-table-modal";
import {useFormik} from "formik"
const NewOrdersComponent = () => {
    const [activeModal , setActiveModal] = useState(0);
    const [data , setData] = useState([]);
    const ChangeModal = (activeModal) =>{
        setActiveModal(activeModal)
        setOpen(true);
      }
    const [open , setOpen ] = useState(false)
    const [open2 , setOpen2 ] = useState(false)
    const handleClose = () => setOpen(false);
    const handleClose2 = () => setOpen2(false);
    const handleOpen = () => setOpen2(true);
    const formik = useFormik({
        initialValues:{
            company_name : "",
            orders_plan : "",
            color :"",
            option : "",
            razmer : "",
            option2 : "",
            order_kg : "",
            order_number : "",
            location : "",
            Money_option :"",
            tel_number: "",
        },
        validationSchema: Yup.object({
            orders_plan: Yup.string().required("Bu joyning ma'lumotni tanlamadiz !"),
            color: Yup.string().required("Bu joyning ma'lumotni tanlamadiz"),
            option: Yup.string().required("Bu joyning ma'lumotni tanlamadiz"),
            razmer: Yup.string().required("Bu joyning ma'lumotni to'ldirmadiz"),
            option2: Yup.string().required("Bu joyning ma'lumotni tanlamadiz"),
            order_kg: Yup.string().required("Bu joyning ma'lumotni to'ldirmadiz"),
            order_number: Yup.string().required("Bu joyning ma'lumotni to'ldirmadiz"),
            location: Yup.string().required("Bu joyning ma'lumotni to'ldirmadiz"),
            tel_number: Yup.string().required("Bu joyning ma'lumotni to'ldirmadiz"),
            Money_option: Yup.string().required("Bu joyning ma'lumotni to'ldirmadiz"),
        }),
        onSubmit:(values) =>{
            ChangeModal(1)
            setData(values);
        }
 
    })
    const dataOption = [{id : 1, title : "Galtak ip"},{id : 2, title : "Boshqacha ip" },{id : 3, title : "Umuman Tushunarsiz ip" , }]
    return(
        <>
        <Wrapper>
        
        <TopWrapper>
          <span>Yangi buyurtma berish</span>
          <button onClick={handleOpen}>Xodim orqali buyurtma berish</button>
        </TopWrapper>
        <Form onSubmit={formik.handleSubmit}>
          <Top>
            <Super_input
              name="company_name"
              title="Kompaniya nomi"
              value="Algorithm Gateway"
            />
            <div>
              <Select_option
                onBlur={formik.handleBlur}
                value={formik.values.orders_plan}
                SetSelectValue={formik.handleChange}
                name="orders_plan"
                option={dataOption}
                title="Mahsulot turi"
                defaultValue="Mahsulot turini tanlang"
              />
              {formik.touched.orders_plan && formik.errors.orders_plan ? (
                <p className="padding-error">{formik.errors.orders_plan}</p>
              ) : null}
            </div>
            <div>
              <Select_option
                value={formik.values.color}
                onBlur={formik.handleBlur}
                SetSelectValue={formik.handleChange}
                option={dataOption}
                name="color"
                title="Ranglar"
                defaultValue="Rangni tanlang"
              />
              {formik.touched.color && formik.errors.color ? (
                <p className="padding-error">{formik.errors.color}</p>
              ) : null}
            </div>
          </Top>
          <Center>
            <div>
              <Select_option
                value={formik.values.option}
                onBlur={formik.handleBlur}
                SetSelectValue={formik.handleChange}
                option={dataOption}
                name="option"
                title="Ip turi"
                defaultValue="Ip turini tanlang"
              />
              {formik.touched.option && formik.errors.option ? (
                <p className="padding-error">{formik.errors.option}</p>
              ) : null}
            </div>
            <div>
              <Super_input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.razmer}
                title="Ip razmeri"
                name="razmer"
                placeholder="Ip razmerini kiriting"
              />
              {formik.touched.razmer && formik.errors.razmer ? (
                <p className="padding-error">{formik.errors.razmer}</p>
              ) : null}
            </div>
            <div>
              <Select_option
                value={formik.values.option2}
                onBlur={formik.handleBlur}
                SetSelectValue={formik.handleChange}
                option={dataOption}
                name="option2"
                title="Qozon turi"
                defaultValue="Qozon turini tanlang"
              />
              {formik.touched.option2 && formik.errors.option2 ? (
                <p className="padding-error">{formik.errors.option2}</p>
              ) : null}
            </div>
          </Center>
          <Bottom>
            <div>
              <Super_input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="order_kg"
                value={formik.values.order_kg}
                title="Buyurtma kilosi"
                placeholder="Buyurtma  kilogrami kiriting"
              />
              {formik.touched.order_kg && formik.errors.order_kg ? (
                <p className="padding-error">{formik.errors.order_kg}</p>
              ) : null}
            </div>
            <div>
              <Super_input
                onBlur={formik.handleBlur}
                name="order_number"
                onChange={formik.handleChange}
                value={formik.values.order_number}
                title="Buyurtma soni"
                placeholder="Buyurtma sonini kiriting"
              />
              {formik.touched.order_number && formik.errors.order_number ? (
                <p className="padding-error">{formik.errors.order_number}</p>
              ) : null}
            </div>
            <Calendar title="Muddat" />
          </Bottom>
          <Bottom2>
            <div>
              <Super_input
                name="location"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.location}
                title="Yuboriladigan manzil"
                placeholder="Yuboriladigan manzilingizni kiriting"
              />
              {formik.touched.location && formik.errors.location ? (
                <p className="padding-error">{formik.errors.location}</p>
              ) : null}
            </div>
            <div>
              <Super_input
                name="tel_number"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.tel_number}
                title="Telefon raqamingiz"
                placeholder="Telefon raqamingni qoldiring"
              />
              {formik.touched.tel_number && formik.errors.tel_number ? (
                <p className="padding-error">{formik.errors.tel_number}</p>
              ) : null}
            </div>
            <div>
              <Select_option
                name="Money_option"
                value={formik.values.Money_option}
                onBlur={formik.handleBlur}
                SetSelectValue={formik.handleChange}
                option={dataOption}
                title="To’lov turini tanlang "
                defaultValue="To’lov turini tanlang"
              />
              {formik.touched.Money_option && formik.errors.Money_option ? (
                <p className="padding-error">{formik.errors.Money_option}</p>
              ) : null}
            </div>
          </Bottom2>
          <Button type="submit">Buyurtma berish</Button>
        </Form>
        <UnversalModal  open={open} handleClose={handleClose}>
        {activeModal === 1 ?(
    <Orders_modal data={data} onClose={handleClose}  changeModal={ChangeModal}/>
      ): activeModal === 2 ?(
            <Orders_modal_ok close={handleClose}/>
      ): null}
            
    </UnversalModal>
        <UnversalModal open={open2} handleClose={handleClose2}>
            <OrdersTableModal/>
        </UnversalModal>
        </Wrapper>
        </>
    )
}

export default NewOrdersComponent
