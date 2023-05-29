import List from "./List";

const Patients = ({ Pacientes, setPaciente, setPacientes }) => {
  const deletePaciente = (id) => {
    const respuesta = confirm("¿Estas seguro de eliminar el paciente?");
    if (respuesta === true) {
      const pacientesActualizados = Pacientes.filter((p) => p.id !== id);
      setPacientes(pacientesActualizados);
    }
  };
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
      {Pacientes && Pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-lg mt-5 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
          <p className="text-lg mt-5 text-center">
            Comienza Agregando {""}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>
        </>
      )}
      {Pacientes.map((paciente) => (
        <List
          paciente={paciente}
          setPaciente={setPaciente}
          key={paciente.id}
          deletePaciente={deletePaciente}
        />
      ))}
    </div>
  );
};

export default Patients;
