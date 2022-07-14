import { Wrapper , HeaderRight , HeaderRight_div ,ButtonIcon } from "./style-history-orders";
import CommonTable from "../../common/commonTable";
import {
  item,
} from "./../../common/commonTable/mockData";
import Thead from "../../common/commonTable/Thead";
import Like_icons from "./../../../assets/icons/customer-panel/history-order/like_icons.svg"
import UniversalModal from "../../common/unversal_modal/unversal_modal";
import HistoryOrderModal from "./history-modal/history-order-modal";
import { useState } from "react";
const data = [item, item, item, item, item];
const TRoad = ({ data }) => {
    const link_style = {
        fontFamily: 'SF Pro Display',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "150%",
        color: "#3A88FD",  
        marginRight: "10px"
    }
    const [open , setOpen ] = useState(false)
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
  return (
        <>
        {data.map((item) => (
        <tr key={item.id}>
          <td><ButtonIcon onClick={handleOpen}><img src={Like_icons} width={24} height={24} alt={Like_icons} /></ButtonIcon></td>
          <td>{item?.currency?.created_at.substr(0, 10)}</td>
          <td>{item?.currency?.created_at.substr(0, 10)}</td>
          <td>{item?.currency?.created_at.substr(0, 10)}</td>
          <td>{item?.currency?.created_at.substr(0, 10)}</td>
          <td>{item?.currency?.created_at.substr(0, 10)}</td>
          <td>{item?.currency?.created_at.substr(0, 10)}</td>
          <td>{item?.currency?.created_at.substr(0, 10)}</td>
          <td>{item?.currency?.created_at.substr(0, 10)}</td>
          <td>{item?.currency?.created_at.substr(0, 10)}</td>
          <td>{item?.currency?.created_at.substr(0, 10)}</td>
          <td>{item?.currency?.created_at.substr(0, 10)}</td>
          <td>{item?.currency?.created_at.substr(0, 10)}</td>
          <td>{item?.currency?.created_at.substr(0, 10)}</td>
          <td>{item?.currency?.created_at.substr(0, 10)}</td>
        </tr>
      ))}
            <UniversalModal  open={open} handleClose={handleClose}>
            <HistoryOrderModal/>
          </UniversalModal>
        </>
  );
};
const tHeadData = [
    "Baholash",
    "Buyurtma kodi",
    "Berilgan sana",
    "Tugatilgan sana",
    "Mahsulot turi",
    "Rangi",
    "Ip turi",
    "Ip o’lchami",
    "Qozon tipi",
    "Buyurtma kilosi",
    "Buyurtma soni",
    "Yuborilish manzili",
    "Telefon raqam",
    "To’lov turi",
    "Buyurtma qiymati",
  ];
const HistoryOrdersComponents = () =>{
    return(
        <>
                <CommonTable
        title="Buyurtmalar tarixi"
        Component={<HeaderRight>
       <div>
         <span>Qarzdorlik</span>
        <HeaderRight_div>
            <p>215, 45452 UZS</p>
            <p>$125477 USD</p>
        </HeaderRight_div>
        </div>
        <div>
        <span>Qarzdorlik</span>
            <HeaderRight_div>
                <p>215, 45452 UZS</p>
                <p>$125477 USD</p>
            </HeaderRight_div>
            </div>
        </HeaderRight>}
        isAccordion={true}
        isInputBtn={false}
        isButton={false} isInput={false} 
        tHead={<Thead data={tHeadData} />}
        tRoad={<TRoad data={data} />}
      /> 

        </>
    )
}
export default HistoryOrdersComponents