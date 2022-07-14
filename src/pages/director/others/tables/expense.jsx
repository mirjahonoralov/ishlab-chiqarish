import React, { useState, useEffect } from "react";
import CommonTable from "../../../../components/common/commonTable";
import { item } from "../../../../components/common/commonTable/mockData";
import Thead from "../../../../components/common/commonTable/Thead";
import ModalCommon from "../../../../components/common/super_modal/super_modal";

import Boshqalar_chiqim from "../../../../components/director/components/boshqalar_chiqim/boshqalar_chiqim";
import { useDispatch, useSelector } from "react-redux";
import { getExpense } from "../../../../redux/yetgazib_berish/listSlice";
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
          <td>{item?.created_at}</td>
          <td>{item?.from_where}</td>
          <td>{item?.cost_type}</td>
          <td>{item?.currency?.title}</td>
          <td>{item?.payment_type}</td>
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
            <Icon.Edit
            // onClick={() => handleEdit(item.id)}
            />
            <Icon.Trash
            // onClick={() => handleDelete(item.id)}
            />
          </td>
        </tr>
      ))}
    </>
  );
};

// const tHeadData = [
//   "Sana",
//   "Qayerdan chiqim",
//   "Chiqim turi",
//   "To’lov turi",
//   "Valyuta",
//   "Summa",
//   "Izoh",
// ];

const Expense = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.supplierList.get_expense.list);
  const staticData = useSelector(
    (state) => state.lang.languageData.others.expense
  );
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
    dispatch(getExpense());
  }, []);

  useEffect(() => {
    setData(list);
  }, [list]);

  return (
    <div>
      <CommonTable
        title={staticData.title}
        isInput={true}
        isButton={true}
        addingBtn="Chiqim qo’shish"
        isActive={true}
        tHead={<Thead data={staticData.arr} selectAll={selectAll} />}
        tRoad={<TRoad data={data} isAllChecked={isAllChecked} />}
        handleOpen={handleOpen}
        isAccordion={true}
      />

      <ModalCommon open={open} handleClose={handleClose}>
        <Boshqalar_chiqim />
      </ModalCommon>
    </div>
  );
};

export default Expense;
