import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Pagination,
  } from "@mui/material";
  import React, { useState } from "react";
  import CommonTable from "../../../../components/common/commonTable";
import { item } from "../../../../components/common/commonTable/mockData";
import Thead from "../../../../components/common/commonTable/Thead";
  import { AccordionIcon, Container, Wrapper } from "../../../../components/common/commonTable/style";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Icon } from "../../../../components/common/commonTable/style";
import Akt_SverkHeader from "../../../../components/director/components/akt_sverk/akt_SverkHeader";

const Akt_sverk = ()=>{
    const [selectedItems, setSelectedItems] = useState([]);
    const [page, setPage] = useState(1);
  
    const selectPage = (e) => {
      setPage(+e.target.innerText);
    };
    const handleCheck = (id) => {
        if (selectedItems.includes(id))
          setSelectedItems([...selectedItems.filter((item) => item !== id)]);
        else setSelectedItems([...selectedItems, id]);
      }
      const [isOpened, setIsOpened] = useState(false);
      const TRoad = ({ data, isAllChecked }) => {
        return (
          <>
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    name=""
                    checked={isAllChecked}
                    // id={item.id}
                    // onClick={() => handleCheck(item.id)}
                  />
                </td>
                <td>{item?.payment_type}</td>
                <td>{item?.supplier?.fullname}</td>
                <td>{item?.supplier?.product_name}</td>
                <td>{item?.payment_type}</td>
                <td>{item?.currency?.title}</td>
                <td>{item?.amount}</td>
                <td>{item?.description}</td>
                <td
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "51px",
                    marginRight: "12px",
                  }}
                >
                  <Icon.Edit/>
                  <Icon.Trash/>
                </td>
              </tr>
            ))}
          </>
        );
      };
      
      const tHeadData = [
        "To’lov sanasi",
        "Yetkazib beruvchi ismi",
        "Mahsulot nomi",
        "To’lov turi",
        "Valyuta",
        "Summa",
        "Izoh",
      ];      
    return(
       <>
            <Container>
        <Akt_SverkHeader/>
        <Accordion style={{ boxShadow: "none" }} defaultExpanded={true}>
          <AccordionSummary
            style={{
              position: "absolute",
              top: !isOpened ?"-68px" : "-45px",
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
          >
            
          </AccordionSummary>

          <AccordionDetails>
          <CommonTable
        isInput={false}
        isButton={false}
        addingBtn="To’lov qo’shish"
        isActive={false}
        tHead={<Thead data={tHeadData} />}
        // tRoad={<TRoad data={data} />}
        isAccordion={false}
      />
          </AccordionDetails>
        </Accordion>


    </Container>
       </> 
    )
}
export default Akt_sverk