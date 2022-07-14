import React, { useState, useEffect } from "react";
import CommonTable from "../../../../components/common/commonTable";
import { item } from "../../../../components/common/commonTable/mockData";
import Thead from "../../../../components/common/commonTable/Thead";
import ModalCommon from "../../../../components/common/super_modal/super_modal";

import BoshqalarKassa from "../../../../components/director/components/boshqalar_kassa/boshqalar_kassa";
import BoshqalarChiqim from "../../../../components/director/components/boshqalar_chiqim/boshqalar_chiqim";
import BoshqaKirim from "../../../../components/director/components/boshqalar_kirim/boshqalar_kirim";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../../../redux/yetgazib_berish/listSlice";
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

const tHeadData = ["Ism va familyasi", "Ism va familyasi", "Manzil"];

const List = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.supplierList.get_suppliers.list);
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
    console.log(getList, "list func");
    dispatch(getList());
  }, []);

  useEffect(() => {
    setData(list);
  }, [list]);

  return (
    <div>
      <CommonTable
        title="Yetkazib beruvchilar ro’yhati"
        isInput={true}
        isButton={true}
        addingBtn="Qo'shish"
        isActive={true}
        tHead={<Thead data={tHeadData} selectAll={selectAll} />}
        tRoad={<TRoad data={data} isAllChecked={isAllChecked} />}
        handleOpen={handleOpen}
        isAccordion={true}
      />

      <ModalCommon open={open} handleClose={handleClose}>
        <BoshqalarChiqim />
      </ModalCommon>
    </div>
  );
};

export default List;
