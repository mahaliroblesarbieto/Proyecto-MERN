import React from "react";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProyectoState from "./context/proyectos/ProyectoState";
import TareaState from "./context/tareas/TareaState";

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/nueva-cuenta" component={NuevaCuenta}></Route>
            <Route exact path="/proyectos" component={Proyectos}></Route>
          </Switch>
        </Router>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
