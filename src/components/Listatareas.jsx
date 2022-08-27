import Tareas from "./Tareas";

const Listatareas = () => {
  return (
    <div className="md-w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-scroll">
      <h1 className="font-black text-2xl text-center mb-4">
        Tareas pendientes
      </h1>

      <Tareas />
      <Tareas />
      <Tareas />
      <Tareas />
      <Tareas />
      <Tareas />
    </div>
  );
};

export default Listatareas;
