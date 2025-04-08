import styled from "styled-components"
import { useState } from "react"
import { useEffect } from "react"

export default function Assento ( {assento, handleSeats, isSelected}) {
    const [status, setStatus] = useState ("selected")

    useEffect (() => {
        if (isSelected === true) {
            setStatus ("selected")
        } else if (assento.isAvailable) {
            setStatus ("available")
        } else {
            setStatus("unavailable")
        }
    },[isSelected]
)



    
    return (
        <>
          <AssentoItem status={status} onClick={() => handleSeats(assento)}>
            {assento.name}
          </AssentoItem>
        </>
    )
}
 const seatColors = {
    available: { background: " #9DB899", border: "#808F9D" },
    selected: { background: "#EE897F", border: "#EE897F" },
    unavailable: { background: "gray", border: "gray" }
}

const AssentoItem = styled.div`
    border: 1px solid ${props => seatColors[props.status].border};
    background-color: ${props => seatColors[props.status].background};
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`