import {Routes, Route} from 'react-router-dom'

import Home from './Pages/Home/Home'
import Logement from './Pages/Logement/Logement'
import Apropos from './Pages/Apropos/Apropos'
import NotFound from './Pages/404/NotFound'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/logement/:id" element={<Logement />}/>
        <Route path="/apropos" element={<Apropos />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
