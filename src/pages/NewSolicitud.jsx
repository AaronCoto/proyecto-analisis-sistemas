
import {useForm} from 'react-hook-form'

export default function NewSolicitud(){

    const {register,handleSubmit}= useForm()
    return(
        
        <div>
        <h2>Nueva solicitud</h2>
        <form>
           <div>
            <label>Nombre</label>
            <input type="text" />
            </div> 
            <div>
            <label>datos</label>
            <input type="text" />
            </div> 
            <div>
            <label>descripcion</label>
            <input type="text" />
            </div> 
            <input type='submit' value="enviar"/>
        </form>
        </div>
        
    )
}