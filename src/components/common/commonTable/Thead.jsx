import React from "react";
import { Icon, ThWrapper } from "./style";

const Thead = ({ data, reverseTable, selectAll }) => {
  return (
    <thead>
      {selectAll && (
        <th>
          <input type="checkbox" name="" id="" onClick={() => selectAll()} />
        </th>
      )}
      {/* <th colSpan={2}>fasdf</th> */}
      {data.map((item, id) => (
        <th key={id}>
          <ThWrapper>
            {item} <Icon.FilterIcon onClick={reverseTable} />
          </ThWrapper>
        </th>
      ))}
    </thead>
  );
};

export default Thead;
