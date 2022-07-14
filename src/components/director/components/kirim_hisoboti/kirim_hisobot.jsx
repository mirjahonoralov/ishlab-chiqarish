import CommonTable from "../../../../components/common/commonTable";
import {
  item,
  mockData,
} from "../../../../components/common/commonTable/mockData";
import Thead from "../../../../components/common/commonTable/Thead";
import Kirim_hisobot_card from "./kirim_hisobot_card";
import IconSearch from "./../../../../assets/icons/table/search.svg";
import "./kirim_hisobot.css"
const data = [item, item, item, item, item];
const tHeadData = [
  "To’lov turi",
  "Summa",
];
const tHeadData2 = [
  "To’lov turi",
  "Hudud",
  "Naqd pul",
  "Nasiya",
  "Bank o’tkazmalar",
  "Plastik o’tkazmalar",
  "Natija"
];
const tHeadData3 = [
  "Mijoz indentifikatori",
  "Ismi",
  "INN",
  "Umumiy",
  "Naqd pul",
  "Nasiya",
];
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
        </tr>
      ))}
    </>
  );
};
const TRoad2 = ({ data }) => {
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
          <td>{item?.payment_type}</td>
          <td>{item?.currency?.title}</td>
          <td>{item?.amount}</td>
        </tr>
      ))}
    </>
  );
};

const TRoad3 = ({ data }) => {
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
          <td>{item?.payment_type}</td>
          <td>{item?.amount}</td>
        </tr>
      ))}
    </>
  );
};

function Kirim_hisobot() {
  return (
    <>
      <Kirim_hisobot_card />
      <h2 className="kirim_hisobot_heading">Davr uchun daromad</h2>
      <CommonTable
        isAccardion={false}
        tHead={<Thead data={tHeadData} />}
        tRoad={<TRoad data={data} />}
      />

      <h2 className="kirim_hisobot_heading">Hudud bo’yicha</h2>
      <CommonTable
        isAccardion={false}
        tHead={<Thead data={tHeadData2} />}
        tRoad={<TRoad2 data={data} />}
      />
      <h2 className="kirim_hisobot_heading">
        Xaridor tomonidan olingan daromad
      </h2>
      <CommonTable
        isAccardion={false}
        tHead={<Thead data={tHeadData3} />}
        tRoad={<TRoad3 data={data} />}
      />
    </>
  );
}
export default Kirim_hisobot;
