import React from "react";
import CommonTable from "../../../components/common/commonTable";
import Thead from "../../../components/common/commonTable/Thead";

const data = [1, 2, 3, 4, 6, 7];
const Invalids = () => {
  const TRoad = ({ data }) => {
    return (
      <>
        {data.map((item, id) => (
          <tr key={id}>
            <td>Xomashyo</td>
            <td>1</td>
            <td>Yashil</td>
            <td>289672</td>
            <td>17.06.2022</td>
            <td>Erkaboy Toirov</td>
          </tr>
        ))}
      </>
    );
  };

  const tHeadData = [
    "Maxsulot nomi",
    "Partiya kodi",
    "Rang",
    "Rang kodi",
    "Ro’yhatga olingan vaqti",
    "Muallifs",
  ];
  return (
    <CommonTable
      title="Yaroqsizlar"
      isInput={true}
      isButton={false}
      isActive={false}
      tHead={<Thead data={tHeadData} />}
      tRoad={<TRoad data={data} />}
      isAccordion={false}
    />
  );
};

export default Invalids;
