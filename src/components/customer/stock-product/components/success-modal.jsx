import React from "react";
import { SuccessModalWrapper } from "../style";
import thanksIcon from "../../../../assets/icons/customer-panel/stock-product/thanks.svg";
import CommonButton from "../../../common/button/";

const SuccessModal = ({ handleClose }) => {
  return (
    <SuccessModalWrapper>
      <img src={thanksIcon} alt="" />
      <h1>Buyurtmangiz qabul qilindi</h1>
      <p>Tanlovingiz uchun tashakkur</p>
      <CommonButton name="Yopish" margin="24px 0 0 0" onClick={handleClose} />
    </SuccessModalWrapper>
  );
};

export default SuccessModal;
