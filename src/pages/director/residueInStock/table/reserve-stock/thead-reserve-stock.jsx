import React from "react";
import { Double, DoubleThWrapper, Icon, ThWrapper } from "../style";

const TheadReserveStock = () => {
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
            <div>Qoldiq</div>
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

export default TheadReserveStock;
