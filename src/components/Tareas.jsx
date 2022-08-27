const Tareas = () => {
  return (
    <div className="bg-white  text-gray-700 font-medium text-sm shadow-xl rounded-lg py-5 px-5 mt-4 uppercase">
      <b className="block text-left uppercase">
        TÍTULO: <span className="font-normal normal-case">crear</span>
      </b>
      <b className="block text-left uppercase">
        FECHA:{" "}
        <span className="font-normal normal-case">30 de Agosto de 2022</span>
      </b>
      <b className="block text-left uppercase">
        DESCRIPCIÓN:{" "}
        <span className="font-normal normal-case">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </span>{" "}
      </b>
    </div>
  );
};

export default Tareas;
