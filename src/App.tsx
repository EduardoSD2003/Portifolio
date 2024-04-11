import "./App.css";
import Inicio from "./components/Inicio/Inicio";
import Sobre from "./components/Sobre/Sobre";
import Navegacao from "./components/NavMenu/NavBar"
import Projetos from "./components/Projetos/Projetos"
import Habilidades from "./components/Habilidades/Hablidades"

function App() {
  return (
    <>
      <Navegacao/>
      <Inicio />
      <Sobre />
      <Projetos/>
      <Habilidades/>
    </>
  );
}

export default App;
