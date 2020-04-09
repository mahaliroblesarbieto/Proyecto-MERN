import React, {useContext} from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  const proyectosContext = useContext(proyectoContext);
  const tareasContext = useContext(tareaContext);
  const {
    seleccionarProyecto
  } = proyectosContext;
  const {seleccionarTareas} = tareasContext;

  const seleccionandoProyecto = (proyectoId) => {
    seleccionarProyecto(proyectoId);
    seleccionarTareas(proyectoId);
  } 
  return (
    <li>
      <button type="button" className="btn btn-blank" onClick={() => seleccionandoProyecto(proyecto.id)}>
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
