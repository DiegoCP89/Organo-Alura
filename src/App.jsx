import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-End",
      corPrimaria: "",
      corSecundaria: "#EBF6FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "",
      corSecundaria: "#F0FBE2",
    },
    {
      nome: "Devops",
      corPrimaria: "",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "",
      corSecundaria: " #FAE9F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "",
      corSecundaria: "#dfdd9c",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario times={ times.map(time => time.nome )} aoColaboradorCadastrado={(colaborador) => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map((time) => (<Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>))}
    </div>
  );
}

export default App;
