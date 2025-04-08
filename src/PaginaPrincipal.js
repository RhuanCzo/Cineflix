import logo from "./imagens/672523591ef2f811a382ae5c89e262c0.png"
import Rota from "./Rota"
import styled from "styled-components"

export default function PaginaPrincipal () {
    return (
    <Container>
      <Conteudo>
        <Rota/>
      </Conteudo>
    </Container>
    )
}

const Container = styled.h1 `
height: 100vh;
background-color: #293845;

`
const NavBar = styled.header `
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
margin: 0 auto;
display:flex;
flex-direction: column;
flex-wrap: wrap;
font-size: 30px;
background-color: #293845;
`