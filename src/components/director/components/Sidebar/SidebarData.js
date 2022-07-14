import { v4 as uuidv4 } from "uuid";
import { ReactComponent as dashboard } from "../../../../assets/icons/sidebar/dashboard.svg";
import { ReactComponent as dashboardWhite } from "../../../../assets/icons/sidebar/dashboard-white.svg";
import { ReactComponent as dollar } from "../../../../assets/icons/sidebar/dollar.svg";
import { ReactComponent as dollarWhite } from "../../../../assets/icons/sidebar/dollar-white.svg";
import { ReactComponent as market } from "../../../../assets/icons/sidebar/market.svg";
import { ReactComponent as marketWhite } from "../../../../assets/icons/sidebar/market-white.svg";
import { ReactComponent as cube } from "../../../../assets/icons/sidebar/cube.svg";
import { ReactComponent as cubeWhite } from "../../../../assets/icons/sidebar/cube-white.svg";
import { ReactComponent as user } from "../../../../assets/icons/sidebar/user.svg";
import { ReactComponent as userWhite } from "../../../../assets/icons/sidebar/user-white.svg";
import { ReactComponent as home } from "../../../../assets/icons/sidebar/home.svg";
import { ReactComponent as homeWhite } from "../../../../assets/icons/sidebar/home-white.svg";

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

export const SidebarData = [
  {
    main: true,
    name: "Dashboard",
    to: "/director/dashboard",
    id: uuidv4(),
    icon: dashboard,
    whiteIcon: dashboardWhite,
  },
  {
    main: true,
    name: "Moliya",
    to: "/director/finance",
    id: uuidv4(),
    icon: dollar,
    whiteIcon: dollarWhite,
    subMenu: [
      getObj(
        "Kassa hisoboti",
        uuidv4(),
        "/director/finance/cash-report",
        false
      ),
      {
        parent: true,
        name: "Moliya",
        to: "/director/finance/finance",
        id: uuidv4(),
        subMenu: [
          getObj(
            "Mijoz",
            uuidv4(),
            "/director/finance/finance/client",
            true,
            false,
            "first"
          ),
          getObj(
            "Yetkazib beruvchi",
            uuidv4(),
            "/director/finance/finance/supplier",
            true
          ),
          getObj(
            "Boshqalar",
            uuidv4(),
            "/director/finance/finance/others",
            true
          ),
        ],
      },
    ],
  },
  {
    main: true,
    name: "Sotuv",
    to: "/director/sale",
    id: uuidv4(),
    icon: market,
    whiteIcon: marketWhite,
    subMenu: [
      {
        parent: true,
        name: "Mijozlar",
        to: "/director/sale/clients",
        id: uuidv4(),
        subMenu: [
          getObj(
            "Ro‘yxati",
            uuidv4(),
            "/director/sale/clients/list",
            false,
            true
          ),
          getObj(
            "Tahlili",
            uuidv4(),
            "/director/sale/clients/analysis",
            false,
            true
          ),
        ],
      },
      {
        parent: true,
        name: "Mahsulot boshqaruvi",
        to: "/director/sale/product-management/",
        id: uuidv4(),
        subMenu: [
          {
            subParent: true,
            parent: true,
            name: "Mahsulot ro‘yxati",
            id: uuidv4(),
            isRouted: true,
            to: "/director/sale/product-management/product-list/",
            subMenu: [
              getObj(
                "Ombordagi qoldiq",
                uuidv4(),
                "/director/sale/product-management/product-list/residue-in-stock"
              ),
              getObj(
                "Yaroqsizlar",
                uuidv4(),
                "/director/sale/product-management/product-list/invalids"
              ),
            ],
          },
          {
            subParent: true,
            parent: true,
            name: "Narx siyosati",
            id: uuidv4(),
            isRouted: true,
            to: "/director/sale/product-management/price-policy",
            subMenu: [
              getObj(
                "Model belgilash",
                uuidv4(),
                "/director/sale/product-management/price-policy/model-definition"
              ),
              getObj(
                "Narxlash",
                uuidv4(),
                "/director/sale/product-management/price-policy/pricing"
              ),
            ],
          },
          {
            subParent: true,
            parent: true,
            name: "Mahsulot taxlili",
            id: uuidv4(),
            to: "/director/sale/product-management/product-analysis",
          },
        ],
      },
      {
        parent: true,
        name: "Buyurtmalar",
        id: uuidv4(),
        to: "/director/sale/orders",
        subMenu: [
          getObj(
            "Xozir tayyorlanayotganlar",
            uuidv4(),
            "/director/sale/orders/preparing-now",
            false,
            true
          ),
          getObj(
            "Tayyor buyurtmalar",
            uuidv4(),
            "/director/sale/orders/ready-orders",
            false,
            true
          ),
          getObj(
            "Buyurtmalar ro’yhati",
            uuidv4(),
            "/director/sale/orders/orders-list",
            false,
            true
          ),
          getObj(
            "Buyurtmalar formasi",
            uuidv4(),
            "/director/sale/orders/orders-form",
            false,
            true
          ),
        ],
      },
    ],
  },
  {
    main: true,
    // parent: true,
    name: "Ombor",
    to: "/director/stock",
    id: uuidv4(),
    icon: home,
    whiteIcon: homeWhite,
    subMenu: [
      {
        // subParent: true,
        parent: true,
        name: "Ombor dashboard",
        isRouted: true,
        to: "/director/stock/stock-dashboard/",
        id: uuidv4(),
        subMenu: [
          {
            subParent: true,
            name: "Xomashyolar",
            isRouted: true,
            to: "/director/stock/stock-dashboard/raw-material",
            id: uuidv4(),
            subMenu: [
              getObj(
                "Tayyor maxsulotlar",
                uuidv4(),
                "/director/stock/stock-dashboard/ready-product",
                false,
                true
              ),
              getObj(
                "Tarimtayyor",
                uuidv4(),
                "/director/stock/stock-dashboard/semi-finished",
                false,
                true
              ),
              getObj(
                "Uskunalar",
                uuidv4(),
                "/director/stock/stock-dashboard/equipment",
                false,
                true
              ),
            ],
          },
          getObj(
            "Yaroqsiz va qaytuv",
            uuidv4(),
            "/director/stock/invalid-and-return",
            false
          ),
          getObj(
            "Ombor taxlili",
            uuidv4(),
            "/director/stock/stock-analysis",
            false
          ),
        ],
      },
    ],
  },
  {
    main: true,
    name: "HR",
    to: "/director/hr/",
    id: uuidv4(),
    icon: user,
    whiteIcon: userWhite,
    subMenu: [
      getObj("Dashboard", uuidv4(), "/director/hr/dashboard", false),
      {
        parent: true,
        name: "Ma’lumotlar bazasi",
        isRouted: true,
        // subParent: true,
        to: "/director/hr/database/",
        id: uuidv4(),
        subMenu: [
          getObj(
            "Xodimlar ro’yhati",
            uuidv4(),
            "/director/hr/database/staff-list",
            false,
            true
          ),
          getObj(
            "Xodimlarni ro‘yxatga olish",
            uuidv4(),
            "/director/hr/database/staff-registration",
            false,
            true
          ),
          getObj(
            "Xodimlar xujjatlarini ro’yhatga olish",
            uuidv4(),
            "/director/hr/database/registration-staff-document",
            false,
            true
          ),
        ],
      },
      getObj("Recruitment", uuidv4(), "/director/recruitment", false),
      getObj("Adaptassiya", uuidv4(), "/director/hr/adaptation", false),
      {
        parent: true,
        name: "Davomat",
        isRouted: true,
        to: "/director/hr/attendance/",
        id: uuidv4(),
        subMenu: [
          getObj(
            "Ish vaqtlari",
            uuidv4(),
            "/director/hr/attendance/work-time",
            false,
            true
          ),
          getObj(
            "Davomat jurnali",
            uuidv4(),
            "/director/hr/attendance/attendance-log",
            false,
            true
          ),
        ],
      },
      {
        parent: true,
        name: "Trening",
        isRouted: true,
        to: "/director/hr/training",
        id: uuidv4(),
        subMenu: [
          getObj(
            "Treninglar ro’yhati",
            uuidv4(),
            "/director/hr/training-list",
            false,
            true
          ),
          getObj(
            "Trening yuklash",
            uuidv4(),
            "/director/hr/training-download",
            false,
            true
          ),
        ],
      },
    ],
  },
  {
    main: true,
    name: "Ishlab chiqarish",
    icon: cube,
    whiteIcon: cubeWhite,
    to: "/director/production/",
    id: uuidv4(),
    subMenu: [
      {
        parent: true,
        name: "Bo’limlarni ko’rish",
        id: uuidv4(),
        to: "/director/production/view-sections/",
        subMenu: [
          getObj(
            "Bo‘limlarni qo‘shish",
            uuidv4(),
            "/director/production/view-sections/adding-section",
            false,
            true
          ),
          getObj(
            "Buyurtma etaplarni qo‘shish",
            uuidv4(),
            "/director/production/view-sections/add-order-steps",
            false,
            true
          ),
          getObj(
            "Buyurtmalar etaplarni o’zgartirish",
            uuidv4(),
            "/director/production/view-sections/change-order-steps",
            false,
            true
          ),
        ],
      },
      getObj(
        "Samaradorlikni kuzatish",
        uuidv4(),
        "/director/production/efficiency-monitoring",
        false
      ),
    ],
  },
];
