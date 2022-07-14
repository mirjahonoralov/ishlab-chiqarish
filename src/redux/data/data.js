import { SidebarData } from "../../components/director/components/Sidebar/SidebarData";
import { othersData } from "../../pages/director/others/othersData";
import { loginData } from "../../pages/Login/login-data";

export const data = {
  uz: {
    loginData: loginData.uz,
    sidebar: SidebarData.uz,
    others: othersData.uz,
  },
  ru: {
    loginData: loginData.ru,
    sidebar: SidebarData.ru,
    others: othersData.ru,
  },
  en: {
    loginData: loginData.en,
    sidebar: SidebarData.en,
  },
};
