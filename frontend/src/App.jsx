import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Adm from "./pages/Adm";
import Contatos from "./pages/Contato"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adm" element={<Adm />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;