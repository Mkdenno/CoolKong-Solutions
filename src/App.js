import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import NavBar from './components/NavBar';
import { Footer } from './components/Footer';
import { Contact } from './components/home/Contact';
import { About } from './pages/About';
import { Product } from './pages/Product';
import Services from './pages/Services';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-products" element={<Product />} />
        <Route path="/our-services" element={<Services />} />
      </Routes>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
