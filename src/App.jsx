import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Tareaspendientes from "./components/Tareaspendientes";

function App() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState({});

  useEffect(() => {
    const obtenerTareasLocalStorage = () => {
      const tareasLocalStorage =
        JSON.parse(localStorage.getItem("tareas")) ?? [];
      setTareas(tareasLocalStorage);
    };

    obtenerTareasLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const borrarTarea = (id) => {
    const modificarTarea = tareas.filter((tarea) => tarea.id !== id);
    setTareas(modificarTarea);
  };

  return (
    <div className="mx-auto">
      <Header />
      <div className="mt-12 md:flex justify-center ">
        <Formulario
          tarea={tarea}
          tareas={tareas}
          setTareas={setTareas}
          setTarea={setTarea}
        />
        <Tareaspendientes
          tareas={tareas}
          setTarea={setTarea}
          borrarTarea={borrarTarea}
        />
      </div>
    </div>
  );
}

export default App;
