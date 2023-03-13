import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Minahil from "./Pages/VCards/Minahil";
import Brockner from "./Pages/VCards/Brockner";
import Peter from "./Pages/VCards/Peter";
import Richard from "./Pages/VCards/Richard";

function App() {
  return (
    <>
      <NavBar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/ecard/Minahil" element={<Minahil/>}/>
          <Route path="/ecard/Peter" element={<Peter/>}/>
          <Route path="/ecard/Brockner" element={<Brockner/>}/>
          <Route path="/ecard/Richard" element={<Richard/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
