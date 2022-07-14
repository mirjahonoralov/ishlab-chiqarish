import { v4 as uuidv4 } from "uuid";

import { ReactComponent as dashboard } from "../../assets/icons/sidebar/dashboard.svg";
import { ReactComponent as dashboardWhite } from "../../assets/icons/sidebar/dashboard-white.svg";
import { ReactComponent as time } from "../../assets/icons/sidebar/time.svg";
import { ReactComponent as timeWhite } from "../../assets/icons/sidebar/time-white.svg";
import { ReactComponent as cartWhite } from "../../assets/icons/sidebar/cart-white.svg";
import { ReactComponent as cart } from "../../assets/icons/sidebar/cart.svg";

const getObj = (
  name,
  id,
  to,
  child = true,
  subParent = false,
  count = "none"
) => {
  return {
    name: name,
    id: id,
    to: to,
    child: child,
    subParent: subParent,
    count: count,
  };
};

export const customerSideBarData = [
  {
    main: true,
    name: "Dashboard",
    to: "/customer/dashboard",
    id: uuidv4(),
    icon: dashboard,
    whiteIcon: dashboardWhite,
  },
  {
    main: true,
    name: "Yangi buyutmalar",
    to: "/customer/new-orders",
    id: uuidv4(),
    icon: cart,
    whiteIcon: cartWhite,
    subMenu: [
      getObj(
        "Yangi buyurtma berish",
        uuidv4(),
        "/customer/new-orders/placing-new-order",
        true
      ),
      getObj(
        "Buyurtmani o’zgartirish",
        uuidv4(),
        "/customer/new-orders/change-order",
        true
      ),
      getObj(
        "Ombordagi tayyor mahsulot",
        uuidv4(),
        "/customer/new-orders/stock-product",
        true
      ),
    ],
  },
  {
    main: true,
    name: "Buyurtma tarixi",
    to: "/customer/order-history",
    id: uuidv4(),
    icon: time,
    whiteIcon: timeWhite,
  },
];
