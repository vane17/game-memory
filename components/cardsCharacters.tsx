
import React, { useState } from 'react';

//----- nextui
import { Card,  Row, Button, Text } from "@nextui-org/react";

//----- components
import { ModalInfoCharacters } from './modal';

//----- interface
interface CharacterInfo {
  _id: string;
  Nombre: string;
  Historia: string;
  Imagen: string;
  Genero: string;
  Estado: string;
  Ocupacion: string;
}

interface CardsCharactersProps {
  info: CharacterInfo;
}

export const CardsCharacters: React.FC<CardsCharactersProps> = ({ info }) => {

  const [modal, setModal] = useState<boolean>(false)

  return (

    <Card css={{ w: "180px", h: "280px"}}>

      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Text h3  size={16}>{info?.Nombre}</Text>
      </Card.Header>

      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={info?.Imagen}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
          css={{position: "relative", height: "auto"}}
        />
      </Card.Body>

      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row justify="flex-end">
          <Button flat auto rounded color="gradient" onClick={()=>setModal(true)}>
            <Text
              css={{ color: "inherit" }}
              size={12}
              weight="bold"
              transform="uppercase"
            >
              Ver mas
            </Text>
          </Button>
        </Row>
      </Card.Footer>

      <ModalInfoCharacters  visible={modal} closeHandler={()=> setModal(false)} info={info}/>

    </Card>
  )
}

