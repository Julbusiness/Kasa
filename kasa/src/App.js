import './App.css'; 
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Logement from './components/Logement/Logement'
import Apropos from './components/Apropos/Apropos'
import Error from './components/404/Error'
import Navbar from './components/Layout/Navbar/Navbar';
import Footer from './components/Layout/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/logement" element={<Logement />}/>
        <Route path="/apropos" element={<Apropos />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
