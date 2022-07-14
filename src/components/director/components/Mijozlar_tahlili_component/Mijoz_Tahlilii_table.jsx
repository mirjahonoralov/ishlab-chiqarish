import CommonTable from "./../../../common/commonTable";
import {
  item,
  mockData,
  tHeadData,
} from "./../../../common/commonTable/mockData";
import Thead from "./../../../common/commonTable/Thead";
import "./Mijozlar_tahlili.css"
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


function Mijoz_Tahlili_table() {
    return(
        <>
           <CommonTable             isAccordion={false}
 isInputBtn={false}          
           tHead={<Thead data={tHeadData} />}
            tRoad={<TRoad data={data} />} title="Savdo bo’yicha" isButton={false} isInput={false} isActive={false}/>

<CommonTable             isAccordion={false}
 isInputBtn={false}          
           tHead={<Thead data={tHeadData} />}
            tRoad={<TRoad data={data} />} title="Daromad bo’yicha" isButton={false} isInput={false} isActive={false}/>
        </>
    )
}
export default Mijoz_Tahlili_table