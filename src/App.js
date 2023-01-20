import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import NavBar from './components/NavBar';
import { Footer } from './components/Footer';
import { Contact } from './components/home/Contact';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={ <Home/>} />
    </Routes>
    <Contact />
    <Footer />
    </>
  );
}

export default App;
