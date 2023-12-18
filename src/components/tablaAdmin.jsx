import React from "react";
import { useState, useEffect } from "react";
import TablaUsuario from "./tablaUsuario";

export default function TablaAdmin({ data, Login }) {
  const [isUser, setisUser] = useState(true);

  const aceptarAdmin = async (ID) => {
    try {
      if (Login[0].ROL == 2) {
        const respuesta = await fetch(
          "http://localhost:4000/tiquetes/AceptarAdmin",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            // credentials: 'include',
            body: JSON.stringify({ ID }),
          }
        );

        const resultado = await respuesta.json();
        alert("Se acepto señor admin");
        console.log(resultado);
      } else if (Login[0].ROL == 3) {
        const respuesta = await fetch(
          "http://localhost:4000/tiquetes/AceptarFinanciero",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            // credentials: 'include',
            body: JSON.stringify({ ID }),
          }
        );

        const resultado = await respuesta.json();
        alert("Se acepto financiero");
        console.log(resultado);
      }

      //   fetchData();
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  const Denegar = async (ID) => {
    if (Login[0].ROL == 2 || Login[0].ROL == 3) {
      const respuesta = await fetch("http://localhost:4000/tiquetes/Denegar", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        // credentials: 'include',
        body: JSON.stringify({ ID }),
      });
      const resultado = await respuesta.json();
      alert("Se denego");
      console.log(resultado);
    } else {
      alert("No puedes denegar");
    }
  };

  useEffect(() => {
    if (Login[0].ROL == 1) {
      setisUser(false);
    }
  }, []);

  return (
    <div>
      {isUser ? (
        <div >
          <table>
            <thead>
              <tr className="fila">
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Descripcion</th>
                <th>Razon de la compra</th>
                <th>Lugar de la Compra</th>
                <th>Observaciones del solicitante</th>
                <th>Fecha</th>
                <th>Acciones</th>
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
                  <th>
                    <button onClick={() => aceptarAdmin(fila.ID)}>
                      aceptar
                    </button>
                    <button onClick={() => Denegar(fila.ID)}>Denegar</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          <h1>{Login[0].ROL}</h1>
        </div>
      ) : (
        <TablaUsuario data={data} Login={Login}/>
      )}
    </div>
  );
}
