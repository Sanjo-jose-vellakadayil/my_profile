//ort logo from './logo.svg';
import './App.css';
// import Home from './components/Home';
// import UseEffects from './components/UseEffects';
//import Timer from './components/UseEffects';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Skill from './components/Skill';
//import Content from './components/Content';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/skill' element={<Skill/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
