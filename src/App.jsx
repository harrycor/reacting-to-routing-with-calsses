import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from "./pages/Home";
import User from "./pages/User";
import UserDetails from "./pages/UserDetails";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/user"} component={User} />
          <Route exact path={"/user/:userid"} component={UserDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
