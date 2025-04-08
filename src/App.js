import PaginaPrincipal from "./PaginaPrincipal.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Assentos from "./Assentos.js";
import Sessao from "./Sessao.js";
import Sucesso from "./Sucesso.js";
import styled from "styled-components";
import logo from "./imagens/672523591ef2f811a382ae5c89e262c0.png"
import { useState } from "react";

function App() {
  const [dados, setDados] = useState({})


  return (
    <BrowserRouter>
    <NavBar><img src={logo} /><h1>Cineflix</h1></NavBar>
    <Routes>
      <Route path="/" element={<PaginaPrincipal/>}></Route>
      <Route path="/sessoes/:idFilmes" element={<Sessao/>}></Route> //os dois pontos fala que é uma variavel
      <Route path="/assentos/:idSessao" element={<Assentos setDados={setDados}/>  }/>
      <Route path="/sucesso" element={<Sucesso dados={dados}/>}></Route>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;

const NavBar = styled.header`
font-size: 40px;
display: flex;
justify-content: center;
align-items: center;
height: 70px;
background-color: #EE897F;
color: #FADBC5;

img {
  height: 40px;
  width: 40px;
  padding-right: 15px;
}
`
