import './App.css';
import Titel from './component/Titel';
import Toolbar from './component/Toolbar';
import Lichtenlijstboek from './component/Lichtenlijstboek';
import Map from './component/Map';
import './component_css/media.css';

function App() {
  return (
    <div className="App">
      <Titel></Titel>
      <Toolbar></Toolbar>
      <Map></Map>
      <Lichtenlijstboek></Lichtenlijstboek>
    </div>
  );
}
export default App;
