import React from "react";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProyectoState from "./context/proyectos/ProyectoState";

function App() {
  return (
    <ProyectoState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/nueva-cuenta" component={NuevaCuenta}></Route>
          <Route exact path="/proyectos" component={Proyectos}></Route>
        </Switch>
      </Router>
    </ProyectoState>
  );
}

export default App;
