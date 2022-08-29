import Tareas from "./Tareas";

const Tareaspendientes = ({ tareas }) => {
  return (
    <div className="md-w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-scroll">
      {tareas && tareas.length ? (
        <>
          <h1 className="font-black text-2xl text-center mb-4">
            Tareas pendientes
          </h1>

          {tareas.map((tarea) => {
            return <Tareas key={tareas.id} tarea={tarea} />;
          })}
        </>
      ) : (
        <h1 className="font-black text-2xl text-center mb-4">
          No tengo tareas pendientes
        </h1>
      )}
    </div>
  );
};

export default Tareaspendientes;
