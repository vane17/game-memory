
import { useState } from "react";

//----- next ui
import { Button } from "@nextui-org/react";

//---- containers
import { Game } from '../containers';
import { Characters } from '../containers';

//----- constant
const API = 'https://apisimpsons.fly.dev/api';

//----- interface
interface HomeProps {
  res: any;
}

type SelectedOption = 'characters' | 'game';

const Home: React.FC<HomeProps> = ({ res }) => {
  const [selected, setSelected] = useState('characters')

  const optionsSeen: Record<SelectedOption, JSX.Element> = {
    'characters': <Characters resData={res?.docs} />,
    'game': <Game resData={res?.docs} />
  }

  return (
    <section className="game">
      <Button.Group color="gradient" ghost size="xl">
        <Button onClick={()=>setSelected('characters')}>Personajes</Button>
        <Button onClick={()=>setSelected('game')}>Juego</Button>
      </Button.Group>

      <section className="game__container">
        {optionsSeen[selected as SelectedOption]}
      </section>
    </section>
  )
}

export default Home;


export const getStaticProps = (async () => {

  const resFetch = await fetch(`${API}/personajes?limit=30&page=1`)
  const res = await resFetch.json()

  return {
    props: {
      res,
    }
  }
})