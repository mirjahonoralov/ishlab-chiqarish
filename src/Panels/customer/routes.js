import ChangeOrderPage from "../../pages/customer/change-order";
import New_orders from "../../pages/customer/new_orders/new_orders";
import StockProductPage from "../../pages/customer/stock-product";

import Profile from "../../pages/customer/profile/profile";
import HistoryOrders from "../../pages/customer/history-orders/history-orders";
export const customerRoutes = [
  {
    id: 1,
    path: "/customer/new-orders/placing-new-order",
    Element: New_orders,
  },
  {
    id: 2,
    path: "/customer/new-orders/change-order",
    Element: ChangeOrderPage,
  },
  {
    id: 3,
    path: "/customer/new-orders/stock-product",
    Element: StockProductPage,
  },
  {
    id: 4,
    path: "/customer/order-history",
    Element: HistoryOrders,
  },
  {
    id: 5,
    path: "/customer/profile",
    Element: Profile,
  },
];
