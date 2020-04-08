import React from 'react';

const FormTarea = () => {
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