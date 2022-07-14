import React from "react";
// import Login from "./components/login/login";
import Director from "./Panels/director/director";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

// login
import Login from "./pages/Login";
import CustomerSignIn from "./pages/Login/CustomerSignIn";
import CustomerSignUp from "./pages/Login/CustomerSignUp";
import SignUpVerify from "./pages/Login/SignUpVerify";

import Cookies from "universal-cookie";
import { useSelector } from "react-redux";
import Customer from "./Panels/customer/customer";

function App() {
  const role = useSelector((state) => state.login.role);
  // const cookies = new Cookies();
  // const role = cookies.get("role");
  // const [cookeRole, setCookeRole] = useState("")
  // useEffect(() =>{},[role])

  const history = useHistory();

  const link = window.location.pathname;
  if (link === "/") history.replace("/login");
  // if (link === "/director") history.replace("/login");
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/login/customerSignIn" component={CustomerSignIn} />
        <Route exact path="/login/customerSignUp" component={CustomerSignUp} />
        <Route exact path="/login/signUpVerify" component={SignUpVerify} />
        <Route path="/customer" component={Customer} />
        <Route path="/director" component={Director} />
        {/* {role === "Direktor" && <Route path="/director" component={Director} />} */}
        {/* <Route render={() => <h1 style={{
                        textAlign: "center",
                        alignItems: "center",
                        display: "flex",
                        height: "100vh",
                        justifyContent: "center"
                    }}>Yuklanmoqda....</h1>}/> */}
        {role === "Direktor" && (
          <Redirect
            to="/director/dashboard"
            from="/(sotuvboshligi|warehouseMan|sotuv-meneger|taminotchi)/"
          />
        )}
      </Switch>
    </Router>
  );
}

export default App;
