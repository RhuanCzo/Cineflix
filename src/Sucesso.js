import styled from "styled-components"
import sucesso from "./imagens/0a6cc1e49f8c713609bc475daa1a754d.png"
import { Link } from "react-router-dom"


export default function Sucesso({dados}) {
const {ids, name, cpf, title, date, hours} = dados
    return (
        <Container>
            <Titulo><h1><img src={sucesso} />Pedido finalizado!</h1></Titulo>
            <ContainerHorarios>
                <Horario>
                    <HeaderHorario>
                        <h1>Filme e sessão</h1>
                    </HeaderHorario>
                    <hr className="linha-divisao"></hr>
                    <FooterHorarios>
                        <h1>
                            {title}
                        </h1>
                        <h1>
                            {date} às {hours}
                        </h1>
                    </FooterHorarios>
                    <HeaderHorario>
                        <h1>Ingressos</h1>
                    </HeaderHorario>
                    <hr className="linha-divisao"></hr>
                    <FooterHorarios>
                            {ids.map ((i) => (
                        <h1>  {i} </h1>
                            ))}
                    </FooterHorarios>
                    <HeaderHorario>
                        <h1>Comprador(a)</h1>
                    </HeaderHorario>
                    <hr className="linha-divisao"></hr>
                    <FooterHorarios>
                        <h1>
                            Nome: {name}
                        </h1>
                        <h1>
                            CPF: {cpf}
                        </h1>
                    </FooterHorarios>

                </Horario>
                <button><Link to={"/"} style={{textDecoration: "none", color:"#ffffff"}}>Voltar para tela inicial</Link></button>
            </ContainerHorarios>
        </Container>

    )
}
const Container = styled.h1`
min-height: 100dvh;
background-color: #293845;
`
const Titulo = styled.div`
  color: #9DB899;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  font-size: 30px;

  img {
    height: 25px;
    width: 25px;
  }
`
const ContainerHorarios = styled.div`
height: 100dvh;
width: 100%;
display: flex;
flex-direction: column;
align-items:center ;
padding-top: 20px;

button {
    font-size: 18px;
    background-color: #EE897F;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 40px;
    border-radius: 10px;
    margin-top: 10px;
    margin: 10px 0;
}
`
const Horario = styled.div`
color: #ffffff;
background-color: #2B2D36;
display: flex;
flex-direction: column;
font-size: 22px;
border-radius: 10px;
width: 80%;
padding: 20px;
height: 50%;


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
color: #EE897F;


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
flex-direction: column;
align-items: center;
text-align: center;
padding-top: 10px;
text

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