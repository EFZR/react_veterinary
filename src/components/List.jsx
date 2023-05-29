const List = ({ paciente, setPaciente, deletePaciente }) => {
  const { nombrePropietario, nombreMascota, email, fechaFin, sintomas } =
    paciente;

  return (
    <div className="bg-white mx-3 my-5 shadow-md px-5 py-10 rounded-xl flex justify-between">
      <div>
        <p className="mb-3 text-justify">
          <span className="font-bold text-gray-700 uppercase">Nombre:</span>{" "}
          {nombreMascota}
        </p>
        <p className="mb-3 text-justify">
          <span className="font-bold text-gray-700 uppercase">Dueño:</span>{" "}
          {nombrePropietario}
        </p>
        <p className="mb-3 text-justify">
          <span className="font-bold text-gray-700 uppercase">Email:</span>{" "}
          {email}
        </p>
        <p className="mb-3 text-justify">
          <span className="font-bold text-gray-700 uppercase">Fecha:</span>{" "}
          {fechaFin}
        </p>
        <p className="mb-3 text-justify">
          <span className="font-bold text-gray-700 uppercase">Sintomas:</span>{" "}
          {sintomas}
        </p>
      </div>
      <div className="flex flex-col justify-evenly">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={() => deletePaciente(paciente.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default List;
