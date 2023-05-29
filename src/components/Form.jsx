import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ Pacientes, setPacientes, Paciente, setPaciente }) => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombrePropietario, setNombrePropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  // useEffect es un hook que se ejecuta cuando el componente se actualiza
  // useEffect tiene la tarea de renderizar el componente cada vez que se actualiza el componente que se le pasa como argumento
  // Cuando useEffect no recibe un componente como argumento, se ejecuta cada vez que se usa el componente

  useEffect(() => {
    if (Object.keys(Paciente).length) {
      setNombreMascota(Paciente.nombreMascota);
      setNombrePropietario(Paciente.nombrePropietario);
      setEmail(Paciente.email);
      setFechaFin(Paciente.fechaFin);
      setSintomas(Paciente.sintomas);
    }
  }, [Paciente]);

  const generarId = () => {
    const id_1 = Math.random().toString(36).substr(2, 5);
    const id_2 = Date.now().toString(36).substr(2, 5);
    return `${id_1}-${id_2}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      [nombreMascota, nombrePropietario, email, fechaFin, sintomas].includes("")
    ) {
      setError(true);
      window.setTimeout(setError, 3000, false);
    } else {
      const ObjetoPaciente = {
        nombreMascota,
        nombrePropietario,
        email,
        fechaFin,
        sintomas,
      };
      if (Object.keys(Paciente).length) {
        ObjetoPaciente.id = Paciente.id;
        const pacientesActualizados = Pacientes.map((p) => {
          return p.id === Paciente.id ? ObjetoPaciente : p;
        });
        setPacientes(pacientesActualizados);
        setPaciente({});
      } else {
        ObjetoPaciente.id = generarId();
        setPacientes([...Pacientes, ObjetoPaciente]);
      }

      // Reinicio de los campos del formulario
      setNombreMascota("");
      setNombrePropietario("");
      setEmail("");
      setFechaFin("");
      setSintomas("");
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      {error && <Error mensaje="todos Los campos son Obligatorios" />}
      <form
        className="bg-white mx-3 my-5 shadow-md px-5 py-10 rounded-xl"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="nombre-mascota"
          >
            Nombre Mascota
          </label>
          <input
            id="nombre-mascota"
            type="text"
            placeholder="Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombreMascota}
            onChange={(e) => setNombreMascota(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="nombre-propietario"
          >
            Nombre Propietario
          </label>
          <input
            id="nombre-propietario"
            type="text"
            placeholder="Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombrePropietario}
            onChange={(e) => setNombrePropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="fecha-fin"
          >
            Fecha Fin
          </label>
          <input
            id="fecha-fin"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 rounded-md cursor-pointer transition duration-300 ease-in-out"
          value={
            Object.keys(Paciente).length
              ? "Editar Paciente"
              : "Agregar Paciente"
          }
        />
      </form>
    </div>
  );
};

export default Form;
