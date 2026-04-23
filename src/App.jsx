import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navbar import kiya
import Home from "./pages/Home"; // Home import kiya
import Collections from "./pages/Collections";
import Footer from "./components/Footer";
import CustomRugs from "./pages/CustomRugs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}
        <Route path="/collections" element={<Collections />} />
        <Route path="/custom-rugs" element={<CustomRugs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
