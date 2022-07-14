import React, { useCallback, useEffect, useState } from "react";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import Template from "../Template";
import { Section } from "../Template/style";
import { MenuItem, Select } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch, useSelector } from "react-redux";
import { userSignUp } from "../../../redux/login/userSignUp";
import { useHistory } from "react-router-dom";

const CustomerSignUp = () => {
  const history = useHistory();
  const item = {
    title: "Mamlakatni tanlang",
    values: ["uzbekistan", "russia", "england", "USA", "China"],
  };

  const defaultNumber = "998";
  const [userData, setUserData] = useState({
    country: item.title,
    phone_number: defaultNumber,
    company_name: "",
  });

  const [invalidCompany, setInvalidCompany] = useState(false);
  const [invalidCountry, setInvalidCountry] = useState(false);
  const [invalidNumber, setInvalidNumber] = useState(false);

  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const handleChange = (name, value) => {
    if (name === "company_name") setInvalidCompany(false);
    if (name === "country") setInvalidCountry(false);
    if (name === "phone_number") setInvalidNumber(false);
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const dispatch = useDispatch();

  const verifyCodeSuccess = useSelector(
    (state) => state.signUp.verifyCodeSuccess
  );

  const handleClick = () => {
    if (
      userData.company_name &&
      userData.phone_number !== defaultNumber &&
      userData.country !== item.title
    )
      dispatch(userSignUp(userData));
    else {
      if (!userData.company_name) setInvalidCompany(true);
      if (!userData.country || userData.country === item.title)
        setInvalidCountry(true);
      if (!userData.phone_number || userData.phone_number === defaultNumber)
        setInvalidNumber(true);
    }
  };

  useEffect(() => {
    console.log(verifyCodeSuccess);
    if (verifyCodeSuccess) history.replace("/login/signUpVerify");
  }, [verifyCodeSuccess]);

  const signUpData = useSelector(
    (state) => state.lang.languageData.loginData.customerSignUp
  );

  console.log(signUpData);

  return (
    <Template>
      <Section>
        <h2>
          {signUpData.companyName} <span>*</span>
        </h2>
        <Input
          placeholder={signUpData.companyPlaceholder}
          onChange={(e) => handleChange("company_name", e.target.value)}
        />
        {invalidCompany && <h5>{signUpData.companyValidation}</h5>}
      </Section>
      <Section>
        <h2>
          {signUpData.country} <span>*</span>
        </h2>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={userData.country}
          onChange={(e) => handleChange("country", e.target.value)}
          style={{
            borderRadius: "50px",
            background: "#fff",
            height: "50px",
            paddingLeft: "20px",
            paddingRight: "8px",
            width: "404px",
          }}
        >
          <MenuItem disabled value={item.title}>
            {item.title}
          </MenuItem>
          {item?.values.map((item, id) => (
            <MenuItem key={id} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        {invalidCountry && <h5>{signUpData.countryValidation}</h5>}
      </Section>
      <Section>
        <h2>
          {signUpData.phoneNumber} <span>*</span>
        </h2>
        <PhoneInput
          style={{
            width: "404px",
            height: "50px",
            marginTop: "15px",
          }}
          country={"uz"}
          value={userData.phoneNumber}
          onChange={(phone) => handleChange("phone_number", phone)}
        />
        {invalidNumber && <h5>{signUpData.phoneNumberValidation}</h5>}
      </Section>
      <Section>
        <h2>{signUpData.email}</h2>
        <Input
          placeholder={signUpData.emailPlaceholder}
          type="email"
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </Section>
      <Button text={signUpData.next} type="submit" onClick={handleClick} />
    </Template>
  );
};

export default CustomerSignUp;
