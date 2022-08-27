import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Listatareas from "./components/Listatareas";

function App() {
  const [tarea, setTarea] = useState([""]);

  return (
    <div className="mx-auto">
      <Header />
      <div className="mt-12 md:flex mx-auto justify-center">
        <Formulario 
          tarea={tarea} 
          setTarea={setTarea} />
        <Listatareas />
      </div>
    </div>
  );
}

export default App;
