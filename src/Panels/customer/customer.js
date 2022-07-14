import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Selector from "../../components/common/selector";
import Sidebar from "../../components/director/components/Sidebar";
import { customerSideBarData } from "./customerSidebarData";
import { customerRoutes } from "./routes";
import companyIcon from "../../assets/icons/sidebar/company-icon.svg";
import plus from "../../assets/icons/sidebar/plus.svg";
import UniversalModal from "../../components/common/unversal_modal/unversal_modal";
import AddCompany from "../../components/customer/add-company/add-company";

const companies = [
  { name: "company" },
  { icon: companyIcon, name: "Algrorithm Gateway LLC" },
  { icon: companyIcon, name: "Epam" },
  { icon: companyIcon, name: "exadel" },
  { icon: plus, name: "companiya qo'shish" },
];

const Customer = () => {
  const [selectedCompany, setSelectedCompany] = useState("company");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const createCompany = (value) => {
    if (value === "companiya qo'shish") setOpen(true);
  };

  const CompanySelect = (
    <Selector
      values={companies}
      selectedValue={selectedCompany}
      setSelectedValue={setSelectedCompany}
      fontSize="16px"
      height={"48px"}
      minWidth="150px"
      onClick={createCompany}
    />
  );

  return (
    <>
      <BrowserRouter>
        <Route exact to="/customer">
          <Sidebar
            sidebarData={customerSideBarData}
            headerComponent={CompanySelect}
          >
            <Switch>
              {customerRoutes.map((item) => (
                <Route exact key={item.id} path={item.path}>
                  <item.Element />
                </Route>
              ))}
            </Switch>
          </Sidebar>
        </Route>
      </BrowserRouter>

      <UniversalModal open={open}>
        <AddCompany handleOpen={handleOpen} />
      </UniversalModal>
    </>
  );
};

export default Customer;
