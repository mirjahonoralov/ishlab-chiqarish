import React, { useState, useEffect } from "react";
import CommonTable from "../../../../components/common/commonTable";
import { item } from "../../../../components/common/commonTable/mockData";
import Thead from "../../../../components/common/commonTable/Thead";
import ModalCommon from "../../../../components/common/super_modal/super_modal";

import BoshqaKirim from "../../../../components/director/components/boshqalar_kirim/boshqalar_kirim";
import { useDispatch, useSelector } from "react-redux";
import { getPayments } from "../../../../redux/yetgazib_berish/listSlice";
import { Icon } from "../../../../components/common/commonTable/style";

const TRoad = ({ data, isAllChecked }) => {
  return (
    <>
      {data.map((item) => (
        <tr key={item.id}>
          <td>
            <input
              type="checkbox"
              name=""
              checked={isAllChecked}
              // id={item.id}
              // onClick={() => handleCheck(item.id)}
            />
          </td>
          <td>{item?.payment_type}</td>
          <td>{item?.supplier?.fullname}</td>
          <td>{item?.supplier?.product_name}</td>
          <td>{item?.payment_type}</td>
          <td>{item?.currency?.title}</td>
          <td>{item?.amount}</td>
          <td>{item?.description}</td>
          <td
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              justifyContent: "center",
              height: "51px",
              marginRight: "12px",
            }}
          >
            <Icon.Edit/>
            <Icon.Trash/>
          </td>
        </tr>
      ))}
    </>
  );
};

const tHeadData = [
  "To’lov sanasi",
  "Yetkazib beruvchi ismi",
  "Mahsulot nomi",
  "To’lov turi",
  "Valyuta",
  "Summa",
  "Izoh",
];

const Payments = () => {
  const dispatch = useDispatch();
  const list = useSelector(
    (state) => state.supplierList.get_suppliers_payments.list
  );
  console.log(list, "list");

  const [data, setData] = useState([item, item, item, item, item]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isAllChecked, setIsAllChecked] = useState(false);

  const selectAll = () => {
    // select all tbody's tr
    console.log("clicked");
    setIsAllChecked(!isAllChecked);
  };

  useEffect(() => {
    console.log("showing");
    dispatch(getPayments());
  }, []);

  useEffect(() => {
    setData(list);
  }, [list]);

  return (
    <div>
      <CommonTable
        title="Yetkazib beruvchilar to’lovi"
        isInput={true}
        isButton={true}
        addingBtn="To’lov qo’shish"
        isActive={false}
        tHead={<Thead data={tHeadData} selectAll={selectAll} />}
        tRoad={<TRoad data={data} isAllChecked={isAllChecked} />}
        handleOpen={handleOpen}
        isAccordion={true}
      />

      <ModalCommon open={open} handleClose={handleClose}>
        <BoshqaKirim />
      </ModalCommon>
    </div>
  );
};

export default Payments;
