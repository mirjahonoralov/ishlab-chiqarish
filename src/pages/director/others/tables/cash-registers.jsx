import React, { useState, useEffect } from "react";
import CommonTable from "../../../../components/common/commonTable";
import { item } from "../../../../components/common/commonTable/mockData";
import Thead from "../../../../components/common/commonTable/Thead";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../../../components/common/commonTable/style";
import Boshqalar_kassa from "../../../../components/director/components/boshqalar_kassa/boshqalar_kassa";
import Modal_kassa from "../../../../components/common/modal_kassa/modal_kassa";
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
          <td>{item?.type}</td>
          <td>{item?.payment_type}</td>
          <td>{item?.currency?.title}</td>
          <td>{item?.summa}</td>
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

const CashRegisters = () => {
  const dispatch = useDispatch();
  //   const list = useSelector((state) => state.supplierList.);
  //   console.log(list, "list");

  const [data, setData] = useState([item, item, item, item, item]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isAllChecked, setIsAllChecked] = useState(false);

  const selectAll = () => {
    // select all tbody's tr
    setIsAllChecked(!isAllChecked);
  };

  //   useEffect(() => {
  //     dispatch(func);
  //   }, []);

  //   useEffect(() => {
  //     setData(list);
  //   }, [list]);

  const staticData = useSelector(
    (state) => state.lang.languageData.others.cashRegisters
  );

  return (
    <div>
      <CommonTable
        title={staticData.title}
        isInput={true}
        isButton={true}
        addingBtn={staticData.adding}
        isActive={false}
        tHead={<Thead data={staticData.arr} />}
        tRoad={<TRoad data={data} />}
        handleOpen={handleOpen}
        isAccordion={true}
      />
      <Modal_kassa open={open} handleClose={handleClose}>
        <Boshqalar_kassa />
      </Modal_kassa>
    </div>
  );
};

export default CashRegisters;
