import React from "react";
import Table from "./table";

const data = [1, 2, 3, 4, 5];

const TRoad = () => {
  return (
    <>
      {data.map((item, id) => {
        return (
          <tr key={id}>
            <td>Xomashyo</td>
            <td>56</td>
            <td>56</td>
            <td>541630</td>
            <td>Kilo</td>
            <td>Soni</td>
          </tr>
        );
      })}
    </>
  );
};

const RawMaterials = () => {
  return <Table title={"Homashyolar"} tRoad={<TRoad />} />;
};

export default RawMaterials;
