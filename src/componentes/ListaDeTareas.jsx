import { useState } from 'react'
import IngTarea from './IngTarea'
import './ListaDeTareas.css'
import Tarea from'./Tarea'



export default function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    
    if(tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas =[tarea, ...tareas];
      setTareas(tareasActualizadas);
      
    }
  };
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id );
    setTareas(tareasActualizadas);
  };

  const terminarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.terminada = !tarea.terminada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);

  };


  return (
    <>
       <IngTarea onSubmit={agregarTarea}/>
       <div className='tareaListaContenedor'>
        {
          tareas.map((tarea) =>
          <Tarea 
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            terminada={tarea.terminada}
            terminarTarea={terminarTarea}
            eliminarTarea={eliminarTarea}
          />
          )
        }

       </div>
    </>
  )
}
