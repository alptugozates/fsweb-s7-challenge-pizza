import React, { useState } from "react";
import Home from "../src/Components/Home";
import Order from "../src/Components/Order";
import { Route, Switch } from "react-router-dom";
import SiparisOzet from "./Components/SiparisOzet";



const App = () => {

  const [siparis, setSiparis] = useState({});

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pizza">
          <Order setSiparis={setSiparis} />
        </Route>
        <Route path="/siparis-ozeti">
          <SiparisOzet siparis={siparis} />
        </Route>

      </Switch>
    </>
  );
};
export default App;
