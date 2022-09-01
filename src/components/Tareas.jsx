const Tareas = ({ tarea, setTarea, borrarTarea }) => {
  const { titulo, fecha, descripcion, id } = tarea;

  const handleBorrar = () => {
    const preguntaBorrar = confirm('¿Seguro quieres eliminar la tarea ☹️?');

    if(preguntaBorrar){
      borrarTarea(id);
    }
  }

  return (
    <div className="bg-white  text-gray-700 font-medium text-sm shadow-xl rounded-lg py-5 px-5 mt-4 uppercase">
      <b className="block text-left uppercase">
        TÍTULO: <span className="font-normal normal-case">{titulo}</span>
      </b>
      <b className="block text-left uppercase">
        FECHA: <span className="font-normal normal-case">{fecha}</span>
      </b>
      <b className="block text-left uppercase">
        DESCRIPCIÓN:{" "}
        <span className="font-normal normal-case">{descripcion}</span>{" "}
      </b>

      <div className="flex justify-between">
        <button
          className=" bg-violet-600 rounded-lg text-white p-2 mt-4 px-10 hover:bg-violet-800 cursor-pointer"
          type="button"
          onClick={()=> setTarea(tarea)}
        >
          Modificar
        </button>
        <button
          className=" bg-violet-600 rounded-lg text-white p-2 mt-4 px-10 hover:bg-violet-800 cursor-pointer"
          type="button"
          onClick={ handleBorrar }
        >
          Borrar
        </button>
      </div>
    </div>
  );
};

export default Tareas;
