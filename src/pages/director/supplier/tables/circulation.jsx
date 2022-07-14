import React, { useState, useEffect } from "react";
import CommonTable from "../../../../components/common/commonTable";
import { item } from "../../../../components/common/commonTable/mockData";
import Thead from "../../../../components/common/commonTable/Thead";

import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../../../components/common/commonTable/style";

// it changes when backend is ready
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
          <td>{item?.fullname}</td>
          <td>{item?.phone_number}</td>
          <td>{item?.storage?.address}</td>
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

const tHeadData = [
  "Yetkazib beruvchi",
  "Davr boshidagi balans",
  "To’lanishi kerak",
  "Yopilgan",
  "Davr oxridagi balanis",
];

const Circulation = () => {
  const dispatch = useDispatch();
  //   const list = useSelector((state) => state.supplierList.get_suppliers.);
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

  return (
    <div>
      <CommonTable
        title="Yetkazib beruvchilar bo’yicha pul aylanma"
        isInput={false}
        isButton={false}
        isActive={false}
        tHead={<Thead data={tHeadData} selectAll={selectAll} />}
        tRoad={<TRoad data={data} isAllChecked={isAllChecked} />}
        handleOpen={handleOpen}
        isAccordion={true}
      />
    </div>
  );
};

export default Circulation;
