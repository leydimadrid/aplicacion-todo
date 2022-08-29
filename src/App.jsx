import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Tareaspendientes from "./components/Tareaspendientes";

function App() {
  const [tareas, setTareas] = useState([]);

  return (
    <div className="mx-auto">
      <Header />
      <div className="mt-12 md:flex mx-auto justify-center">
        <Formulario 
        tareas={tareas} 
        setTareas={setTareas}
        />
        <Tareaspendientes 
        tareas={tareas}
        />
      </div>
    </div>
  );
}

export default App;
