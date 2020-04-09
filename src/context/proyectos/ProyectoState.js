import React, { useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTOS} from '../../types'

const ProyectoState = props => {

    const initialState = {
        formulario: false,
        proyectos: [],
    }

    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    const mostrarFormulario = () => {
        dispatch({type: FORMULARIO_PROYECTO})
    }

    const obtenerProyectos = (payload) => {
        dispatch({type: OBTENER_PROYECTOS, payload})
    }

    const agregarProyectos = (payload) => {
        dispatch({type: AGREGAR_PROYECTOS, payload})
    }

    

    return(
        <proyectoContext.Provider 
        value={{
            formulario:state.formulario,
            proyectos:state.proyectos, 
            mostrarFormulario,
            obtenerProyectos,
            agregarProyectos
        }}>
        {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;