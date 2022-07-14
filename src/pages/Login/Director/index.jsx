import React, { useEffect, useState } from "react";
import Template from "../Template";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import { Icon } from "../icons";
import { Section } from "../Template/style";
import { postUserInfo } from "../../../redux/login/user";
import { useHistory } from "react-router-dom";

const Director = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [invalidUserName, setInvalidUserName] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const handleChange = (name, value) => {
    if (name === "username") setInvalidUserName(false);
    if (name === "password") setInvalidPassword(false);
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const history = useHistory();
  const dispatch = useDispatch();
  const role = useSelector((state) => state.login.role);

  const handleClick = () => {
    if (userData.username && userData.password)
      dispatch(postUserInfo(userData));
    else {
      if (!userData.login) setInvalidUserName(true);
      if (!userData.password) setInvalidPassword(true);
    }
  };

  useEffect(() => {
    // if (role === "Direktor") history.replace("director/dashboard");
    if (role === "Omborchi") {
      history.replace("/warehouseMan/mahsulotlar-ro'yhati/homashyo");
      // window.location.reload();
    } else if (role === "Sotuv boshlig'i") {
      history.replace("/sotuvboshligi/MijozlarRuyxati");
      // window.location.reload();
    } else if (role === "Direktor") {
      history.replace("/director/dashboard");
      // window.location.reload();
    } else if (role === "Sotuv meneger") {
      history.replace("/sotuv-meneger/MijozlarRuyxati");
      // window.location.reload();
    } else if (role === "Ta'minotchi") {
      history.replace("/taminotchi/OmborQoldiq");
      // window.location.reload();
    } else if (role === "Kassir") {
      history.replace("/moliya/dashboard");
      // window.location.reload();
    } else if (role === "Texnolog") {
      history.replace("/technolog/retsept");
      // window.location.reload();
    } else if (role === "Nazoratchi") {
      history.replace("/sifatNazorati/yaroqsiz");
      // window.location.reload();
    }
  }, [history, role]);

  const loginData = useSelector(
    (state) => state.lang.languageData.loginData.director
  );

  console.log(loginData);

  return (
    <Template>
      <Section>
        <h2>{loginData.login}</h2>
        <Input
          icon={<Icon.User />}
          placeholder={loginData.loginPlaceholder}
          onChange={(e) => handleChange("username", e.target.value)}
        />
        {invalidUserName && <h5>{loginData.validationUsername}</h5>}
      </Section>
      <Section>
        <h2>{loginData.password}</h2>
        <Input
          icon={<Icon.Lock />}
          placeholder={loginData.passwordPlaceholder}
          onChange={(e) => handleChange("password", e.target.value)}
          type="password"
        />
        {invalidPassword && <h5>{loginData.validationPassword}</h5>}
      </Section>
      <Button type="submit" onClick={handleClick} text={loginData.button} />
      <Link to="/login/customerSignIn">{loginData.link}</Link>
    </Template>
  );
};

export default Director;
