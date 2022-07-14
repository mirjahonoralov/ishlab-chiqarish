import CommonTable from "../../../common/commonTable";
import {
  item,
  mockData,
} from "../../../common/commonTable/mockData";
import Thead from "../../../common/commonTable/Thead";
const NarxSiyosatiTable = ()=>{
const data = [item, item, item, item, item];
const tHeadData3 = [
  "Sotib olish narxi ",
  "Xarajatlar",
  "Maxsulot tannarxi",
  "Foyda/marja foizi",
  "Sotish narxi",
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
          <td>{item?.currency?.created_at.substr(0, 10)}</td>
          <td>{item?.supplier?.fullname}</td>
          <td>{item?.currency?.created_at.substr(0, 10)}</td>

        </tr>
      ))}
    </>
  );
};
return(
    <>
        <CommonTable
                title="Tayyor maxsulot"
                isInput={false}
                isButton={false}
                isActive={false}
                tHead={<Thead data={tHeadData3} />}
                tRoad={<TRoad data={data} />}
                isAccordion={false}
        />
      </>
)
}
export default NarxSiyosatiTable