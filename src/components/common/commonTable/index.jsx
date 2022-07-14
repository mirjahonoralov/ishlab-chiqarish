import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Pagination,
} from "@mui/material";
import React, { useState } from "react";
import Header from "./Header";
import { AccordionIcon, Container, Footer, Wrapper } from "./style";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CommonTable = ({
  title,
  tHead,
  tRoad,
  isButton,
  isInput,
  isActive,
  handleOpen,
  isAccordion,
  addingBtn,
  topControls,
  Component
}) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheck = (id) => {
    if (selectedItems.includes(id))
      setSelectedItems([...selectedItems.filter((item) => item !== id)]);
    else setSelectedItems([...selectedItems, id]);
  };

  const handleEdit = (id) => {
    // edit item with backend
  };

  const handleDelete = (id) => {
    // delete item with backend
  };

  // const reverseTable = () => setTbodyData([...tbodyData.reverse()]);

  const [isOpened, setIsOpened] = useState(false);
  const [count, setCount] = useState(2000);
  const [page, setPage] = useState(1);

  const selectPage = (e) => {
    console.log(+e.target.innerText);
    setPage(+e.target.innerText);
  };
  return (
    <Container>
      <Header
        title={title}
        isButton={isButton}
        isInput={isInput}
        isActive={isActive}
        handleOpen={handleOpen}
        isAccordion={isAccordion}
        addingBtn={addingBtn}
        topControls={topControls}
        Component={Component}
      />
      {isAccordion ? (
        <Accordion style={{ boxShadow: "none" }} defaultExpanded={true}>
          <AccordionSummary
            style={{
              position: "absolute",
              top: !isOpened ? "-68px" : "-45px",
              right: "0",
            }}
            expandIcon={
              <AccordionIcon
                onClick={() => setIsOpened(!isOpened)}
                isOpened={isOpened}
              >
                <ExpandMoreIcon />
              </AccordionIcon>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"></AccordionSummary>

          <AccordionDetails>
            <Wrapper>
              <table>
                {tHead}
                <tbody>{tRoad}</tbody>
              </table>
            </Wrapper>
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
          </AccordionDetails>
        </Accordion>
      ) : (
        <Wrapper>
          <table>
            {tHead}
            <tbody>{tRoad}</tbody>
            <Footer>
              <div>430 ta yozuvdan 1 dan 10 gacha koʻrsatilmoqda</div>
              <Pagination
                count={count}
                variant="outlined"
                shape="rounded"
                onChange={selectPage}
                style={{ flexDirection: "row", justifyContent: "end" }}
              />
            </Footer>
          </table>
        </Wrapper>
      )}
    </Container>
  );
};

export default CommonTable;
