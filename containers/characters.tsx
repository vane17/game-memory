//----- components
import { CardsCharacters } from '../components';

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

interface CharactersProps {
  resData: CharacterInfo[];
}

export const Characters : React.FC<CharactersProps> = ({resData}) =>{

  return (
    <section className='characters'>
      {
        resData?.map((item)=>{
          return (
            <CardsCharacters info ={item}/>
          )
        })
      }
    </section>
  )
}
