import { Suspense, useState, useEffect } from "react";
import "../css/SolicitudesAdmin.css";
import TablaAdmin from "../components/tablaAdmin";
import TablaFinanciero from "../components/tablaUsuario";


function SolicitudesAdmin({ Login }) {
  const [Cargando, setCargando] = useState(true);
  const [data, setData] = useState();

  
  const fetchData = async (url) => {
    try {
      const respuesta = await fetch(url);
      const datosRecibidos = await respuesta.json();
      setData(datosRecibidos);
      setCargando(false);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  const ID_USUARIO = parseInt(Login[0].ID);
  const fetchDataUser = async (ID_USUARIO) => {
    try {
    const respuesta = await fetch(
      "http://localhost:4000/tiquetes/solicitudesUser",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        // credentials: 'include',
        body: JSON.stringify({ ID_USUARIO }),
      }
    );

    const resultado = await respuesta.json();
    console.log(resultado);
    setData(resultado);
    setCargando(false);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    const URL1 = "http://localhost:4000/tiquetes/solicitudesAdmin";
    const URL2 = "http://localhost:4000/tiquetes/solicitudesFinanciero";
    if (parseInt(Login[0].ROL) === 2) {
      fetchData(URL1);
    } else if (parseInt(Login[0].ROL) === 3) {
      fetchData(URL2);
    } else {
      fetchDataUser(ID_USUARIO);
    }
    console.log(Login[0].ID);
  }, []);

  return (
    <div className="principal">
      <h1>Solicitudes Pendientes señ@r {Login[0].CORREO}</h1>
      <div className="tabla">
        {Cargando ? (
          <div>
            <h2>Cargando...</h2>
          </div>
        ) : (
         
        // <componente data={data} Login={Login}/>
        <TablaAdmin data={data} Login={Login}/>
      
        )}
      </div>
    </div>
  );
}

export default SolicitudesAdmin;
