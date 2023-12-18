import "../css/NewSolicitud.css";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useState,useEffect } from "react";
export default function NewSolicitud({ Login }) {
  const [isUser, setisUser] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    enviarDatos(data);
    alert("se envio correctamente");
  };
  const enviarDatos = async (data) => {
    try {
      const respuesta = await fetch("http://localhost:4000/tiquetes/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resultado = await respuesta.json();
      console.log(resultado);
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };
  useEffect(() => {
    if (Login[0].ROL == 1) {
      setisUser(true);
    }
  }, []);

  return (
<div>
  {
    isUser ? (
      <div className="solicitud">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="items">
          <label>FECHA</label>
          <input type="date" {...register("FECHA")} />
        </div>

        <div className="items">
          <label>ID USUARIO</label>
          <input
            type="text" value={Login[0].ID} readOnly
            {...register("ID_USUARIO")}
            placeholder="ID usuario"
          />
        </div>

        <div className="items">
          <label>NOMBRE PRODUCTO</label>
          <input type="text" {...register("NOMBRE_PRODUCTO")} />
        </div>

        <div className="items">
          <label>PRECIO</label>
          <input type="text" {...register("PRECIO")} />
        </div>

        <div className="items">
          <label>DESCRIPCION</label>
          <input type="text" {...register("DESCRIPCION")} />
        </div>

        <div className="items">
          <label>RAZON_COMPRA</label>
          <input type="text" {...register("RAZON_COMPRA")} />
        </div>

        <div className="items">
          <label>LUGAR COMPRA</label>
          <input type="text" {...register("LUGAR_COMPRA")} />
        </div>

        <div className="items">
          <label>OBSERVACIONES</label>
          <input type="text" {...register("OBSERVACIONES_SOLICITANTE")} />
        </div>

        <input type="submit" value="enviar" className="btnEnviar" />
      </form>
    </div>
    ):(
      <h2>No eres Usuario</h2>
    )
  }
</div>
  );
}
