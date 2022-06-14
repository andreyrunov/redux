import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import MyNav from './components/MyNav/MyNav';
import PictureCat from './components/Picture/PictureCat';
import PictureDog from './components/Picture/PictureDog';

function App() {
  return (
    <div className="App">
      <MyNav />
      <Routes>
        <Route path="/cats" element={<PictureCat />} />
        <Route path="/dogs" element={<PictureDog />} />
      </Routes>
    </div>
  );
}

export default App;
