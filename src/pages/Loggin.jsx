// LoginComponent.js
import React, { useState } from 'react';
import {useForm} from 'react-hook-form'
import "../css/Loggin.css"
import { AiFillLock } from "react-icons/ai";
// import { useDispatch } from "react-redux"
// import { addUser } from '../redux/userSlice';

const Loggin = ({setLogin}) => {

    // const dispatch=useDispatch();

  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const onSubmit= (data) =>{
    console.log(data);
    handleLogin(data);
    
}
const {register,handleSubmit}= useForm()

  const handleLogin = async (data)  => {
    
        try {
        
          const respuesta = await fetch('http://localhost:4000/tiquetes/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            // credentials: 'include',
            body: JSON.stringify(data),
          });
    
          const resultado = await respuesta.json();
          console.log(resultado);
          if (resultado.CONTRASENA === data.CONTRASENA) {
            setLogin([resultado]);
          }else{
            alert("No existe el usuario digitado")
          }
          


        //   dispatch(addUser);
          
        } catch (error) {
          console.error('Error al enviar datos:', error);
        }
      
        // setLogin({ usuario, contrasena });
  };

  return (
    <div className='solicitud-login'>
        
    <form onSubmit={handleSubmit(onSubmit)}>
        <AiFillLock className='icon'/>
    <div className='items-login'>
        <label>Correo</label>
        <input type="text" {...register('CORREO')} placeholder='ingresar Correo'/>
        </div> 

       <div className='items-login'>
        <label>Password</label>
        <input type="password" {...register('CONTRASENA')} placeholder='ingresar password'/>
        </div> 

        
        
        <input type='submit' value="enviar" className='btnEnviar'/>
    </form>
    </div>
  );
};

export default Loggin;