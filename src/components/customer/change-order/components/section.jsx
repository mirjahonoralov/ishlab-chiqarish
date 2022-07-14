import React from "react";
import { Icons, SectionTop, SectionWrapper } from "../style";

const Section = ({ id, label, setSelectedItem }) => {
  const onChange = (id) => {
    console.log(id);
    setSelectedItem(id);
  };

  return (
    <SectionWrapper>
      <SectionTop>
        <input
          type="radio"
          name="radio"
          id={id}
          onChange={() => onChange(id)}
        />
        <label htmlFor={id}>{label}</label>
      </SectionTop>
      <table>
        <tbody>
          <tr>
            <td>
              <div>
                <Icons.Home /> Kompaniya nomi
              </div>
            </td>
            <td>Algorithm Gate Ways</td>
          </tr>
          <tr>
            <td>
              <div>
                <Icons.Check /> Mahsulot turi
              </div>
            </td>
            <td>Yarim tayyor</td>
          </tr>
          <tr>
            <td>
              <div>
                <Icons.Chart /> Ranglar
              </div>
            </td>
            <td>Qizil, Yashil, Sariq</td>
          </tr>
          <tr>
            <td>
              <div>
                <Icons.Yarn /> Ip turi
              </div>
            </td>
            <td>Paxta</td>
          </tr>
          <tr>
            <td>
              <div>
                <Icons.Thread /> Ip o’lchami
              </div>
            </td>
            <td>15458 m</td>
          </tr>

          <tr>
            <td>
              <div>
                <Icons.Pot /> Qozon tipi
              </div>
            </td>
            <td>33 кг, 50 кг, 100 кг, 120 кг</td>
          </tr>

          <tr>
            <td>
              <div>
                <Icons.Cart /> Buyurtma kilosi
              </div>
            </td>
            <td>33 кг, 50 кг, 100 кг, 120 кг</td>
          </tr>

          <tr>
            <td>
              <div>
                <Icons.Cart /> Buyurtma soni
              </div>
            </td>
            <td>15 ta</td>
          </tr>

          <tr>
            <td>
              <div>
                <Icons.Calendar /> Muddat
              </div>
            </td>
            <td>02 / 07 / 2022</td>
          </tr>

          <tr>
            <td>
              <div>
                <Icons.Location /> Yuboriladian manzil
              </div>
            </td>
            <td>Toshkent sh, Chilonzor 20 KV, 1151 uy</td>
          </tr>

          <tr>
            <td>
              <div>
                <Icons.Call /> Telefon raqam
              </div>
            </td>
            <td>+99899 957 86-11</td>
          </tr>

          <tr>
            <td>
              <div>
                <Icons.Dollar /> To’lov turi
              </div>
            </td>
            <td>Naqd</td>
          </tr>
        </tbody>
      </table>
    </SectionWrapper>
  );
};

export default Section;
