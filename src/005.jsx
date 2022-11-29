import './App.css';
import DaugTeksto from './Components/005/DaugTeksto';
import KazkoksTekstas from './Components/005/KazkoksTekstas';
import Labas from './Components/005/Labas';
import SuperTekstas from './Components/005/SuperTekstas';
import Zebrai from './Components/005/Zebrai';
import rand from './Functions/rand';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Labas/>
        <KazkoksTekstas tekstas="Man patinka daug mokytis"/>
        <Zebrai number={rand(1, 2)}/>
        <DaugTeksto tekstas1="Labas rytas" tekstas2="Labas vakaras" />
        <SuperTekstas tekstas1="Laba diena" tekstas2="Viso gero" spalva="yellow"/>
      </header>
    </div>
  );
}

export default App;
