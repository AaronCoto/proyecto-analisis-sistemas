import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
export default function newUser({ Login }) {
  
    const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    enviarDatos(data);
    alert("se envio correctamente");
  };

  const [isUser, setisUser] = useState(false);
  const [cargando,setCargando]=useState(true);
  const enviarDatos = async (data) => {
    try {
      const respuesta = await fetch("http://localhost:4000/tiquetes/newUser", {
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
    if (Login[0].ROL == 4) {
      setisUser(true);
    }
  }, []);
  return (
    <div>
      {isUser ? (
        <div className="solicitud">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="items">
              <label>CORREO</label>
              <input type="text" {...register("CORREO")} />
            </div>


            <div className="items">
              <label>CONTRASENA</label>
              <input type="password" {...register("CONTRASENA")} />
            </div>

            <div className="items">
              <label>ROL</label>
              <select {...register("ROL")}>
                <option value="1">Usuario</option>
                <option value="2">Administrador</option>
                <option value="3">Financiero</option>
                <option value="4">Adminisstrador de sistemas</option>
              </select>
            </div>

            <input type="submit" value="enviar" className="btnEnviar" />
          </form>
        </div>
      ) : (
        <h2>No eres Administrador de sistemas</h2>
      )}
    </div>
  );
}
