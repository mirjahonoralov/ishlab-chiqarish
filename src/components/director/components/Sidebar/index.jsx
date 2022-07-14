import { CustomList, Footer, Icon } from "./style";
import "react-pro-sidebar/dist/css/styles.css";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Item from "./Item";
import Header from "../Header";
import logo from "../../../../assets/icons/sidebar/company-icon.svg";
import logout from "../../../../assets/icons/sidebar/logout.svg";

import { SideBarShowCloseIcon } from "../Header/style";
import Filter from "../Filter";
import { useHistory } from "react-router-dom";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = ({ children, sidebarData, headerComponent }) => {
  const history = useHistory();

  const [open, setOpen] = React.useState(true);
  const [currId, setCurrId] = React.useState(null);
  // const sidebarData = useSelector((state) => state.lang.languageData.sidebar);

  const handleLogout = () => {
    // logout
  };

  return (
    <Box sx={{ display: "flex" }} style={{ width: "100vw", height: "100vh" }}>
      <AppBar
        style={{
          background: "#fff",
          padding: "0",
          boxShadow: "none",
          height: "87px",
          display: "flex",
          justifyContent: "center",
          left: open && "278px",
        }}
        position="fixed"
        open={open}
      >
        <Toolbar
          style={{
            padding: "0",
          }}
        >
          <Header headerComponent={headerComponent} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        style={{
          width: "278px !important",
          zIndex: "1201 !important",
        }}
      >
        <DrawerHeader
          style={{ position: "relative", justifyContent: !open && "center" }}
        >
          {open ? (
            <Icon.Logo style={{ margin: "auto" }} />
          ) : (
            <Icon.MiniCrossLogo />
          )}
          <SideBarShowCloseIcon
            onClick={() => setOpen(!open)}
            style={{
              background: "var(--blue)",
              color: "#fff",
              borderRaduis: "5px",
              position: "absolute",
              right: !open && "-15px",
              zIndex: "1205 !important",
            }}
          >
            {!open ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon
                style={{
                  borderRaduis: "5px",
                }}
              />
            )}
          </SideBarShowCloseIcon>
        </DrawerHeader>
        <CustomList>
          {sidebarData?.map((item) => (
            <Item
              currId={currId}
              setCurrId={setCurrId}
              isClosed={open}
              item={item}
              key={item.id}
              showSidebar={setOpen}
            />
          ))}
        </CustomList>

        <Footer style={{ marginTop: "auto" }}>
          <div onClick={() => history.push("/customer/profile")}>
            <img src={logo} alt="logo" /> Algorithm Gate way
          </div>
          <img src={logout} alt="logout" onClick={handleLogout} />
        </Footer>
      </Drawer>
      <Box
        style={{
          margin: "0 auto",
          paddingLeft: open ? "53px" : "30px",
          marginTop: "65px",
          paddingRight: "15px",
          paddingTop: "35px",
          width: open ? "calc(100% - 240px)" : "calc(100vw - 80px)",
        }}
        component="main"
      >
        {/* <Filter /> */}
        {children}
      </Box>
    </Box>
  );
};
export default Sidebar;
