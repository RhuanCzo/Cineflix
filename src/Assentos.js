import styled from "styled-components"
import logo from "./imagens/672523591ef2f811a382ae5c89e262c0.png"
import calendario from "./imagens/7ddd221074669a076b6971daa4476571.png"
import Filme1 from "./imagens/848ca605770f4105c7f94f27aefaa7cf.png"
import indisponivel from "./imagens/63126d2bb26ea557bc0ef7cf226ea586.png"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Assento from "./Assento"
import { useNavigate } from "react-router-dom"



export default function Assentos({setDados}) {
  const { idSessao } = useParams()
  const [assentos, setAssentos] = useState(undefined)
  const [selecionados, setSelecionados] = useState ([])
  const [name, setName] = useState("")
  const [cpf, setCpf] = useState("")
  const navigate = useNavigate()
  

  useEffect(() => {
    const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
    promisse.then((res) => {
      setAssentos(res.data)
    })
    promisse.catch ((error) => {
      console.log(error.data)
    })

  }, [])

  if (!assentos) {
    return ("carregando")
  }

  function handleSeats (assento) {
    if (assento.isAvailable === false) {
      alert("assentos indisponivel")
    } else {
      const isSelected = selecionados.some(s => assento.id === s.id)
      if(isSelected) {
        const newArray = selecionados.filter(s => assento.id !== s.id)
        setSelecionados (newArray)
      } else {
        setSelecionados ([...selecionados, assento])
      }
    }
  }
  
  const dados = {
    ids: selecionados.map(a => a.name),
    name: name,
    cpf: cpf,
    title: assentos.movie.title,
    date: assentos.day.date,
    weekday: assentos.day.weekday,
    hours: assentos.name
  }
  function enviarDados (event) {
    event.preventDefault();
    navigate ("/sucesso")
    setDados(dados)
  }




  return (
    <Container>
      <Titulo>Selecione o(s) assento(s)</Titulo>
      <ContainerAssentos>
        {assentos.seats.map(assento => (
          <Assento
            key={assento.id}
            assento={assento}
            handleSeats={handleSeats}
            isSelected={selecionados.some(s => assento.id === s.id)}
            />
            
          ))}

        <hr className="linha-divisao"></hr>
        <Legend>
          <div>
          <AssentoSelecionado></AssentoSelecionado>
          Selecionado
          </div>
          <div>
          <Assento1></Assento1>
          Disponivel
          </div>
          <div>
          <AssentoIndisponivel><img src={indisponivel} alt="sim" /></AssentoIndisponivel>
          indisponivel
          </div>
        </Legend>
      </ContainerAssentos>
      <form onSubmit={enviarDados} action="" method="get" className="form">

      <Informacoes>
        <label style={{color:"#FFFFFF"}}>Nome do comprador(a)</label>
        <input value={name} required type="text" placeholder="Digite seu nome..." onChange={e => setName(e.target.value)}></input>

        <label style={{color:"#FFFFFF"}}>CPF do comprador(a)</label>
        <input value={cpf} required type="text" placeholder="Digite seu CPF..." onChange={e => setCpf(e.target.value)}></input>

        <button type="submit" >Reservar Assento(s)</button>
      </Informacoes>
      </form>
      <Footer>
        <ContainerFooter>
          <Resumo>
            <TituloFilme><img src={logo} alt="oi" /> <h1>{assentos.movie.title}</h1></TituloFilme>
            <TituloFilme><img src={calendario} alt="sim" /> <h1>{assentos.day.date} às {assentos.name}</h1></TituloFilme>
          </Resumo>
          <Imagem src={assentos.movie.posterURL} />
        </ContainerFooter>
      </Footer>
    </Container>
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

const Assento1 = styled.div`
border: 1px solid;
height: 25px;
width: 25px;
background-color: #9DB899; 
border-radius: 25px;
margin: 5px 3px;
font-size: 15px;
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
  font-size: 23px;
  
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
    padding-right: 5px;

  img {
    height: 25px;
    width: 25px;
    padding-right:2px;
  }
`
const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  height: 110px;
  width: 100%;
  background-color: #E0877E;

`