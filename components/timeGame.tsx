
import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

//----nextui
import { Modal, Text } from "@nextui-org/react";

//----- interface
interface TimeGameProps {
  jugarInPLay: boolean;
  points: number;
  level: number;
  finishGame: () => void;
}

export const TimeGame : React.FC<TimeGameProps> = ({ jugarInPLay , points, level, finishGame}) => {

  const [visible, setVisible] = React.useState(false);

  const closeHandler = () => {
    finishGame();
    setVisible(false);
  };

  return (
    <section className="time-game">
      <section className="time-game__card">
        <p>Nivel: <span>{level}</span></p>
        <p>Puntos acumulados: <span>{points}</span> </p>
      </section>

      <CountdownCircleTimer
        isPlaying={jugarInPLay}
        duration={60}
        colors={['#F0D3FC', '#DDA9F9', '#C17CEF','#A258DF', '#5E1DAD','#220760','#220760']}
        colorsTime={[60, 50, 40, 30, 20 , 10, 0]}
        onComplete={() => {
          setVisible(true);
        }}
      >
        {({ remainingTime }) => <p>{remainingTime} sg</p>}
      </CountdownCircleTimer>

      <Modal
        closeButton
        animated={false}
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        preventClose={true}
      >

        <Modal.Header>
          <Text id="modal-title" size={22}>Felicitaciones!!!</Text>
        </Modal.Header>
        <Modal.Body>
          <p>Ganaste {points} puntos y llegaste al nivel {level} </p>
        </Modal.Body>
      </Modal>

    </section>
  )
}
