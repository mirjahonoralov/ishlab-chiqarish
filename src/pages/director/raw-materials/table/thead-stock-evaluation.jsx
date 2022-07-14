import React from "react";
import { Double, DoubleThWrapper, Icon, ThWrapper } from "./style";

const TheadStockEvaluation = () => {
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
      <th>
        <ThWrapper>
          Mahsulot kodi
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
            <div>Mahsulot nomi</div>
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
            <div>Yangi buyurtmalar</div>
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
            <div> Sotish uchun mavjud</div>
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

export default TheadStockEvaluation;
