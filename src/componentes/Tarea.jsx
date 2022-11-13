import './Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";




function Tarea ({ id,texto, terminada, terminarTarea, eliminarTarea }){
    return(
        <div className={terminada ? 'tareaContenedor terminada' : 'tareaContenedor'}>
            <div 
            className='laTarea'
            onClick={() => terminarTarea(id)}>
                
                {texto}
            </div>
            <div 
            className='tareaContenedorIconos'
            onClick={() => eliminarTarea(id)}>
                    <AiOutlineCloseCircle className='icono' />
            </div>
        </div>

    )
}

export default Tarea;