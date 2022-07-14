import React, { useState } from "react";
import { CartWrapper, Counter, KiloCounter } from "../style";
import CloseIcon from "@mui/icons-material/Close";
import Table from "../../../common/table";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Th } from "../../../common/table/style";
import Selector from "../../../common/selector";
import trash from "../../../../assets/icons/trash.svg";
import CommonButton from "../../../common/button/";

const data = [1, 2, 3];

const THead = () => (
  <thead>
    <Th width="10px">№</Th>
    <th>Mahsulot nomi</th>
    <th>Mahsulot turi</th>
    <th>Rang</th>
    <th>Ip turi</th>
    <th colSpan={2}>
      <div className="double">
        Qoldiq
        <div className="double-bottom">
          <div className="divider"></div>
          <div className="item">Soni</div>
          <div className="item">Kilo</div>
        </div>
      </div>
    </th>
    <Th width="142px">So’n kopaytirish</Th>
    <Th width="142px">Kilo ko’paytirish</Th>
    <th>To'lov turi</th>
    <Th width="70px"></Th>
  </thead>
);

const Cart = ({ handleClose, changeModal }) => {
  const [selectionValue, setSelectionValue] = useState("values");

  const handleDelete = () => {};

  const handleConfirm = () => {
    changeModal(2);
  };

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
              <Selector
                values={["values", "naqt", "plastik"]}
                selectedValue={selectionValue}
                setSelectedValue={setSelectionValue}
              />
            </td>
            <td>
              <div className="delete">
                <img src={trash} alt="trash" onClick={() => handleDelete()} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <CartWrapper>
      <div className="top">
        <h1>Korzinka</h1>
        <CloseIcon onClick={handleClose} />
      </div>
      <Table thead={<THead />} tbody={<TBody />} />
      <CommonButton
        name={"Tasdiqlash"}
        onClick={handleConfirm}
        margin="20px 20px 0 0"
      />
    </CartWrapper>
  );
};

export default Cart;
