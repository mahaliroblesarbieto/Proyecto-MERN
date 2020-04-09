import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTOS, VALIDAR_FORMULARIO, SELECCIONAR_PROYECTO} from '../../types'

const ProyectoState = props => {

    const initialState = {
        formulario: false,
        proyectos: [],
        errorformulario: false,
        proyectoactual: null,
    }

    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    const mostrarFormulario = () => {
        dispatch({type: FORMULARIO_PROYECTO})
    }

    const obtenerProyectos = (payload) => {
        dispatch({type: OBTENER_PROYECTOS, payload})
    }

    const agregarProyectos = (payload) => {
        payload.id = uuidv4();
        dispatch({type: AGREGAR_PROYECTOS, payload})
    }

    const mostrarError = () => {
        dispatch({type:VALIDAR_FORMULARIO})
    }

    const seleccionarProyecto = (payload) => {
        dispatch({type: SELECCIONAR_PROYECTO, payload})
    }

    

    return(
        <proyectoContext.Provider 
        value={{
            formulario:state.formulario,
            proyectos:state.proyectos,
            errorformulario:state.errorformulario,
            proyectoactual:state.proyectoactual,
            mostrarFormulario,
            obtenerProyectos,
            agregarProyectos,
            mostrarError,
            seleccionarProyecto,
        }}>
        {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;