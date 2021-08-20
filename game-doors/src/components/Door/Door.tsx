import { Gif } from '../Gif'
import { Container, Frame, Content, NumberDoor, Knob, Floor } from './DoorStyles'

export const Door = (): JSX.Element => {
    return (
        <Container>
            <Frame>
                <Content>
                    <NumberDoor>3</NumberDoor>
                    <Knob />
                </Content>
            </Frame>
            <Floor />
        </Container>
    )
}
