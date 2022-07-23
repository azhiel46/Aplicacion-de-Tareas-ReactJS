import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from './Tarea';
import '../Styles/ListaDeTareas.css';


function ListaDeTareas() {


    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        console.log(tarea);

        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareaActualizadas = [tarea, ...tareas]
            setTareas(tareaActualizadas);
        }
    };

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    };

    const completarTarea = id => {
        const tareaActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareaActualizadas);
    };

    const numeroDeTareas = tareas.length;


    return (

        <>

            <TareaFormulario onSubmit={agregarTarea} />

            <div className="tareas-lista-contenedor">
                <h1>{numeroDeTareas}</h1>

                {
                    tareas.map((tarea) =>

                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea}
                        />

                    )
                }

            </div>


        </>
    );

}

export default ListaDeTareas;