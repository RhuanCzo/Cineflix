import styled from "styled-components"
import calendario from "./imagens/337b27f5e055c98e5e44c0fd97cb2f42.png"
import logo from "./imagens/672523591ef2f811a382ae5c89e262c0.png"
import Filme1 from "./imagens/848ca605770f4105c7f94f27aefaa7cf.png"

export default function Sessao () {
    return (
        <>
        <Titulo><h1>Selecione o horário</h1></Titulo>
        <ContainerHorarios>
        <Horario>
          <HeaderHorario>
        <img src={calendario}/> <h1>Quinta-feira, 21/03/2024</h1>
          </HeaderHorario>
        <hr className="linha-divisao"></hr>
        <FooterHorarios>
          <div>10:00</div>
          <div>10:00</div>
          <div>10:00</div>
        </FooterHorarios>
        </Horario>
        <Footer>
          <ContainerFooter>
            <TituloFilme><img src={logo} /> <h1>Homem-Aranha: atr...</h1></TituloFilme>
            <Imagem src={Filme1} />
          </ContainerFooter>
        </Footer>
        </ContainerHorarios>

        </>
    )
}

const Titulo = styled.div `
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
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
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding-top: 10px;

div {
  display:inline;
  background-color: blue ;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 70px;
  font-size:20px ;
  margin-right: 10PX;
  margin-left: 10px;
}
`

const Footer = styled.footer `
  position: fixed;
  bottom: 0;
  height: 110px;
  width: 100%;
  background-color: #E0877E;

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