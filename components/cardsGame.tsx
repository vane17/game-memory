
import React from 'react';

//----- interface
interface Item {
  _id: string;
  Nombre: string;
  Imagen: string;
  Genero: string;
  Estado: string;
}
interface CardsGamePropos {
  item: Item;
  include: boolean,
  handleClick: (item: Item) => void;
}

export const CardsGame : React.FC<CardsGamePropos> = ({ item,  include, handleClick }) => {

  return (

    <div className="container-game__card" onClick={()=>handleClick(item)}>

      <div className={`container-game__card--question ${include && 'card-front'}`}>
        <img src='./../question.svg' alt="icon question in card game" />
      </div>

      <div className={`container-game__card--img ${include && 'card-back'}`}>
        <img src={item.Imagen} alt="icon" />
      </div>
    </div>
  )
}

