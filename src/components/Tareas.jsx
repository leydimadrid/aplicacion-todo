const Tareas = ({tarea}) => {

  const {titulo, fecha, descripcion} = tarea;

  return (
    <div className="bg-white  text-gray-700 font-medium text-sm shadow-xl rounded-lg py-5 px-5 mt-4 uppercase">
      <b className="block text-left uppercase">
        TÍTULO: <span className="font-normal normal-case">{titulo}</span>
      </b>
      <b className="block text-left uppercase">
        FECHA:{" "}
        <span className="font-normal normal-case">{fecha}</span>
      </b>
      <b className="block text-left uppercase">
        DESCRIPCIÓN:{" "}
        <span className="font-normal normal-case">{descripcion}</span>{" "}
      </b>
    </div>
  );
};

export default Tareas;
