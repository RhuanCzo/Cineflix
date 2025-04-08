import Filme1 from "./imagens/848ca605770f4105c7f94f27aefaa7cf.png"
import styled from "styled-components"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export default function Rota() {
  const [filmes, setFilmes] = useState([])

  const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
  promisse.then ((response) => {setFilmes(response.data)})
  return (
    <>
      <Titulo><h1>Em Cartaz</h1></Titulo>
      <ContainerCartazes>
        {filmes.map ((f) => (
         <Link to={`/sessoes/${f.id}`}>         
         <Cartaz key={f.id}><img src={f.posterURL} /></Cartaz>      
         </Link> 
        ))}
      </ContainerCartazes>
    </>

  )

}

const Titulo = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`
const ContainerCartazes = styled.div`
justify-content: center;
display: flex;
flex-wrap: WRAP;
`
const Cartaz = styled.div`
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