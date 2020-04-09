import React, { useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const tareasContext = useContext(tareaContext);
  const { proyectoactual, eliminarProyecto } = proyectosContext;
  
  const {proyectotarea} = tareasContext;
  //   const [proyecto] = proyectoactual;
  if (!proyectoactual) return <h2>Selecciona un proyecto</h2>;
  return (
    <>
      <h2>Proyecto: {proyectoactual.nombre}</h2>
      <ul className="listado-tareas">
        {proyectotarea.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          proyectotarea.map((tarea) => <Tarea key={tarea.proyectoId} tarea={tarea} />)
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={() => eliminarProyecto(proyectoactual.id)}
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;
