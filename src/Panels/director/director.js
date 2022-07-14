import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "../../components/director/components/Sidebar";
import { SidebarData } from "../../components/director/components/Sidebar/SidebarData";
import { directorRoutes } from "./routes";

export default function Director(props) {
  const { path } = props.match;

  return (
    <React.Fragment>
      <BrowserRouter>
        <Route exact to={path}>
          <Sidebar sidebarData={SidebarData}>
            <Switch>
              {directorRoutes.map((item) => (
                <Route exact key={item.id} path={`/director/${item.path}`}>
                  <item.Element />
                </Route>
              ))}
            </Switch>
          </Sidebar>
        </Route>
      </BrowserRouter>
    </React.Fragment>
  );
}
