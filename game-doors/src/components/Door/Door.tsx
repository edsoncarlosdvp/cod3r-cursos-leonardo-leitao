import { Gif } from '../Gif'
import { Container, Frame, Content, Floor, NumberDoor } from './DoorStyles'

export const Door = (): JSX.Element => {
    return (
        <Container>
            <Frame>
                <Content>
                    <NumberDoor>3</NumberDoor>
                </Content>
            </Frame>
            <Floor />
        </Container>
    )
}