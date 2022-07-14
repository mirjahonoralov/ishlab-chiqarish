import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./language/languageSlice";
import users from "./login/user";
import signUpReducer from "./login/userSignUp";
import verifySlice from "./login/verifySlice";
import list from "./yetgazib_berish/listSlice";

// import orders from "./showroom/order"
// import newCustomer from "./showroom/customer"
// import payment from "./showroom/payment"
// import dashboard from "./showroom/dashboard"
// import tailoring from "./warehouse/tailoring"
// import  warehouse_residues  from "./warehouse/residue"
// import  warehouse_products  from "./warehouse/products"

export const store = configureStore({
  reducer: {
    login: users,
    signUp: signUpReducer,
    verifyUser: verifySlice,
    supplierList: list,
    lang: languageSlice,
    // showroom_orders:orders,
    // newCustomer,
    // payment,
    // dashboard,
    // tailoring,
    // warehouse_residues,
    // warehouse_products
  },
});
