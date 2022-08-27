import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Listatareas from "./components/Listatareas";
import Error from "./components/Error";

function App() {
  return (
    <div className="mx-auto">
      <Header />
      <div className="mt-12 md:flex mx-auto justify-center">
        <Formulario />
        <Listatareas />
      </div>
    </div>
  );
}

export default App;
