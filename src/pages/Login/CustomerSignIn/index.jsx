import React, { useState } from "react";
import Template from "../Template";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import { Icon } from "../icons";
import { Section } from "../Template/style";
import Result from "./Result";
import { Wrapper } from "./style";
import crossImg from "../../../assets/icons/login/cross-img.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const CustomerSignIn = () => {
  const [search, setSearch] = useState("");
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();
  const [res, setRes] = useState(false);

  const handleClick = () => {
    setRes(true);
    console.log(search);
  };

  const companies = [
    {
      name: "Algorithm Gate Way LLC",
      icon: <img src={crossImg} alt="logo" />,
    },
    {
      name: "microsoft",
      icon: "icon",
    },
    {
      name: "Epam",
      icon: "icon",
    },
    {
      name: "SomeThing",
      icon: "icon",
    },
    {
      name: "Algorithm Gate Way LLC",
      icon: "icon",
    },
    {
      name: "microsoft",
      icon: "icon",
    },
    {
      name: "Epam",
      icon: "icon",
    },
    {
      name: "SomeThing",
      icon: "icon",
    },
  ];

  const signData = useSelector(
    (state) => state.lang.languageData.loginData.customerSignIn
  );

  return (
    <Template>
      <Wrapper>
        {!res ? (
          <>
            <Section>
              <h2>{signData.title}</h2>
              <Input
                icon={<Icon.Search />}
                placeholder={signData.placeholder}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Section>
            <Button
              text={signData.search}
              type="submit"
              onClick={handleClick}
            />
            <Link to="/login/customerSignUp">{signData.link}</Link>
          </>
        ) : (
          <>
            <h2>{signData.resultTitle}</h2>
            {companies.map((company, id) => (
              <Result key={id} company={company} />
            ))}
          </>
        )}
      </Wrapper>
    </Template>
  );
};

export default CustomerSignIn;
