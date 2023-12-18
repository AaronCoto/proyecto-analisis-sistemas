import React, { useEffect, useState } from "react"
import { AiOutlineClose } from "react-icons/ai";
import { FaCircleInfo } from "react-icons/fa6";
import { GrCheckmark } from "react-icons/gr";
import '../css/tablaUser.css';

export default function tablaUsuario({ data,Login }){

    function estado(cancelado,admin,financiero){
      if(cancelado==1){
        return(<AiOutlineClose className="iconU"/>)
      }else if(admin==1 && financiero==1){
        return(<GrCheckmark className="iconU"/>)
      }
      else{
        return(<FaCircleInfo className="iconU"/>)
      }
    }
   
     
    return(
        <div >
            <table className="tablaUser">
            <thead>
              <tr className="fila">
                <th>ID</th>
                <th>Nombre Producto</th>
                <th>Precio</th>
                <th>Descripcion</th>
                <th>Razon de la compra</th>
                <th>Lugar de la Compra</th>
                <th>Observaciones del solicitante</th>
                <th>Fecha</th>
                
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {data.map((fila) => (
                <tr key={fila.ID} className="fila">
                  <td>{fila.ID}</td>
                  <td>{fila.NOMBRE_PRODUCTO}</td>
                  <td>{fila.PRECIO}</td>
                  <td>{fila.DESCRIPCION}</td>
                  <td>{fila.RAZON_COMPRA}</td>
                  <td>{fila.LUGAR_COMPRA}</td>
                  <td>{fila.OBSERVACIONES_SOLICITANTE}</td>
                  <td>{fila.FECHA}</td>
                  
                  <th className="itemsU">
                    {estado(fila.CANCELED.data,fila.CONFIRMACION_FINANCIERO.data,fila.CONFIRMACION_FINANCIERO.data)}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          <h1>{Login[0].ID}</h1>
        </div>
    )
}