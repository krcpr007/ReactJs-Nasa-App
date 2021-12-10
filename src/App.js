import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Apod from "./components/Apod";
import About from "./components/About";
import Mars from "./components/Mars";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/apod" element={<Apod />} />
        <Route path="/about" element={<About />} />
        <Route path="/mars" element={<Mars/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
