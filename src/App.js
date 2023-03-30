import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";
import { Blogs } from "./pages/Blogs";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
