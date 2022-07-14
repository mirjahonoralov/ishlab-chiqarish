import React from "react";

const TbodyReturnStock = () => {
  const data = [1, 3, 2, 4, 5, 6, 7, 8, 9];

  return (
    <tbody>
      {data.map((item, id) => {
        return (
          <tr key={id}>
            <td>Dena - yashil olma 1 l</td>
            <td>0</td>
            <td>1457644</td>
            <td>231,00</td>
            <td>0</td>
          </tr>
        );
      })}
      <tr>
        <td>Jami</td>
        <td></td>
        <td>14,682,410,046</td>
        <td>67,454</td>
        <td>14,682,342,592</td>
      </tr>
    </tbody>
  );
};

export default TbodyReturnStock;
