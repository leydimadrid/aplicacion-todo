import Tareas from "./Tareas";

const Tareaspendientes = ({ tareas, setTarea, borrarTarea }) => {
  return (
    <div className="w-96 mx-5 mb-10 md:h-screen overflow-auto">
      {tareas && tareas.length ? (
        <>
          <h1 className="font-black text-2xl text-center mb-4">
            Tareas pendientes
          </h1>

          {tareas.map((tarea) => {
            return (
              <Tareas
                key={tarea.id}
                tarea={tarea}
                setTarea={setTarea}
                borrarTarea={borrarTarea}
              />
            );
          })}
        </>
      ) : (
        <h1 className="font-black text-2xl text-center mb-4">
          No tengo tareas pendientes 😄
        </h1>
      )}
    </div>
  );
};

export default Tareaspendientes;
