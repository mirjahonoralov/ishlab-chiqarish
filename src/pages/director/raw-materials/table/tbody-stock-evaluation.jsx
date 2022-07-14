import React from "react";

const TbodyStockEvaluation = () => {
  let item = {
    product_name: "Dena - yashil olma 1 l",
    product_code: 5487,
    real_balance: {
      count: 465,
      price: 46847,
    },
    total_real_balance: 465489789,
    new_orders: {
      count: 465,
      price: 46847,
    },
    total_new_orders: 67154,
    available: {
      count: 465,
      price: 46847,
    },
    total_available: 512456,
  };

  const data = [item, item, item, item, item, item, item, item, item];

  return (
    <tbody>
      {data.map((item, id) => {
        return (
          <tr key={id}>
            <td>{item.product_name}</td>
            <td>{item.product_code}</td>
            <td>{item.real_balance.count}</td>
            <td>{item.real_balance.price}</td>
            <td>{item.new_orders.count}</td>
            <td>{item.new_orders.price}</td>
            <td>{item.available.count}</td>
            <td>{item.available.price}</td>
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

export default TbodyStockEvaluation;
