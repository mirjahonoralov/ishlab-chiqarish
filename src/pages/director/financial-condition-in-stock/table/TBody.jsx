import React from "react";

const Tbody = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <tbody>
      {data.map((item, id) => {
        return (
          <tr key={id}>
            <td>Xomashyo</td>
            <td>56</td>
            <td>Samsung</td>
            <td>541630</td>
            <td>Kilo</td>
            <td>Soni</td>
            <td>Kv.metr</td>
            <td>10.000</td>
            <td>Yo’q</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Tbody;
