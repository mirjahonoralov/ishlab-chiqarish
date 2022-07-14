
import CommonTable from "../../../common/commonTable";
import {
  item,
  mockData,
} from "../../../common/commonTable/mockData";
import Thead from "../../../common/commonTable/Thead";

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
        </tr>
      ))}
    </>
  );
};


const tHeadData = [
  "Sana",
  "Mijoz ismi",
  "Mijoz yuridik nomi",
  "Savdo yo’nalishi",
  "Kassa",
  "To’lov turi",
  "Summa"  
];

function Boshlangich_balans() {
    return(
        <>
          <CommonTable
            title="Boshlang’ich balans qoldiqlari"
            addingBtn="To’lov qo’shish"
            isAccordion={true}
            isInputBtn={true}
            isButton={true} isInput={true} 
            tHead={<Thead data={tHeadData} />}
            tRoad={<TRoad data={data} />}
          />
        </>
    )
}
export default Boshlangich_balans