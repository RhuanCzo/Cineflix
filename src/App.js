import PaginaPrincipal from "./PaginaPrincipal.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rota from "./Rota.js";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PaginaPrincipal/>}></Route>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
