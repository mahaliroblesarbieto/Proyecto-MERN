import React, { useContext, useState } from "react";
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from "../../context/tareas/tareaContext";

const Tarea = ({ tarea }) => {
  const proyectosContext = useContext(proyectoContext);
  const tareasContext = useContext(tareaContext);
  const {proyectoactual} = proyectosContext;
  const {eliminarTarea, seleccionarTareas, cambiarEstadoTarea, editarTarea} = tareasContext;

  const tareaEliminar = (id) => {
    eliminarTarea(id);
    seleccionarTareas(proyectoactual.id)

  }

  const cambiarEstado = (tarea) => {
    if(tarea.estado){
      tarea.estado = false;
    }else{
      tarea.estado = true;
    }
    cambiarEstadoTarea(tarea)
  }

  return (
    <>
      <li className="tarea sombra">
        <p>{tarea.nombre}</p>
        <div className="estado">
          {tarea.estado ? (
            <button
              type="button"
              className="completo"
              onClick={() => cambiarEstado(tarea)}
            >
              Completo
            </button>
          ) : (
            <button
              type="button"
              className="incompleto"
              onClick={() => cambiarEstado(tarea)}
            >
              Incompleto
            </button>
          )}
        </div>
        <div className="acciones">
                <button 
                    type="button"
                    className="btn btn-primario"
                    onClick={() => editarTarea(tarea) }
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => tareaEliminar(tarea.id)}
                >Eliminar</button>
            </div>
      </li>
    </>
  );
};

export default Tarea;
