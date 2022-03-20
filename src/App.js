import './App.css';
import Titel from './component/Titel';
import Toolbar from './component/Toolbar';
import Lichtenlijstboek from './component/Lichtenlijstboek';

function App() {
  return (
    <div className="App">
      <Titel></Titel>
      <Toolbar></Toolbar>
      <Lichtenlijstboek></Lichtenlijstboek>
    </div>
  );
}

export default App;
