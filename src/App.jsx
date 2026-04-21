import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navbar import kiya
import Home from "./pages/Home"; // Home import kiya

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[70px]">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/signin" element={<SignIn />} /> */}
          {/* Baaki pages ke routes yahan aayenge */}
        </Routes>
      </main>
      {/* Aap yahan Footer bhi add kar sakte hain baad mein */}
    </div>
  );
}

export default App;
