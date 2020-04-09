import React, { useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';

const tareas= [
    {id:1, nombre: 'Elegir Plataforma', estado:true},
    {id:2, nombre: 'Elegir Colores', estado:false},
    {id:3, nombre: 'Elegir Plataformas de pago', estado:false},
    {id:4, nombre: 'Elegir Hosting', estado:true},
]

const ListadoTareas = () => {
    const proyectosContext = useContext(proyectoContext);
  const { proyectoactual } = proyectosContext;
//   const [proyecto] = proyectoactual;
    return ( 
        <>
        {proyectoactual ? <h2>Proyecto: {proyectoactual.nombre}</h2> : <h2>Selecciona un proyecto</h2> }
        <ul className="listado-tareas">
        {tareas.length === 0 
            ? (<li className="tarea"><p>No hay tareas</p></li>) 
            : 
            tareas.map(tarea => (
                    <Tarea 
                    key= {tarea.id}
                        tarea={tarea}
                    />
            ))
        }
        </ul>
        <button     
                type="button"
                className="btn btn-eliminar"
                // onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>
        </>
     );
}
 
export default ListadoTareas;