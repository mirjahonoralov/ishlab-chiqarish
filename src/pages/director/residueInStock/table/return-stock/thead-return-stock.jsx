import React from "react";
import { Double, DoubleThWrapper, Icon, ThWrapper } from "../style";

const TheadReturnStock = () => {
  return (
    <thead>
      <th>
        <ThWrapper>
          Mahsulot nomi
          <Icon.FilterIcon
          //onClick={reverseTable}
          />
        </ThWrapper>
      </th>

      <th colSpan={2}>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "end",
          }}
        >
          <DoubleThWrapper>
            <div>Qaytish so'rovlari</div>
            <Double>
              <div>Dona</div>
              <div>Sum</div>
            </Double>
          </DoubleThWrapper>
          <Icon.FilterIcon
          //onClick={reverseTable}
          />
        </div>
      </th>
      <th colSpan={2}>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "end",
          }}
        >
          <DoubleThWrapper>
            <div>Mavjud</div>
            <Double>
              <div>Dona</div>
              <div>Sum</div>
            </Double>
          </DoubleThWrapper>
          <Icon.FilterIcon
          //onClick={reverseTable}
          />
        </div>
      </th>
    </thead>
  );
};

export default TheadReturnStock;
