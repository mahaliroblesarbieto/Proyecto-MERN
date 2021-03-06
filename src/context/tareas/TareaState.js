import React, { useReducer } from "react";

import tareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";
import {SELECCIONAR_TAREAS, AGREGAR_TAREA, MOSTRAR_ERROR, ELIMINAR_TAREA, CAMBIAR_ESTADO_TAREA, EDITAR_TAREA,  ACTUALIZAR_TAREA} from '../../types';

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id:1, proyectoId: 1, nombre: "Elegir Plataforma", estado: true },
      { id:2, proyectoId: 2, nombre: "Elegir Colores", estado: false },
      { id:3, proyectoId: 3, nombre: "Elegir Plataformas de pago", estado: false },
      { id:4, proyectoId: 4, nombre: "Elegir Hosting", estado: true },
      { id:5, proyectoId: 3, nombre: "Elegir Colores", estado: false },
      { id:6, proyectoId: 2, nombre: "Elegir Plataformas de pago", estado: false },
      { id:7, proyectoId: 4, nombre: "Elegir Hosting", estado: true },
      { id:8, proyectoId: 1, nombre: "Elegir Colores", estado: false },
      { id:9, proyectoId: 2, nombre: "Elegir Plataformas de pago", estado: false },
      { id:10, proyectoId: 4, nombre: "Elegir Hosting", estado: true },
    ],
    proyectotarea: null,
    errortarea:false,
    tareaseleccionada: null,
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

    const eliminarTarea = (payload) => {
        dispatch({type: ELIMINAR_TAREA, payload})
    }

    const cambiarEstadoTarea = (payload) => {
      dispatch({type: CAMBIAR_ESTADO_TAREA, payload})
  }

  const editarTarea = (payload) => {
    dispatch({type: EDITAR_TAREA, payload})
  }

  const actualizarTarea = (payload) => {
    dispatch({type: ACTUALIZAR_TAREA, payload})
  }

  

    

  return (
    <tareaContext.Provider
      value={{
        tareas: state.tareas,
        proyectotarea: state.proyectotarea,
        errortarea:state.errortarea,
        tareaseleccionada:state.tareaseleccionada,
        seleccionarTareas,
        agregarTareas,
        mostrarError,
        eliminarTarea,
        cambiarEstadoTarea,
        editarTarea,
        actualizarTarea,
      }}
    >
      {props.children}
    </tareaContext.Provider>
  );
};

export default TareaState;
