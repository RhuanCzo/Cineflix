import styled from "styled-components"
import calendario from "./imagens/337b27f5e055c98e5e44c0fd97cb2f42.png"
import logo from "./imagens/672523591ef2f811a382ae5c89e262c0.png"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Sessao() {
  const [filmes, setFilmes] = useState(null)
  const { idFilmes } = useParams()


  useEffect(() => {
    const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilmes}/showtimes`)
    promisse.then((res) => {
      setFilmes(res.data)
    })
    promisse.catch((error) => {
      console.log(error.data)
    })
  }, [])

  if (!filmes) {
    return ("carregando")
  }

  return (
    <>
      <Container>
        <Titulo><h1>Selecione o horário</h1></Titulo>
        <ContainerHorarios>
          {filmes.days.map((f) => (
            <Horario>
              <HeaderHorario>
                <img src={calendario} /> {f.weekday} {f.date}
              </HeaderHorario>
              <hr className="linha-divisao"></hr>
              {f.showtimes.map((showtime) => (
                <Link to={`/assentos/${showtime.id}`} style={{textDecoration:"none", color:"#EE897F"}}>
                  <FooterHorarios>
                    <div>{showtime.name}</div>
                  </FooterHorarios>
                </Link>
              ))}
            </Horario>
          ))}
          <Footer>
            <ContainerFooter>
              <TituloFilme><img src={logo} /> <h1>{filmes.title}</h1></TituloFilme>
              <Imagem src={filmes.posterURL} />
            </ContainerFooter>
          </Footer>
        </ContainerHorarios>
      </Container>
    </>
  )
}

const Container = styled.h1`
min-height: 100dvh;
background-color: #293845;
margin-bottom:100px;
`
const Titulo = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  font-size: 30px;
`
const ContainerHorarios = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items:center ;
padding-top: 20px;
`
const Horario = styled.div`
color: #ffffff;
background-color: #2B2D36;
display: flex;
flex-direction: column;
font-size: 20px;
border-radius: 10px;
width: 320px;
height: 150px;
margin-top:20px;

hr {
  border: 0;
  width: 260px;
  height: 1px;
  background-color: #4E5A65; /* Cor da linha */
  margin: 20px 0.5; /* Espaço ao redor da linha */

}
`
const HeaderHorario = styled.div`
padding-top: 15px;
display: flex;
align-items: center;
justify-content: center;

img {
  padding-right: 10px;
  height: 30px;
  width: 30px;
}
`
const FooterHorarios = styled.div`
display: flex;
justify-content: center;
padding-top: 5px;

div {
  background-color: #2B2D36;
  border: 2px solid #EE897F;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 70px;
  font-size:20px ;
}
`
const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  height: 100px;
  width: 100%;
  background-color: #E0877E;
  font-size: 20px;

`
const ContainerFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 25px;
  
`
const Imagem = styled.img`
height: 90px;
width: 60px;
border-radius: 10px;
`
const TituloFilme = styled.div`
    display: flex;
    height: 50%;
    width: 70%;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
  

  img {
    height: 25px;
    width: 25px;
  }
`