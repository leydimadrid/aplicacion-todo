import { useState } from "react";
import Error from "./Error";

const Formulario = () => {
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();


    if ([titulo, fecha, descripcion].includes ("")) {
      setError(true)
      return;
    }

    setError(false);

    setTitulo ('');
    setFecha ('');
    setDescripcion ('');

  };

  return (
    <div className="mx-5">
      <h1 className="font-black text-2xl text-center mb-4">
        Creación de tareas
      </h1>
      <div>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-lg py-5 px-5 mb-3 "
        >
        
          <label className="block text-gray-700 font-medium text-left text-sm">
            TITULO
          </label>
          <input
            id="titulo"
            type="text"
            placeholder="Título de la tarea"
            className="border-2 rounded-md md p-1 w-full"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />

          <label className="block text-gray-700 font-medium text-left text-sm">
            FECHA
          </label>
          <input
            id="fecha"
            type="date"
            placeholder="Título de la tarea"
            className="border-2 rounded-md md p-1 w-full"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />

          <label className="block text-gray-700 font-medium text-left text-sm">
            DESCRIPCIÓN
          </label>
          <textarea
            id="descripcion"
            type="text"
            placeholder="Descripción de la tarea"
            className="border-2 rounded-md md p-1 w-full"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>

          <input
            id="enviar"
            type="submit"
            value="CREAR TAREA"
            className="block bg-violet-700 rounded-lg text-white p-2 mt-2 px-5 mx-auto hover:bg-violet-800 cursor-pointer w-full"
          />
          {error && <Error / >}
        </form>
      </div>
    </div>
  );
};

export default Formulario;
