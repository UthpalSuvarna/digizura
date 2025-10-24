import { Routes, Route } from "react-router-dom"; // <-- no BrowserRouter here
import { Navbar } from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { HomePage } from "./pages/home/HomePage";
import Careers from "./pages/home/Careers";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
