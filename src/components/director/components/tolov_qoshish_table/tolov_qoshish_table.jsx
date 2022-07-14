
import { useState } from "react";

import CommonTable from "./../../../common/commonTable";
import {
  item,
  mockData,
} from "./../../../common/commonTable/mockData";
import Thead from "./../../../common/commonTable/Thead";
import Modal_common from "../../../common/super_modal/super_modal";
import Tolov_form from "../tolov_form/tolov_form";
const data = [item, item, item, item, item];
const TRoad = ({ data }) => {

  return (
    <>
      {data.map((item) => (
        <tr key={item.id}>
          <td>
            <input
              type="checkbox"
              name=""
            />
          </td>
          <td>{item?.currency?.created_at.substr(0, 10)}</td>
          <td>{item?.supplier?.fullname}</td>
          <td>{item?.supplier?.product_name}</td>
          <td>{item?.payment_type}</td>
          <td>{item?.currency?.title}</td>
          <td>{item?.amount}</td>
          <td>{item?.description}</td>
          <td>{item?.currency?.title}</td>
          <td>{item?.description}</td>
          <td>{item?.currency?.title}</td>
        </tr>
      ))}
    </>
  );
};
const tHeadData = [
  "Mijoz",
  "Mijoz balans",
  "Buyurtma kodi",
  "Buyurtma topshirilgan sana",
  "To’lov muddati",
  "To’lov usuli",
  "Summa",
  "Yopildi",
  "Qolgan qarz",
  "Izoh"
];


function Tolov_qoshish() {
  const [open, setOpen] =  useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return(
        <>
        <CommonTable   
        addingBtn="To’lov qo’shish"
        isAccordion={true}
          isInputBtn={true}      
          handleOpen={handleOpen}    
          tHead={<Thead data={tHeadData} />}
            tRoad={<TRoad data={data} />} title="Mijoz to’lovlari" isButton={true} isInput={true} isActive={false}/>
  
  <Modal_common open={open} handleClose={handleClose}>
        <Tolov_form />
      </Modal_common>
        </>
    )
}
export default Tolov_qoshish