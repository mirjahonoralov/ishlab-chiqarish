import React from "react";
import Table from "./table";

let item = {
  product_name: "Dena - yashil olma 1 l",
  product_code: 5487,
  real_balance: 110288,
  total_real_balance: 110288,
  new_orders: 67154,
  total_new_orders: 67154,
  available: 512456,
  total_available: 512456,
};

const data = [item, item, item, item, item, item, item, item, item];

const TRoad = () => {
  return (
    <>
      {data.map((item, id) => {
        return (
          <tr key={id}>
            <td>{item.product_name}</td>
            <td>{item.product_code}</td>
            <td>{item.real_balance}</td>
            <td>{item.new_orders}</td>
            <td>{item.available}</td>
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
    </>
  );
};

const ResidueInStock = () => {
  const products = ["Dena mahsuloti", "Dana zavrik", "Coca cola", "Pepsi"];
  return (
    <div>
      {products.map((item, id) => (
        <Table title={item} key={id} tRoad={<TRoad data={data} />} />
      ))}
    </div>
  );
};

export default ResidueInStock;
