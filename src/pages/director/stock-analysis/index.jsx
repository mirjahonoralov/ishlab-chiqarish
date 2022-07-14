import React from "react";
import CommonTable from "../../../components/common/commonTable";
import Thead from "../../../components/common/commonTable/Thead";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const TRoad = ({ data }) => {
  return (
    <>
      {data.map((item, id) => (
        <tr key={id}>
          <td>Xomashyo</td>
          <td>4000</td>
          <td>5.000</td>
          <td>60.000</td>
          <td>150</td>
          <td>25</td>
          <td>2.000.00</td>
          <td>555</td>
          <td>20.000</td>
          <td>50%</td>
          <td>16.1%</td>
          <td>20%</td>
          <td>200.000</td>
          <td>1.000.000</td>
          <td>84%</td>
          <td>Xomashyo</td>
          <td>1000.00</td>
        </tr>
      ))}
    </>
  );
};

const tHeadData = [
  "Mahsulot",
  "Qoldiq dona",
  "Kirim narxi",
  "Sotish narxi",
  "O’rtacha kunlik savdo",
  "Normativ kun",
  "Umumiy qoldiq so’m",
  "Qoldiq kun",
  "Yalpi daromad kunlik",
  "Yalpi daromad ulushlari",
  "Marja",
  "Ustama",
  "OSS sababli yo’qotish",
  "Muzlatilgan pul",
  "Muzlatilgan pul qoldiqga nisbatan foiz",
  "Kerakli maxsulot",
  "Kerakli pul",
];

const StockAnalysis = () => {
  return (
    <CommonTable
      title={"Ombotr taxlili"}
      tHead={<Thead data={tHeadData} />}
      tRoad={<TRoad data={data} />}
    />
  );
};

export default StockAnalysis;
