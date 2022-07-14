import React, { useEffect, useState } from "react";
import Template from "../Template";
import { Section } from "../Template/style";
import Button from "../../../components/common/Button";
import ReactInputVerificationCode from "react-input-verification-code";
import "./verify.css";
import { VerifyWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { verifyFunc } from "../../../redux/login/verifySlice";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";

const SignUpVerify = () => {
  const history = useHistory();
  const [verifyCode, setVerifyCode] = useState();
  const cookies = new Cookies();
  const registered = useSelector((state) => state.verifyUser.registered);
  const dispatch = useDispatch();
  const userData = {
    phone_number: `+${cookies.get("phone_number")}`,
    company_name: cookies.get("company_name"),
    country: cookies.get("country"),
    email: cookies.get("email"),
    password: "12345678",
    // username: "user",
  };
  const onSubmit = () => {
    dispatch(verifyFunc(userData));
  };

  useEffect(() => {
    if (registered) history.replace("/login/customerSignIn");
  }, [registered]);

  const verifyData = useSelector(
    (state) => state.lang.languageData.loginData.signUpVerify
  );

  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);
    if (minutes === -1) {
      setSeconds(0);
      setMinutes(0);
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  return (
    <Template>
      <h2>{verifyData.description}</h2>
      <Section>
        <h3 style={{ marginBottom: "15px" }}>{verifyData.title}</h3>
        <VerifyWrapper>
          <div className="custom-styles">
            <ReactInputVerificationCode
              placeholder=""
              onChange={setVerifyCode}
            />
          </div>
        </VerifyWrapper>
      </Section>
      <h4>
        {verifyData.time} 0{minutes}:{seconds > 9 ? seconds : `0${seconds}`} {}{" "}
        | <span style={{ color: "#0563BB" }}>{verifyData.sendAgain}</span>
      </h4>
      <Button text={verifyData.confirmation} type="submit" onClick={onSubmit} />
    </Template>
  );
};

export default SignUpVerify;
