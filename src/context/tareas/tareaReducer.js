import { SELECCIONAR_TAREAS, AGREGAR_TAREA, MOSTRAR_ERROR } from "../../types";

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
        tareas: [...state.tareas, action.payload],
        errortarea:false,
      };
      case MOSTRAR_ERROR:
      return {
        ...state,
        errortarea: true,
      };
    default:
      return state;
  }
};