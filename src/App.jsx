import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Patients from "./components/Patients";

// Props es un objeto que se pasa como argumento a una función y se puede acceder a ella en diferentes componentes.
// Puede pasar cualquier tipo de dato como props a un componente. y se mandan como atributos en el componente.

function App() {
  const [Pacientes, setPacientes] = useState([]);
  const [Paciente, setPaciente] = useState({});

  // Aqui se usa el localStorage para guardar los datos de los pacientes, es importante aclarar que el Local storage no funciona
  // cuando esta en modo strict, por lo que se debe comentar o borra las lineas de codigo <React.strictmode>

  useEffect(() => {
    const obtenerPacientes = () => {
      const pacientesLocalStorage = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      console.log(pacientesLocalStorage);
      setPacientes(pacientesLocalStorage);
    };
    obtenerPacientes();
  }, [])

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(Pacientes));
  }, [Pacientes]);

  return (
    <>
      <div className="container mx-auto mt-5">
        <Header />
        <div className="mt-12 md:flex">
          <Form
            Pacientes={Pacientes}
            setPacientes={setPacientes}
            Paciente={Paciente}
            setPaciente={setPaciente}
          />
          <Patients
            Pacientes={Pacientes}
            setPaciente={setPaciente}
            setPacientes={setPacientes}
          />
        </div>
      </div>
    </>
  );
}

export default App;
