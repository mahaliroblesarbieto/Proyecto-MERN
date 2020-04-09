import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTOS, VALIDAR_FORMULARIO, SELECCIONAR_PROYECTO} from '../../types'

export default (state, action) => {
    switch(action.type){
        case FORMULARIO_PROYECTO: 
        return {
            ...state,
            formulario: true,
        }

        case OBTENER_PROYECTOS:
            return{
                ...state,
                proyectos: action.payload
            }
        case AGREGAR_PROYECTOS:
            return{
                ...state,
                proyectos: [...state.proyectos, action.payload],
                formulario:false,
                errorformulario: false
            }
        case VALIDAR_FORMULARIO:
            return{
                ...state,
                errorformulario: true
            }
        case SELECCIONAR_PROYECTO:
            return{
                ...state,
                proyectoactual: state.proyectos.filter(proyecto => proyecto.id === action.payload)
            }
        default:
            return state
    }
}