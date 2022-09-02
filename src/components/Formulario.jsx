import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ tareas, setTareas, tarea, setTarea }) => {
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(tarea).length > 0) {
      setTitulo(tarea.titulo);
      setFecha(tarea.fecha);
      setDescripcion(tarea.descripcion);
    }
  }, [tarea]);

  const generarId = () => {
    const id = Math.random().toString(20).substr(2);
    return id;
  };

  //Validación formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if ([titulo, fecha, descripcion].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    //Objeto de tareas
    const objetoTareas = {
      titulo,
      fecha,
      descripcion,
    };

    //Editando el registro
    if (tarea.id) {
      objetoTareas.id = tarea.id;

      const tareasModificadas = tareas.map((tareaState) =>
        tareaState.id === tarea.id ? objetoTareas : tareaState
      );

      setTareas(tareasModificadas);
      setTarea({});

      // Nuevo registro
    } else {
      (objetoTareas.id = generarId()), setTareas([...tareas, objetoTareas]); // Agregar varias tareas
    }

    // Resetear formulario
    setTitulo("");
    setFecha("");
    setDescripcion("");
  };

  return (
    <div className="mx-5">
      <h1 className="font-black text-2xl text-center mb-4">Crear tarea 👇</h1>
      <div>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-lg py-5 px-5 mb-3"
        >
          <label className="block text-gray-700 font-medium text-left text-sm mb-1 uppercase">
            Título
          </label>
          <input
            id="titulo"
            type="text"
            placeholder="Título de la tarea"
            className="border-2 rounded-md p-1 w-full mb-3 "
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />

          <label className="block text-gray-700 font-medium text-left text-sm mb-1 uppercase">
            Fecha
          </label>
          <input
            id="fecha"
            type="date"
            placeholder="Título de la tarea"
            className="border-2 rounded-md p-1 w-full mb-3"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />

          <label className="block text-gray-700 font-medium text-left text-sm mb-1 uppercase">
            Descripción
          </label>
          <textarea
            id="descripcion"
            type="text"
            placeholder="Descripción de la tarea"
            className="border-2 rounded-md p-1 w-full"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>

          {!tarea.id ? (
            <input
              id="enviar"
              type="submit"
              value="CREAR TAREA"
              className="block font-semibold bg-violet-700 rounded-lg text-white p-2 mt-2 px-5 mx-auto hover:bg-violet-800 cursor-pointer w-full"
            />
          ) : (
            <input
              id="enviar"
              type="submit"
              value="MODIFICAR TAREA"
              className="block font-semibold bg-purple-600 rounded-lg text-white p-2 mt-2 px-5 mx-auto hover:bg-violet-700 cursor-pointer w-full"
            />
          )}
          {error && <Error />}
        </form>
      </div>
    </div>
  );
};

export default Formulario;
