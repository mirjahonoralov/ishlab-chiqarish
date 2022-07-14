import React, { useState } from "react";
import SuperInput from "../../common/super_input/super_input";
import { Content, Form, Item, Section, Wrapper } from "./style";
import CloseIcon from "@mui/icons-material/Close";
import CommonButton from "../../common/button/";
import { useFormik } from "formik";
import Selector from "../../common/selector";

const AddCompany = ({ handleOpen }) => {
  const handleAdd = () => {
    // adding with backend
  };

  const companyDirections = [
    "Kompaniya yo’nalishini tanlang",
    "birinchi",
    "ikkinchi",
    "uchinchi",
  ];

  const countries = ["Mamlakatni tanlang", "Uzb", "Russia", "China"];

  const cities = ["Shaharni tanlang", "Uzb", "Russia", "China"];

  const [companyDirection, setCompanyDirection] = useState(
    "Kompaniya yo’nalishini tanlang"
  );
  const [company, setCompany] = useState("Mamlakatni tanlang");
  const [city, setCity] = useState("Shaharni tanlang");

  const formik = useFormik({
    initialValues: {
      company_name: "",
      phone_number: "",
      email: "",
      company_direction: "",
      country: "",
      address1: "",
      address2: "",
      city: "",
      region: "",
      postal_code: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
  });
  return (
    <Wrapper>
      <div className="top">
        <h1>Kompaniya qo’shish</h1>
        <CloseIcon onClick={handleOpen} />
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Content>
          <Section>
            <SuperInput
              name="company_name"
              title="Kompaniya nomi"
              placeholder="Kompaniya nomini kiriting"
            />
            <SuperInput
              name="phone_number"
              title="Telefon raqam"
              placeholder="+99899 957 86-11"
            />
            <SuperInput
              name="email"
              title="E-mail manzili"
              placeholder="moritzmentges@.com"
            />
            {/* <SuperInput
              name="company_direction"
              title="Kompaniya yo’nalishi"
              placeholder="Kompaniya yo’nalishini tanlang"
            /> */}
            <Item>
              <p>Kompaniya yo’nalishi</p>
              <Selector
                name="company_direction"
                values={companyDirections}
                selectedValue={companyDirection}
                setSelectedValue={setCompanyDirection}
                height="44px"
                minWidth={"300px"}
              />
            </Item>
            <Item>
              <p>Mamalakat</p>
              <Selector
                name="country"
                values={countries}
                selectedValue={company}
                setSelectedValue={setCompany}
                height="48px"
                minWidth={"300px"}
              />
            </Item>

            {/* <SuperInput
              name="country"
              title="Mamalakat"
              placeholder="Mamlakatni tanlang"
            /> */}
          </Section>

          <Section>
            <SuperInput
              name="address1"
              title="Manzil 1"
              placeholder="Manzil 1"
            />
            <SuperInput
              name="address2"
              title="Manzil 2"
              placeholder="Manzil 2"
            />
            <Item>
              <p>Shahar</p>
              <Selector
                name="city"
                values={cities}
                selectedValue={city}
                setSelectedValue={setCity}
                height="48px"
                minWidth={"300px"}
              />
            </Item>
            <SuperInput
              name="region"
              title="Tuman"
              placeholder="Tumaningizni kiriting"
            />
            <SuperInput
              name="postal_code"
              title="Pochta indeks"
              placeholder="Pochta indeksni kiriting"
            />
          </Section>
        </Content>

        <CommonButton
          name={"Qo'shish"}
          margin="25px 35px 0 0"
          onClick={handleAdd}
          type="submit"
        />
      </form>
    </Wrapper>
  );
};

export default AddCompany;
