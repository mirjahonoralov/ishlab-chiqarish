import React, { useState } from "react";
import CommonTable from "../../../components/common/commonTable";
import Thead from "../../../components/common/commonTable/Thead";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const TRoad = ({ data, isAllChecked }) => {
  return (
    <>
      {data.map((item, id) => (
        <tr key={id}>
          <td>
            <input
              type="checkbox"
              name=""
              checked={isAllChecked}
              // id={item.id}
              // onClick={() => handleCheck(item.id)}
            />
          </td>
          <td>Abdukarim Mirziyoyev</td>
          <td>Xomashyo</td>
          <td>3 partiya</td>
          <td>Ha / Yo’q</td>
          <td>3-kun</td>
          <td>20.05.2022</td>
        </tr>
      ))}
    </>
  );
};

const tHeadData = [
  "Kelgan joyi",
  "Maxsulot turi",
  "Partiya",
  "Miqdor ",
  "Zarari",
  "Sana ",
];

const InvalidAndReturn = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);

  const selectAll = () => {
    // select all tbody's tr
    console.log("clicked");
    setIsAllChecked(!isAllChecked);
  };

  return (
    <CommonTable
      title={"Yaroqsiz va qaytaruv"}
      tHead={<Thead data={tHeadData} selectAll={selectAll} />}
      tRoad={<TRoad data={data} isAllChecked={isAllChecked} />}
    />
  );
};

export default InvalidAndReturn;
