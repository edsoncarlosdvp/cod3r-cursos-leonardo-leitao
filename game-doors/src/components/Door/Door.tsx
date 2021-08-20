import { Gif } from '../Gif'
import { ContainerDoor, NumberDoor } from './DoorStyles'

export const Door = (): JSX.Element => {
    return (
        <>
            <ContainerDoor>
                <NumberDoor>3</NumberDoor>
            </ContainerDoor>
        </>
    )
}
