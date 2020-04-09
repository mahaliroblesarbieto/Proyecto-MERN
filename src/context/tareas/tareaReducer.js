import {SELECCIONAR_TAREAS} from '../../types'

export default (state, action) => {
    switch(action.type){
        case SELECCIONAR_TAREAS:
            return{
                ...state,
                proyectotarea: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
            }
        default:
            return state
    }
}