import { Wrapper } from "./style-orders-table-modal";
import CommonTable from "../../../common/commonTable";
import {
  item,
} from "./../../../common/commonTable/mockData";
import Thead from "../../../common/commonTable/Thead";
import Link_icons from "./../../../../assets/icons/customer-panel/orders/link_icons.svg"
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
  return (
        <>
        {data.map((item) => (
        <tr key={item.id}>
          <td>{item?.supplier?.fullname}</td>
          <td>{item?.currency?.created_at.substr(0, 10)}</td>
          <td><a style={link_style} href="#">{item?.supplier?.product_name}</a><img style={{marginLeft : "10px"}} src={Link_icons} width={24} height={24} alt={Link_icons} /></td>
          <td><a style={link_style} href="#">{item?.currency?.title}</a> <img src={Link_icons} width={24} height={24} alt={Link_icons} /></td>
        </tr>
      ))}
        </>
  );
};
  const tHeadData = [
    "F.I.SH",
    "Telefon raqami",
    "WhatsApp link",
    "Telegram user",
  ];
const OrdersTableModal = () =>{
    return(
        <CommonTable
            title="Sotuv xodimlar ro’yhati"
            isAccordion={false}
            isInputBtn={false}
            isButton={false} isInput={false} 
            tHead={<Thead data={tHeadData} />}
            tRoad={<TRoad data={data} />}
          /> 
    )
}
export default OrdersTableModal