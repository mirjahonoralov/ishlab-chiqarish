import React from "react";
import List from "./tables/list";
import Payments from "./tables/payments";
import Circulation from "./tables/circulation";
import InitialBalance from "./tables/initial-balance";
import Akt_sverk from "./tables/akt-sverk";
const Supplier = () => {
  return (
    <div>
      <List />
      <Payments />
      <Circulation />
      <Akt_sverk/>
      <InitialBalance />
    </div>
  );
};

export default Supplier;
