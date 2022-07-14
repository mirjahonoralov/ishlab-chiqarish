import styled from "styled-components";
import { ReactComponent as dashboard } from "../../../../assets/icons/sidebar/dashboard.svg";
import { ReactComponent as dashboardWhite } from "../../../../assets/icons/sidebar/dashboard-white.svg";
import { ReactComponent as dollar } from "../../../../assets/icons/sidebar/dollar.svg";
import { ReactComponent as cube } from "../../../../assets/icons/sidebar/cube.svg";
import { ReactComponent as user } from "../../../../assets/icons/sidebar/user.svg";
import { ReactComponent as logo } from "../../../../assets/icons/sidebar/logo.svg";
import { ReactComponent as miniCrossLogo } from "../../../../assets/icons/sidebar/mini-cross-logo.svg";

import List from "@mui/material/List";
import { ListItemButton } from "@mui/material";

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  /* width: 250px; */
  padding-left: 20px;
  position: fixed;
  overflow-y: scroll;
  background: #217cae;
  height: 100%;
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;

const CustomList = styled(List)`
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
  /* gap: 8px; */
  color: #000;
  border-radius: 8px;

  div .MuiListItemButton-root {
    /* background: #289672; */
    color: #000;
  }

  .MuiListItemButton-root {
    /* background: #289672; */
    /* color: #fff; */
  }
`;

const CustomListItemButton = styled(ListItemButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;
  border-radius: ${({ parent }) => parent && "7px 7px 0px 0px"};

  height: 40px;
  height: ${({ child }) => child && "30px"};
  padding: ${({ child }) => child && "0 !important"};
  /* padding: ${({ parent }) => parent && "6px"}; */

  padding-left: 20px;
  padding-left: ${({ child }) => child && "20px !important"};
  padding: ${({ isClosed }) => isClosed && "0"};

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 8px;
  margin-bottom: ${({ parent }) => parent && "0"};
  background-color: ${({ isMain }) => isMain && "#289672"};
  background-color: ${({ parent }) => parent && "#D4EAE3"};
  /* background-color: ${({ parent }) => parent && "#c8e4db"}; */
  color: ${({ isMain }) => isMain && "#fff"};
  color: ${({ parent }) => parent && "#289672"};
  :hover {
    background-color: ${({ isMain }) => (isMain ? "#289672" : "none")};
    background-color: ${({ parent }) => parent && "#c8e4db"};
  }
  div {
    margin-top: 0;
    margin-bottom: 0;
  }

  svg {
    margin-right: 13px;
    margin: ${({ isClosed }) => isClosed && "0"};
  }
`;

const Line = styled.div`
  width: 2px;
  background: var(--blue);
  height: ${({ count }) => (count === "first" ? "19px" : "30px")};
  position: absolute;
  left: 3px;
  bottom: 21px;
`;

const Circle = styled.div`
  position: absolute;
  top: 30%;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  border: 1px solid var(--blue);
  margin-right: 5px;
`;

const SubParentCircle = styled.div`
  position: absolute;
  top: 15px;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  border: 1px solid var(--blue);
  margin-right: 5px;
  background: var(--blue);
`;

const Icon = styled.div`
  /* font-size: 50px; */
`;
Icon.Dashboard = dashboard;
Icon.DashboardWhite = dashboardWhite;
Icon.Dollar = dollar;
Icon.Cube = cube;
Icon.User = user;
Icon.Logo = logo;
Icon.MiniCrossLogo = miniCrossLogo;

const Footer = styled.div`
  margin-top: auto;
  padding: 20px;
  background: #f6f8fa;
  height: 75px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  div {
    display: flex;
    gap: 10px;
    cursor: pointer;
  }

  img {
    cursor: pointer;
  }
`;

export {
  Container,
  Wrapper,
  Icon,
  CustomList,
  CustomListItemButton,
  Circle,
  SubParentCircle,
  Line,
  Footer,
};
