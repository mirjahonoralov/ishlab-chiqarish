import { Pagination } from "@mui/material";
import React, { useState } from "react";
import { Footer, Wrapper } from "./style";

const Table = ({ thead, tbody, pagination }) => {
  const [count, setCount] = useState(2000);
  const [page, setPage] = useState(1);

  const selectPage = (e) => {
    console.log(+e.target.innerText);
    setPage(+e.target.innerText);
  };
  return (
    <>
      <Wrapper>
        <table>
          {thead}
          {tbody}
        </table>
      </Wrapper>
      {pagination && (
        <Footer>
          <div>
            {count} ta yozuvdan {page * 10 - 9} dan {page * 10} gacha
            koʻrsatilmoqda
          </div>
          <Pagination
            count={count}
            variant="outlined"
            shape="rounded"
            onChange={selectPage}
            style={{
              flexDirection: "row",
              justifyContent: "end",
              margin: "0",
              width: "50%",
            }}
          />
        </Footer>
      )}
    </>
  );
};

export default Table;
