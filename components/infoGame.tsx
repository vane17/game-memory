
import React from 'react';

//----- nextui
import { Button } from "@nextui-org/react";

//----- interface
interface InfoGameProps {
  setJugarInPLay: (item: boolean) => void;
}

export const InfoGame : React.FC<InfoGameProps> = ({ setJugarInPLay }) => {

  return (

    <section className="info-game">

      <section>
        <h2>Desafio de Memoria</h2>
        <p>Este juego es un desafío mental en el que los jugadores
        buscan parejas de cartas al voltearlas,
        comenzando con tres parejas y aumentando de dos en dos en cada nivel. <br/> <br/>
        El objetivo es encontrar todas las parejas en un tiempo limitado de 60 segundos,
        mientras se avanza a través de niveles más difíciles,
        poniendo a prueba la agudeza y la memoria visual de los participantes
        para alcanzar el nivel más alto y descubrir la mayor cantidad de parejas posibles.</p>
      </section>

      <Button css={{marginTop: '20px'}} color="gradient" onClick={() => setJugarInPLay(true)}>
        Jugar
      </Button>
    </section>
  )
}
