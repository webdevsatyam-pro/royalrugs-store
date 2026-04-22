import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navbar import kiya
import Home from "./pages/Home"; // Home import kiya
import Collections from "./pages/Collections";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[70px]">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/signin" element={<SignIn />} /> */}
          <Route path="/collections" element={<Collections />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
