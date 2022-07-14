import PulStatistikasi from "../../pages/director/dashbard/pul_stat";
import Kassa from "../../pages/director/kassa/kassa";
import Mijozlar_Tahlili from "../../pages/director/mijozlar_tahlili/mijozlar_tahlili";
import Mijoz from "../../pages/director/mijoz/mijoz";
import Others from "./../../pages/director/others/";
import Mijoz_royhati from "../../pages/director/Mijoz_royhati/Mijoz_royhati";
import Mahsulot_royhati from "../../pages/director/Mahsulot_royhati/Mahsulot_royhati";
import Supplier from "../../pages/director/supplier";
import ResidueInStock from "../../pages/director/residueInStock";
import OmborDashboard from "../../pages/director/Ombor_dashboard/Ombor_dashboard";
import NarxSiyosati from "../../pages/director/Narx_siyosat/Narx_siyosat";
import Hozir_tayorlangan from "../../pages/director/Hozir_tayorlangan/Hozir_tayorlangan";
import Invalids from "../../pages/director/invalids";
import RawMaterials from "../../pages/director/raw-materials";
import InvalidAndReturn from "../../pages/director/invalid-and-return";
import StockAnalysis from "../../pages/director/stock-analysis";
import TotalResidueInStock from "../../pages/director/total-residue-in-stock";

export const directorRoutes = [
  {
    id: 1,
    path: "dashboard",
    Element: PulStatistikasi,
  },
  {
    id: 2,
    path: "finance/cash-report",
    Element: Kassa,
  },
  {
    id: 3,
    path: "sale/clients/list",
    Element: Mijozlar_Tahlili,
  },

  {
    id: 4,
    path: "finance/finance/client",
    Element: Mijoz,
  },
  {
    id: 5,
    path: "finance/finance/others",
    Element: Others,
  },
  {
    id: 6,
    path: "finance/finance/supplier",
    Element: Supplier,
  },
  {
    id: 7,
    path: "sale/clients",
    Element: Mijoz_royhati,
  },
  {
    id: 8,
    path: "stock/stock-dashboard/",
    Element: OmborDashboard,
  },
  {
    id: 9,
    path: "sale/product-management/product-list/",
    Element: Mahsulot_royhati,
  },
  {
    id: 10,
    path: "sale/product-management/product-list/residue-in-stock",
    Element: ResidueInStock,
  },
  {
    id: 11,
    path: "sale/product-management/product-list/invalids",
    Element: Invalids,
  },
  {
    id: 12,
    path: "stock/stock-dashboard/raw-material",
    Element: RawMaterials,
  },

  {
    id: 13,
    path: "stock/invalid-and-return",
    Element: InvalidAndReturn,
  },
  {
    id: 14,
    path: "stock/stock-analysis",
    Element: StockAnalysis,
  },
  {
    id: 15,
    path: "stock/total-residue-in-stock",
    Element: TotalResidueInStock,
  },
  {
    id: 16,
    path: "sale/product-management/price-policy",
    Element: NarxSiyosati,
  },

  {
    id: 17,
    path: "orders/Now-prepared",
    Element: Hozir_tayorlangan,
  },
];
