import React from "react";
import { Double, DoubleThWrapper, Icon, ThWrapper } from "./style";

const Thead = () => {
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
          Mahsulot guruhi
          <Icon.FilterIcon
          //onClick={reverseTable}
          />
        </ThWrapper>
      </th>
      <th>
        <ThWrapper>
          Modeli
          <Icon.FilterIcon
          //onClick={reverseTable}
          />
        </ThWrapper>
      </th>
      <th>
        <ThWrapper>
          Kodi
          <Icon.FilterIcon
          //onClick={reverseTable}
          />
        </ThWrapper>
      </th>
      <th>
        <ThWrapper>
          O’lchov usulini tanlang
          <Icon.FilterIcon
          //onClick={reverseTable}
          />
        </ThWrapper>
      </th>
      <th>
        <ThWrapper>
          O’lchov usulini tanlang
          <Icon.FilterIcon
          //onClick={reverseTable}
          />
        </ThWrapper>
      </th>
      <th>
        <ThWrapper>
          Qiymati UZS
          <Icon.FilterIcon
          //onClick={reverseTable}
          />
        </ThWrapper>
      </th>

      <th>
        <ThWrapper>
          Qiymati USD
          <Icon.FilterIcon
          //onClick={reverseTable}
          />
        </ThWrapper>
      </th>
      <th>
        <ThWrapper>
          Izoh
          <Icon.FilterIcon
          //onClick={reverseTable}
          />
        </ThWrapper>
      </th>
    </thead>
  );
};

export default Thead;
