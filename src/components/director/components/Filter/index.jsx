import React, { useState } from "react";
import Selection from "../Selection/Selection";
import { mockData } from "./mockData";
import SearchInput from "./SearchInput";
import { Container, Icon } from "./style";

const countries = [
  { title: "O’zbekiston", year: 1994 },
  { title: "Rossiya", year: 1972 },
  { title: "Turkiya", year: 1974 },
  { title: "USA", year: 2008 },
  { title: "Yaponiya", year: 1957 },
];
const regions = [
  { title: "O’zbekiston", year: 1994 },
  { title: "Rossiya", year: 1972 },
  { title: "Turkiya", year: 1974 },
  { title: "USA", year: 2008 },
  { title: "Yaponiya", year: 1957 },
];

const clients = [
  { title: "O’zbekiston", year: 1994 },
  { title: "Rossiya", year: 1972 },
  { title: "Turkiya", year: 1974 },
  { title: "USA", year: 2008 },
  { title: "Yaponiya", year: 1957 },
];

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);

  const searchCountry = (e) => {
    console.log(e.target.value);
  };
  const searchRegion = (e) => {
    console.log(e.target.value);
  };
  const searchClient = (e) => {
    console.log(e.target.value);
  };
  return (
    <Container changePadding={showFilter}>
      <span
        style={{
          height: "40px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
        onClick={() => setShowFilter(!showFilter)}
      >
        <Icon.Filter /> <div>Filter</div>
      </span>

      {showFilter && (
        <>
          <SearchInput
            placeholder={"Mamlakat"}
            onChange={searchCountry}
            data={countries}
          />
          <SearchInput
            placeholder={"Shahar"}
            onChange={searchRegion}
            data={regions}
          />
          <SearchInput
            placeholder={"Mijozlar"}
            onChange={searchClient}
            data={clients}
          />
          {mockData.map((item) => (
            <Selection key={item.id} item={item} />
          ))}
        </>
      )}
    </Container>
  );
};

export default Filter;
