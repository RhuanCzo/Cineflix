import {styled} from "styled-components"
import "./reset.css"
import logo from "./imagens/672523591ef2f811a382ae5c89e262c0.png"
import Rota from "./Rota"
import Sessao from "./Sessao.js"

function App() {
  return (
   
    <Container>
      <Header><img src={logo}/><h1>Cineflix</h1></Header>
      <Conteudo>
        <Rota/>
        <Sessao/>
      </Conteudo>
    </Container>
   
  );
}

export default App;

const Container = styled.h1 `
height: 100vh;
background-color: #293845;

`
const Header = styled.header `
font-size: 40px;
display: flex;
justify-content: center;
align-items: center;
height: 10%;
background-color: #EE897F;
color: #FADBC5;

img {
  height: 40px;
  width: 40px;
  padding-right: 15px;
}
` 
const Conteudo = styled.div `
display:flex;
flex-direction: column;
flex-wrap: wrap;
font-size: 30px;

`
const Titulo = styled.div `
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`


const ContainerCartazes = styled.div `
justify-content: center;
display: flex;
flex-wrap: WRAP;
`

const Cartaz = styled.div `
height: 200px;
width: 150px;  
margin-left: 10px;
margin-right: 10px;
margin-top: 20px;

img {
  height: 210px;
  width: 150px;
  border-radius: 10px;
}
`