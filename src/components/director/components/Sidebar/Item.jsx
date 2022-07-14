import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, ListItemIcon, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Circle,
  CustomList,
  CustomListItemButton,
  Line,
  SubParentCircle,
} from "./style";

const Item = ({ item, isClosed, showSidebar, setCurrId, currId }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (itemId) => {
    setCurrId(itemId);
    setOpen(!open);
    showSidebar(true);
  };

  useEffect(() => setOpen(false), [isClosed]);

  if (item?.subMenu && item?.isRouted)
    return (
      <Link to={item?.to}>
        <CustomListItemButton
          key={item.id}
          parent={open && item?.parent}
          isMain={open && item?.main}
          sx={{
            minHeight: 44,
            px: 2.5,
          }}
          onClick={() => handleClick(item.id)}
          isClosed={!isClosed}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              justifyContent: "center",
            }}
          >
            {item?.icon && (open ? <item.whiteIcon /> : <item.icon />)}
            {item?.subParent && <SubParentCircle />}
          </ListItemIcon>
          {isClosed && (
            <ListItemText
              primary={item.name}
              style={{
                color:
                  item.main && open
                    ? "#fff"
                    : !item.main && item.id === currId
                    ? "#289672"
                    : " #526581",
                fontSize: !item?.main && "14px !important",
              }}
            />
          )}
          {isClosed &&
            (open ? (
              <ExpandLess style={{ color: " #526581" }} />
            ) : (
              <ExpandMore style={{ color: " #526581" }} />
            ))}
        </CustomListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <CustomList
            style={{
              padding: (!item?.parent || item?.subParent) && "0",
              background: (item.main || item.parent) && "#CCE9DD",
              marginBottom: open && "15px",
            }}
            component="div"
            disablePadding
          >
            {item.subMenu.map((subItem) => (
              <Item
                isClosed={isClosed}
                item={subItem}
                key={subItem.id}
                currId={currId}
                setCurrId={setCurrId}
                showSidebar={showSidebar}
              />
            ))}
          </CustomList>
        </Collapse>
      </Link>
    );

  if (item?.subMenu)
    return (
      <>
        <CustomListItemButton
          key={item.id}
          parent={open && item?.parent}
          isMain={open && item?.main}
          sx={{
            minHeight: 44,
            px: 2.5,
          }}
          onClick={() => handleClick(item.id)}
          isClosed={!isClosed}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              justifyContent: "center",
            }}
          >
            {item?.icon && (open ? <item.whiteIcon /> : <item.icon />)}
            {item?.subParent && <SubParentCircle />}
          </ListItemIcon>
          {isClosed && (
            <ListItemText
              primary={item.name}
              style={{
                color:
                  item.main && open
                    ? "#fff"
                    : !item.main && item.id === currId
                    ? "#289672"
                    : " #526581",
                fontSize: !item?.main && "14px !important",
              }}
            />
          )}
          {isClosed &&
            (open ? (
              <ExpandLess style={{ color: " #526581" }} />
            ) : (
              <ExpandMore style={{ color: " #526581" }} />
            ))}
        </CustomListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <CustomList
            style={{
              padding: (!item?.parent || item?.subParent) && "0",
              background: (item.main || item.parent) && "#CCE9DD",
              marginBottom: open && "15px",
            }}
            component="div"
            disablePadding
          >
            {item.subMenu.map((subItem) => (
              <Item
                isClosed={isClosed}
                item={subItem}
                key={subItem.id}
                currId={currId}
                setCurrId={setCurrId}
                showSidebar={showSidebar}
              />
            ))}
          </CustomList>
        </Collapse>
      </>
    );
  else
    return (
      <Link to={item?.to}>
        <CustomListItemButton
          changeTheme={open}
          child={item?.child}
          sx={{
            px: 2.5,
          }}
          isMain={open && item?.main}
          onClick={() => handleClick(item.id)}
          isClosed={!isClosed}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              justifyContent: "center",
            }}
          >
            {item?.icon && (open ? <item.whiteIcon /> : <item.icon />)}
            {item?.child && <Line count={item.count} />}
            {item?.child && <Circle />}
            {item?.subParent && <SubParentCircle />}
          </ListItemIcon>
          {isClosed && (
            <ListItemText
              style={{
                color:
                  item.main && open
                    ? "#fff"
                    : !item.main && item.id === currId
                    ? "#289672"
                    : " #526581",
                fontSize: !item?.main && "14px !important",
              }}
              primary={item.name}
            />
          )}
        </CustomListItemButton>
      </Link>
    );
};

export default Item;
