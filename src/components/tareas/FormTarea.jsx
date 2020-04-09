import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {
    const proyectosContext = useContext(proyectoContext);
    const { proyectoactual } = proyectosContext;
    if(!proyectoactual) return null;
    return ( 
        <div className="formulario">
        <form
            // onSubmit={onSubmit}
        >
            <div className="contenedor-input">
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre Tarea..."
                    name="nombre"
                    // value={nombre}
                    // onChange={handleChange}
                />
            </div>

            <div className="contenedor-input">
                <input 
                    type="submit"
                    className="btn btn-primario btn-submit btn-block"
                    // value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                />
            </div>
        </form>
    </div>
 );
}
 
export default FormTarea;