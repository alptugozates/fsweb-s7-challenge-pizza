import React from "react";
import Home from "../src/Components/Home";
import Order from "../src/Components/Order";
import { Route, Switch } from "react-router-dom";
import SiparisOzet from "./Components/SiparisOzet";
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pizza" component={Order} />
        <Route path="/siparis-ozeti" component={SiparisOzet} />
      </Switch>
    </>
  );
};
export default App;
