import React, { useReducer } from "react";

import tareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";
import {SELECCIONAR_TAREAS, AGREGAR_TAREA, MOSTRAR_ERROR } from '../../types';

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
    errortarea:false,
  };

  const [state, dispatch] = useReducer(tareaReducer, initialState);

  const seleccionarTareas = (payload) => {
        dispatch({type: SELECCIONAR_TAREAS, payload})
    }

    const agregarTareas = (payload) => {
        dispatch({type: AGREGAR_TAREA, payload})
    }

    const mostrarError = () => {
        dispatch({type: MOSTRAR_ERROR})
    }

    

  return (
    <tareaContext.Provider
      value={{
        tareas: state.tareas,
        proyectotarea: state.proyectotarea,
        errortarea:state.errortarea,
        seleccionarTareas,
        agregarTareas,
        mostrarError,
      }}
    >
      {props.children}
    </tareaContext.Provider>
  );
};

export default TareaState;
