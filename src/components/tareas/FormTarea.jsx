import React, { useContext, useState, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  const proyectosContext = useContext(proyectoContext);
  const tareasContext = useContext(tareaContext);
  const { proyectoactual } = proyectosContext;
  const {
    agregarTareas,
    errortarea,
    mostrarError,
    seleccionarTareas,
    tareaseleccionada,
    actualizarTarea,
  } = tareasContext;

  const [tarea, añadirTarea] = useState({
    nombre: "",
  });
  const { nombre } = tarea;

  useEffect(() => {
    if (tareaseleccionada !== null) {
      añadirTarea(tareaseleccionada);
    } else {
      añadirTarea({
        nombre: "",
      });
    }
  }, [tareaseleccionada]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === "") {
      mostrarError();
      return;
    }

    if (tareaseleccionada === null) {
      tarea.proyectoId = proyectoactual.id;
      tarea.estado = false;
      agregarTareas(tarea);
    } else {
      actualizarTarea(tarea);
    }

    seleccionarTareas(proyectoactual.id);
    añadirTarea({
      nombre: "",
    });
  };

  const handleChange = (e) => {
    añadirTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  if (!proyectoactual) return null;
  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"}
          />
        </div>
      </form>
      {errortarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
