import React from "react";
import { useState } from "react";
import Table from "../../common/table";
import { Counter, KiloCounter, Wrapper } from "./style";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import cart from "../../../assets/icons/customer-panel/change-order/cart-white.svg";
import Header from "./components/header";
import UniversalModal from "../../common/unversal_modal/unversal_modal";
import THead from "./components/thead";
import Cart from "./components/cart";
import SuccessModal from "./components/success-modal";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const TBody = () => {
  const [kiloCounterValue, setKiloCounterValue] = useState(null);
  const changeKiloCounter = (e) => {
    setKiloCounterValue(e.target.value);
  };

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item}>
          <td>{item}</td>
          <td>Product name</td>
          <td>Yarim tayyor</td>
          <td>Yashil</td>
          <td>Paxta</td>
          <td>150 ta </td>
          <td>150 kg</td>
          <td>
            <Counter>
              <span>-</span>
              <p>5</p>
              <span>+</span>
            </Counter>
          </td>
          <td>
            <KiloCounter>
              <input
                type="number"
                value={kiloCounterValue}
                onChange={changeKiloCounter}
              />
              <KeyboardArrowUpIcon
                className="up-icon"
                onClick={() => setKiloCounterValue(+kiloCounterValue + 1)}
              />
              <KeyboardArrowDownIcon
                className="down-icon"
                onClick={() => setKiloCounterValue(+kiloCounterValue - 1)}
              />
            </KiloCounter>
          </td>
          <td>
            <div className="add">
              <img src={cart} alt="cart" />
              Add
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const StockProduct = () => {
  const [open, setOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const handleClose = () => setOpen(false);

  const changeModal = (modalNumber) => {
    setActiveModal(modalNumber);
    setOpen(true);
  };
  return (
    <Wrapper>
      <Header
        title={"Ombordagi tayyor mahsulot"}
        setOpen={setOpen}
        changeModal={changeModal}
      />
      <Table thead={<THead />} tbody={<TBody />} pagination={true} />

      <UniversalModal open={open}>
        {activeModal === 1 ? (
          <Cart handleClose={handleClose} changeModal={changeModal} />
        ) : activeModal === 2 ? (
          <SuccessModal handleClose={handleClose} />
        ) : null}
      </UniversalModal>
    </Wrapper>
  );
};

export default StockProduct;
