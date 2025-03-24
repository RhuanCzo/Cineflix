import Filme1 from "./imagens/848ca605770f4105c7f94f27aefaa7cf.png"
import styled from "styled-components"

export default function Rota () {
return (
<>
    <Titulo><h1>Em Cartaz</h1></Titulo>
        <ContainerCartazes>
        <Cartaz>
          <img src={Filme1}/>
        </Cartaz>
        </ContainerCartazes>
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


const ContainerCartazes = styled.div `
justify-content: center;
display: flex;
flex-wrap: WRAP;
`

const Cartaz = styled.div `
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