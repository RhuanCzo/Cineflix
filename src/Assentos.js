import styled from "styled-components"
import logo from "./imagens/672523591ef2f811a382ae5c89e262c0.png"
import calendario from "./imagens/7ddd221074669a076b6971daa4476571.png"
import Filme1 from "./imagens/848ca605770f4105c7f94f27aefaa7cf.png"
import indisponivel from "./imagens/63126d2bb26ea557bc0ef7cf226ea586.png"


export default function Assentos () {
    return (
        <>
        <Titulo><h1>Selecione o(s) assento(s)</h1></Titulo>
        <ContainerAssentos>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <Assento></Assento>
            <hr className="linha-divisao"></hr>
        <Legend>
            <AssentoSelecionado></AssentoSelecionado>
            <Assento></Assento>
            <AssentoIndisponivel><img src={indisponivel} alt="sim"/></AssentoIndisponivel>
        </Legend>
        </ContainerAssentos>
        <Informacoes>
            Nome do comprador(a)
            <input  type="text" placeholder="Digite seu nome..."></input>

            CPF do comprador(a)
            <input  type="text" placeholder="Digite seu cpf..."></input>

            <button>Reservar Assento(s)</button>
        </Informacoes>
        <Footer>
          <ContainerFooter>
            <Resumo>
            <TituloFilme><img src={logo} alt="oi"/> <h1>Homem-Aranha: atr...</h1></TituloFilme>
            <TituloFilme><img src={calendario} alt="sim" /> <h1>  22/03/2024 às 21:00</h1></TituloFilme>
            </Resumo>
            <Imagem src={Filme1} />
          </ContainerFooter>
        </Footer>
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

const ContainerAssentos = styled.div`
padding-top: 20px;
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;

hr {
  border: 0;
  width: 280px;
  height: 1px;
  background-color: #4E5A65; /* Cor da linha */
  margin: 20px 0.5; /* Espaço ao redor da linha */

}
`

const Assento = styled.div`
border: 1px solid;
height: 25px;
width: 25px;
background-color: #9DB899; 
border-radius: 25px;
margin: 5px 3px;
font-size: 15px;
`
const AssentoSelecionado = styled.div`
border: 1px solid;
height: 25px;
width: 25px;
background-color: #EE897F; 
border-radius: 25px;
margin: 5px 3px;
font-size: 15px;
`
const AssentoIndisponivel = styled.div`
border: 1px solid;
height: 25px;
width: 25px; 
border-radius: 25px;
margin: 5px 3px;
font-size: 15px;

img {
    height: 25px;
    width: 25px;
}
`

const Legend = styled.div`
width: 80%;
display: flex;
justify-content: center;
justify-content:space-around ;
`

const Informacoes = styled.div`
width: 100%;
height: auto;
font-size: 18px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 10px 0;



input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 30px;
    border-radius: 10px;
    margin-top: 10px;
    margin: 10px 0;
}

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

const Resumo = styled.div`
display: flex;
flex-direction: column;
`


const TituloFilme = styled.div`
    display: flex;
    height: 50%;
    width: 100%;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    padding-top: 5px;

  img {
    height: 25px;
    width: 25px;
    padding-right:2px;
  }
`
const Footer = styled.footer `
  position: fixed;
  bottom: 0;
  height: 110px;
  width: 100%;
  background-color: #E0877E;

`