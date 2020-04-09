import { SELECCIONAR_TAREAS, AGREGAR_TAREA } from "../../types";

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
      };
    default:
      return state;
  }
};
