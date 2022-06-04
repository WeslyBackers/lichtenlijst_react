import './App.css';
import Titel from './component/Titel';
import Toolbar from './component/Toolbar';
import Lichtenlijstboek from './component/Lichtenlijstboek';
import Map from './component/Map';
import './component_css/Media.css';



function App() {

  return (
    <div className="App">
      <Titel></Titel>
      <div className='sticky-top bg-white'>
      <Toolbar></Toolbar>
      <Map></Map>
      </div>
      <Lichtenlijstboek></Lichtenlijstboek>
    </div>
  );
}
export default App;

