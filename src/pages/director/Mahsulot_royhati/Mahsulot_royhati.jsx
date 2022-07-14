import { useState } from "react";
import CommonTable from "../../../components/common/commonTable"
import { item } from "../../../components/common/commonTable/mockData";
import Thead from "../../../components/common/commonTable/Thead";
import { Icon } from "../../../components/common/commonTable/style";
function Mahsulot_royhati() {
    const tHeadData = [
        "Sana",
        "Maxsulot",
        "Mijoz",
        "Model",
        "Rang",
        "Rang kodi",
        "O’lchov usuli",
        "Qoldiq ombor",
        "Yaroqsiz"
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
            <td>{item?.currency?.title}</td>
            <td>{item?.currency?.title}</td>
            <td>{item?.currency?.title}</td>
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
              />
              <Icon.Trash
              />
            </td>
          </tr>
        ))}
      </>
    );
  };
  const [data, setData] = useState([item, item, item, item, item]);

    return(
        <>
        <CommonTable
                title="Mahsulot ro’yhati"
                isInput={true}
                isButton={false}
                isActive={false}
                tHead={<Thead data={tHeadData} />}
                tRoad={<TRoad data={data} />}
                isAccordion={false}
        />
        </>
    )
}
export default Mahsulot_royhati