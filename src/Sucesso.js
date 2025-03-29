import styled from "styled-components"
import sucesso from "./imagens/0a6cc1e49f8c713609bc475daa1a754d.png"
import calendario from "./imagens/337b27f5e055c98e5e44c0fd97cb2f42.png"
import logo from "./imagens/672523591ef2f811a382ae5c89e262c0.png"
import Filme1 from "./imagens/848ca605770f4105c7f94f27aefaa7cf.png"

export default function Sucesso() {
    return (
        <>
            <Titulo><h1><img src={sucesso} />Pedido finalizado!</h1></Titulo>
            <ContainerHorarios>
                <Horario>
                    <HeaderHorario>
                        <h1>Filme e sessão</h1>
                    </HeaderHorario>
                    <hr className="linha-divisao"></hr>
                    <FooterHorarios>
                        <h1>
                            Homem-Aranha: através do aranhaverso
                            22/03/2024 às 21:00
                        </h1>
                    </FooterHorarios>
                    <HeaderHorario>
                        <h1>Ingressos</h1>
                    </HeaderHorario>
                    <hr className="linha-divisao"></hr>
                    <FooterHorarios>
                        <h1>
                            Assento 15

                        </h1>
                        <h1>

                            Assento 16
                        </h1>
                    </FooterHorarios>
                    <HeaderHorario>
                        <h1>Comprador(a)</h1>
                    </HeaderHorario>
                    <hr className="linha-divisao"></hr>
                    <FooterHorarios>
                        <h1>
                            Nome: João da Silva Sauro
                        </h1>
                        <h1>
                            CPF: 123.456.789-10
                        </h1>
                    </FooterHorarios>

                </Horario>
                <button>Voltar para tela inicial</button>
            </ContainerHorarios>
        </>

    )
}

const Titulo = styled.div`
  color: #9DB899;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

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

const Footer = styled.footer`
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