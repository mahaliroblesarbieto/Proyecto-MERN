import { SELECCIONAR_TAREAS, AGREGAR_TAREA, MOSTRAR_ERROR, ELIMINAR_TAREA, CAMBIAR_ESTADO_TAREA, EDITAR_TAREA, ACTUALIZAR_TAREA } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SELECCIONAR_TAREAS:
      return {
        ...state,
        proyectotarea: state.tareas.filter(
          (tarea) => tarea.proyectoId === action.payload
        ),
      };
    case AGREGAR_TAREA:
      return {
        ...state,
        tareas: [action.payload, ...state.tareas],
        errortarea:false,
      };
      case MOSTRAR_ERROR:
      return {
        ...state,
        errortarea: true,
      };
      case ELIMINAR_TAREA:
      return {
        ...state,
        tareas: state.tareas.filter(tarea => tarea.id !== action.payload),
      };
      case ACTUALIZAR_TAREA:
      case CAMBIAR_ESTADO_TAREA:
      return {
        ...state,
        // proyectotarea:
        tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? action.payload : tarea),
        tareaseleccionada:null,
      };
      case EDITAR_TAREA:
          return {
              ...state,
              tareaseleccionada: action.payload
          }
    default:
      return state;
  }
};
