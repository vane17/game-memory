
import { useEffect, useState } from "react";
import confetti from 'canvas-confetti'

//----- components
import {CardsGame,InfoGame, TimeGame} from '../components'

//----- interface
interface Item {
    _id: string;
    Nombre: string;
    Imagen: string;
    Genero: string;
    Estado: string;
}
interface GameProps {
    resData: Item[];
}

export const Game : React.FC<GameProps> = ({resData}) =>{

    const [imagesCards, setImagesGames] = useState<Item[]>([])
    const [imagesSelected, setImagesSelected] = useState<Item[]>([])
    const [imagesOpened, setImagesOpened] = useState<Item[]>([])
    const [jugarInPLay, setJugarInPLay] = useState<boolean>(false)
    const [points, setPoints] = useState<number>(0)
    const [level, setLevel] = useState<number>(1)
    const [size, setSize] = useState<number>(3)

    useEffect(() => {
        getImagenes(size)
    }, [])

    const finishGame = () =>{
        setSize(3)
        setLevel(1)
        setPoints(0)
        setJugarInPLay(false)
        setImagesOpened([])
        setImagesSelected([])
        getImagenes(3)
    }

    const getImagenes = (size: number) =>{
        let newImages = resData?.slice(0, size).flatMap(item => [item, { ...item }]).sort(() => Math.random() - 0.5);
        setImagesGames(newImages)
    }

    const handleClick = (item:Item) => {
        if (jugarInPLay && !imagesOpened.includes(item) && !imagesSelected.includes(item)) {
            if (imagesSelected.length < 2) {
                setImagesSelected(selected => selected.concat(item))
            }
        }
    }

    useEffect(() => {
        if (imagesSelected.length === 2) {
            if (imagesSelected[0]?._id === imagesSelected[1]?._id) {
                setPoints(points + 50)
                setImagesOpened(opened => opened.concat(imagesSelected))
            }
            setTimeout(() => setImagesSelected([]), 500)
        }
    }, [imagesSelected])

    useEffect(() => {
        if (imagesOpened.length === imagesCards.length && imagesOpened.length) {
            setImagesSelected([]);
            setImagesOpened([]);
            setLevel(level + 1 );
            setSize(size + 2);
            getImagenes(size + 2);

            confetti({
                particleCount: 200,
                startVelocity: 30,
                spread: 300,
                gravity: 1.5,
                origin: {y: 0}
            })

        }
    }, [imagesOpened])

    return (
        <section>

            {
                jugarInPLay ? <TimeGame jugarInPLay={jugarInPLay} points={points} level={level} finishGame={finishGame}/> :  <InfoGame setJugarInPLay={setJugarInPLay}/>
            }

            <section className="container-game">
                {
                    imagesCards?.map((item, index) => {
                        let include = imagesSelected.includes(item) || imagesOpened.includes(item)
                        return <CardsGame item={item} include={include} key={index} handleClick={handleClick}/>
                    })

                }
            </section>
        </section>
    );
}



