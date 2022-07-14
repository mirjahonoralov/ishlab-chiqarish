
import CommonTable from "./../../../common/commonTable";
import {
  item,
  mockData,
} from "./../../../common/commonTable/mockData";
import Thead from "./../../../common/commonTable/Thead";
import {Icon} from "./../../../common/commonTable/style"
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
  "Sana",
  "Savdo yo’nalishi",
  "Turi",
  "Debet (qarz)",
  "Debet (qarz)",
  "Izoh",
];


function Akt_mijoz() {
    return(
        <>
          <CommonTable
            title="AKT sverki mijozlar bo’yicha "
            addingBtn="Natijani ko’rsatish"
            isAccordion={true}
            isInputBtn={true}
            isButton={true} isInput={false} 
            tHead={<Thead data={tHeadData} />}
            tRoad={<TRoad data={data} />}
          /> 
        </>
    )
}
export default Akt_mijoz