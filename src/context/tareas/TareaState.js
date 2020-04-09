import React, { useReducer } from "react";

import tareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";
import {SELECCIONAR_TAREAS, AGREGAR_TAREA } from '../../types';

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { proyectoId: 1, nombre: "Elegir Plataforma", estado: true },
      { proyectoId: 2, nombre: "Elegir Colores", estado: false },
      { proyectoId: 3, nombre: "Elegir Plataformas de pago", estado: false },
      { proyectoId: 4, nombre: "Elegir Hosting", estado: true },
      { proyectoId: 3, nombre: "Elegir Colores", estado: false },
      { proyectoId: 2, nombre: "Elegir Plataformas de pago", estado: false },
      { proyectoId: 4, nombre: "Elegir Hosting", estado: true },
      { proyectoId: 1, nombre: "Elegir Colores", estado: false },
      { proyectoId: 2, nombre: "Elegir Plataformas de pago", estado: false },
      { proyectoId: 4, nombre: "Elegir Hosting", estado: true },
    ],
    proyectotarea: null,
  };

  const [state, dispatch] = useReducer(tareaReducer, initialState);

  const seleccionarTareas = (payload) => {
        dispatch({type: SELECCIONAR_TAREAS, payload})
    }

    const agregarTareas = (payload) => {
        dispatch({type: AGREGAR_TAREA, payload})
    }

    

  return (
    <tareaContext.Provider
      value={{
        tareas: state.tareas,
        proyectotarea: state.proyectotarea,
        seleccionarTareas,
        agregarTareas
      }}
    >
      {props.children}
    </tareaContext.Provider>
  );
};

export default TareaState;
