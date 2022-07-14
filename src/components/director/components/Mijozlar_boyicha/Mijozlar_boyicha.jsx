
import CommonTable from "./../../../common/commonTable";
import {
  item,
  mockData,
} from "./../../../common/commonTable/mockData";
import Thead from "./../../../common/commonTable/Thead";

const data = [item, item, item, item, item];
const tHeadData = [
  "Mijoz indentifikatori",
  "Mijoz INN",
  "Mijoz ismi",
  "Mijoz yuridik nomi",
  "Telefon",
  "Hudud",
  "Malumot nuqtasi",
  "Davr boshidagi  qoldiq",
  "Mijoz kerak",
  "Mijoz yopildi",
  "Davr oxridagi qoldiq"
];

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
          <td>{item?.description}</td>
          <td>{item?.amount}</td>
          <td>{item?.supplier?.product_name}</td>
          <td>{item?.description}</td>
          <td>{item?.currency?.title}</td>
          <td>{item?.supplier?.fullname}</td>
        </tr>
      ))}
    </>
  );
};

function Mijozlar_boyicha() {
    return(
        <>
         <CommonTable
            title="Mijozlar bo’yicha pul aylanmalar"
            isAccordion={true}
            addingBtn="To’lov qilish"
            isInputBtn={true}
            isButton={true} isInput={true} 
            tHead={<Thead data={tHeadData} />}
            tRoad={<TRoad data={data} />}
          />
        </>
    )
}
export default Mijozlar_boyicha