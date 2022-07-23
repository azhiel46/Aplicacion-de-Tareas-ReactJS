import React, { useState } from 'react';
import './App.css';
// import ListaDeTareas from './Componentes/ListaDeTareas';
import TareaFormulario from './Componentes/TareaFormulario';
import Tarea from './Componentes/Tarea';

function App() {

  const [tareas, setTareas] = useState([]);

  //Funciones agregar y eliminar tareas

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

  //Terminan funciones para agregar y eliminar

  //Completar tareas y saber numero de tareas

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

  //Termina completar tareas y numero de tareas

  return (

    <div className="aplicacion-tareas">

      <div className='titulo-contenedor'>
        <h1 className='titulo-app'>Aplicacion de Tareas</h1>
      </div>

      <div className='tareas-lista-principal'>
        <h1 className='h1'>Mis Tareas {numeroDeTareas}</h1>

        <TareaFormulario onSubmit={agregarTarea} />

        <div className="tareas-lista-contenedor">

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
        {/* <ListaDeTareas /> */}
      </div>

    </div>
  );
}

export default App;
