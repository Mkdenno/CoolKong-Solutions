import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";
import { Blogs } from "./pages/Blogs";
import { Courier } from "./pages/products/courriex";
import { StartUp } from "./pages/services/StartUp";
import { Cloud } from "./pages/services/Cloud";
import { SoftwareProd } from "./pages/services/SoftwareProd";
import { Api } from "./pages/services/Api";
import { WhiteLabel } from "./pages/services/WhiteLabel";
import { Training } from "./pages/services/Training";
import { Design } from "./pages/services/Design";
import { Staff } from "./pages/services/Staff";
import { PRODUCT_ROUTES } from "./constants/constants";
import { Foodx } from "./pages/products/foodx";
import { MedX } from "./pages/products/medx";
import { EstateX } from "./pages/products/estatex";
import { SchoolX } from "./pages/products/school360";
import { FintechX } from "./pages/products/fintechx";
import { Thriftx } from "./pages/products/thriftx";
import { WorkspaceX } from "./pages/products/workspacex";

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
        <Route path="/staff" element={<Staff />} />
        <Route path={`/${PRODUCT_ROUTES.courier}`} element={<Courier />} />
        <Route path={`/${PRODUCT_ROUTES.foodx}`} element={<Foodx />} />
        <Route path={`/${PRODUCT_ROUTES.medx}`} element={<MedX />} />
        <Route path={`/${PRODUCT_ROUTES.estatex}`} element={<EstateX />} />
        <Route path={`/${PRODUCT_ROUTES.school360}`} element={<SchoolX />} />
        <Route path={`/${PRODUCT_ROUTES.fintech360}`} element={<FintechX />} />
        <Route path={`/${PRODUCT_ROUTES.thriftx}`} element={<Thriftx />} />
        <Route path={`/${PRODUCT_ROUTES.workspaceX}`} element={<WorkspaceX />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
