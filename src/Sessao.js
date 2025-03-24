import styled from "styled-components"
import calendario from "./imagens/337b27f5e055c98e5e44c0fd97cb2f42.png"

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
  width: 300px;
  height: 2px;
  background-color: #4E5A65; /* Cor da linha */
  margin: 20px 0; /* Espaço ao redor da linha */

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
