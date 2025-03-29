import logo from "./imagens/672523591ef2f811a382ae5c89e262c0.png"
import Rota from "./Rota"
import Sessao from "./Sessao.js"
import Assentos from "./Assentos.js"
import styled from "styled-components"
import Sucesso from "./Sucesso.js"
import { useState } from "react"

export default function PaginaPrincipal () {
  const [name, setName] = useState ()
  const [description, setDescription] = useState ()
  const [url, setUrl] = useState ()
    return (
    <Container>
      <NavBar><img src={logo}/><h1>Cineflix</h1></NavBar>
      <Conteudo>
       <Sucesso/>
      </Conteudo>
     
  
    <div className="page add-image">
      <div className="wrapper">
        <form>

        <div className="input-group">
          <label forHTML="name" className="title">Nome</label>
          <input type="text"
          id="name"
          value={name}
          required
          onChange={e => setName(e.target.value)} />
        </div>

        <div className="input-group">
        <label forHTML="desciption" className="title">Descrição</label>
          <input type="text"
          id="description"
          value={description}
          required
          onChange={e => setDescription(e.target.value)} />
        </div>

        <div className="input-group">
        <label forHTML="url" className="title">Url</label>
          <input type="text"
          id="url"
          value={url}
          required
          onChange={e => setUrl(e.target.value)} />
        </div>

        <button type="submit" className="save-button disabled">Adicionar Imagem</button>
          </form>
      </div>
    </div>

    </Container>
    )
}

const Container = styled.h1 `
height: 100dvh;
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
display:flex;
flex-direction: column;
flex-wrap: wrap;
font-size: 30px;

`