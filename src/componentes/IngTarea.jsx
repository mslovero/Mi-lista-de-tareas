import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './IngTarea.css'


export default function IngTarea(props) {


  const [input, setInput] = useState('');

  
  const manejarCambio = e => {
    /*extraer valor del campo texto que ingresa el usuario*/
    setInput(e.target.value);

  };

  const manejarEnvio = e => {
    /*permite que no se vuelva a caargar toda la app cuando se envia el form*/
    e.preventDefault();

    const tareaNueva =  {
      id:uuidv4(),
      texto:input,
      completada:false
    }
    props.onSubmit(tareaNueva);
  };

  return (
    <form 
        className='ingTarea'
        onSubmit={manejarEnvio}>
        <input 
          className='tareaInput'
          type='text'
          placeholder='Ingresa una Tarea'
          name='texto'
          onChange={manejarCambio}
        />
        <button className='botonTarea'>
            Agregar Tarea
        </button>
            
    </form>
  );
}
