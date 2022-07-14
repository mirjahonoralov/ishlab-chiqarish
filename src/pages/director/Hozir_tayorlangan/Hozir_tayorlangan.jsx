import { useState } from "react";
import CommonTable from "../../../components/common/commonTable";
import { item } from "../../../components/common/commonTable/mockData";
import Thead from "../../../components/common/commonTable/Thead";
import { Icon } from "../../../components/common/commonTable/style";
const Hozir_tayorlangan = () =>{
    const tHeadData = [
        "Sana",
        "Isim familiya",
        "Maxsulot",
        "Model",
        "Rang",
        "Rang kodi",
        "Taxminiy tugash vaxti",
        "To’lov turi",

      ];

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
            <td>{item?.payment_type}</td>
            <td>{item?.supplier?.fullname}</td>
            <td>{item?.supplier?.product_name}</td>
            <td>{item?.payment_type}</td>
            <td>{item?.supplier?.product_name}</td>
            <td>{item?.payment_type}</td>
            <td>{item?.supplier?.fullname}</td>
            <td>{item?.payment_type}</td>
            
          </tr>
        ))}
      </>
    );
  };
  const [data, setData] = useState([item, item, item, item, item]);
    return(
        <>
                <CommonTable
                title="Xozir tayyorlanayotganlar"
                isInput={false}
                isButton={false}
                isActive={false}
                tHead={<Thead data={tHeadData} />}
                tRoad={<TRoad data={data} />}
                isAccordion={false}
        />
        
        </>
    )
}
export default Hozir_tayorlangan