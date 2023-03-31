import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";
import { Blogs } from "./pages/Blogs";
import { StartUp } from "./pages/StartUp";
import { Cloud } from "./pages/Cloud";
import { SoftwareProd } from "./pages/SoftwareProd";
import { Api } from "./pages/Api";
import { WhiteLabel } from "./pages/WhiteLabel";
import { Training } from "./pages/Training";
import { Design } from "./pages/Design";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/start-up" element={<StartUp />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/software-product" element={<SoftwareProd />} />
        <Route path="/api" element={<Api />} />
        <Route path="/white-label" element={<WhiteLabel />} />
        <Route path="/training" element={<Training />} />
        <Route path="/design" element={<Design />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
