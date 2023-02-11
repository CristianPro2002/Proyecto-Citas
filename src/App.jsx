import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  const [pacientes, setPacientes] = useState( JSON.parse(localStorage.getItem("pacientes")) ?? []);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = id => {
    const pacientesFiltrados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesFiltrados);
  };

 //El orden de los useEffect es importante, porque se ejecutan en el orden en que se declaran
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente}/>
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
      </div>
    </div>
  );
}

export default App;
