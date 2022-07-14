import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Pagination,
} from "@mui/material";
import React, { useState } from "react";
import {
  AccordionIcon,
  Container,
  HeaderWrapper,
  Icon,
  SubCategories,
  SubCategory,
  ThWrapper,
  Top,
  TopButton,
  Wrapper,
} from "./style";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TheadStockEvaluation from "./thead-stock-evaluation";
import TbodyStockEvaluation from "./tbody-stock-evaluation";
import Input from "../../../../components/common/Input";
import Selection from "./Selection";

const Table = ({ title, tRoad }) => {
  // const reverseTable = () => setTbodyData([...tbodyData.reverse()]);

  const [isOpened, setIsOpened] = useState(false);
  const [count, setCount] = useState(2000);
  const [page, setPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState(1);
  const [subActiveCategory, setSubActiveCategory] = useState(5);

  const selectPage = (e) => {
    console.log(+e.target.innerText);
    setPage(+e.target.innerText);
  };

  const categories = [
    { name: "Xomashiyo", id: 1 },
    { name: "Yarim tayyor", id: 2 },
    { name: "Tayyor", id: 3 },
    { name: "Furnitura", id: 4 },
  ];

  const subCategories = [
    { name: "Ombordagi umumiy ma’lumot", id: 5, border: "topLeft" },
    { name: "Ombordagi moilaviy holati", id: 6 },
    { name: "Omborni baholash", id: 7, border: "topRight" },
  ];

  const tHeadData = [
    "Mahsulot nomi",
    "Mahsulot guruhi",
    "Modeli ",
    "Kodi",
    "O’lchov usulini tanlang",
    "O’lchov usulini tanlang",
  ];

  const clickCategory = (id) => {
    setActiveCategory(id);
    // get data from backend
  };

  const clickSubCategory = (id) => {
    setSubActiveCategory(id);
    // get data from backend
  };

  return (
    <Container>
      <HeaderWrapper>
        <h2>{title}</h2>
        <Selection />
        <Top>
          {categories.map((category) => (
            <TopButton
              key={category.id}
              onClick={() => clickCategory(category.id)}
              style={{
                background: category.id === activeCategory && "#289672",
                color: category.id === activeCategory && "#fff",
                border: category.id === activeCategory && "none",
              }}
            >
              {category.name}
            </TopButton>
          ))}
        </Top>
        <Input
          width="250px"
          placeholder="Search name, email, or etc."
          icon={<Icon.Search />}
          bg="#fff"
          borderRadius="6px"
          height="40px"
        />
      </HeaderWrapper>
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
          id="panel1a-header"
        ></AccordionSummary>

        <AccordionDetails>
          {activeCategory === categories[0].id && (
            <SubCategories>
              {subCategories.map((subcategory) => (
                <SubCategory
                  border={subcategory?.border}
                  key={subcategory?.id}
                  onClick={() => clickSubCategory(subcategory.id)}
                  style={{
                    background:
                      subcategory.id === subActiveCategory && "#289672",
                    color: subcategory.id === subActiveCategory && "#fff",
                    border: subcategory.id === subActiveCategory && "none",
                  }}
                >
                  {subcategory?.name}
                </SubCategory>
              ))}
            </SubCategories>
          )}
          <Wrapper>
            {subActiveCategory === subCategories[2].id ? (
              <table>
                <TheadStockEvaluation />
                <TbodyStockEvaluation />
              </table>
            ) : (
              <table>
                <thead>
                  {tHeadData.map((item, id) => (
                    <th key={id}>
                      <ThWrapper>
                        {item} <Icon.FilterIcon />
                      </ThWrapper>
                    </th>
                  ))}
                </thead>
                <tbody>{tRoad}</tbody>
              </table>
            )}
          </Wrapper>
        </AccordionDetails>
        <Pagination
          count={count}
          variant="outlined"
          shape="rounded"
          onChange={selectPage}
          style={{ flexDirection: "row", justifyContent: "end" }}
        />
      </Accordion>
    </Container>
  );
};

export default Table;
