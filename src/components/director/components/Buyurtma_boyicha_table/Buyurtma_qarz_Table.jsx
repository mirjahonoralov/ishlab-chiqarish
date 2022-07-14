import CommonTable from "../../../common/commonTable";
import { useState } from "react";
import {
  item,
  mockData,
} from "../../../common/commonTable/mockData";
import Thead from "../../../common/commonTable/Thead";
import Modal_common from "../../../common/super_modal/super_modal";
import Buyirtma_qarz from "../buyrtma_qarz/buyirtma_qarz";
const data = [item, item, item, item, item];
const TRoad = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <tr key={item.id}>
          <td>
            <input type="checkbox" name="" />
          </td>
          <td>{item?.currency?.created_at.substr(0, 10)}</td>
          <td>{item?.supplier?.fullname}</td>
          <td>{item?.supplier?.product_name}</td>
          <td>{item?.payment_type}</td>
          <td>{item?.currency?.title}</td>
          <td>{item?.amount}</td>
          <td>{item?.description}</td>
          <td>{item?.supplier?.product_name}</td>
          <td>{item?.description}</td>
          <td>{item?.supplier?.fullname}</td>
          <td>{item?.currency?.title}</td>
        </tr>
      ))}
    </>
  );
};

const tHeadData = [
  "Mijoz",
  "Turi | Yarim tayyor",
  "Summa",
  "To’lov usuli",
  "Yetkazib berish sanasi",
  "Muddati",
  "Yopildi",
  "Qarz qoldig’i",
  "Taqsimlanmagan miqdor",
  "Mijoz balans",
  "Tafsilot"
];

function Buyurtma_qarz() {
  const [open2, setOpen2] = useState(false);
const handleOpen2 = () => setOpen2(true);
const handleClose2 = () => setOpen2(false);

  return (
    <>
      <CommonTable
        title="Buyurtma bo’yicha qarzlar"
        isAccordion={true}
        isInputBtn={true}
        isButton={true}
        isInput={true}
        addingBtn="To’lov qilish"
        tHead={<Thead data={tHeadData} />}
        tRoad={<TRoad data={data} />}
        handleOpen={handleOpen2}
      />

      <Modal_common open={open2} handleClose={handleClose2}>
        <Buyirtma_qarz />
      </Modal_common>
    </>
  );
}
export default Buyurtma_qarz;
