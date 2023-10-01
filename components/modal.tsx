
//----- nextui
import { Modal, Text } from "@nextui-org/react";

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
interface ModalInfoCharactersProps {
    visible: boolean;
    info: CharacterInfo;
    closeHandler: () => void;
 }

export const ModalInfoCharacters : React.FC<ModalInfoCharactersProps> = ({visible, closeHandler, info}) => {

    return (

        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
        >
            <Modal.Header>
                <Text id="modal-title" size={22}>{info.Nombre}</Text>
            </Modal.Header>
            <Modal.Body>
                <p>Estado: {info.Estado}</p>
                <p>Genero: {info.Genero}</p>
                <p>Historia: {info.Historia}</p>
                <p>Ocupacion: {info.Ocupacion}</p>
            </Modal.Body>
        </Modal>
    );
}



