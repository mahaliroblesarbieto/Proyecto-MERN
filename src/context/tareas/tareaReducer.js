import { SELECCIONAR_TAREAS, AGREGAR_TAREA, MOSTRAR_ERROR, ELIMINAR_TAREA } from "../../types";

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
    default:
      return state;
  }
};
