import { Gif } from '../Gif'
import { Container, Frame, Content, NumberDoor, Knob, Selected, Floor } from './DoorStyles'

export const Door = (props: { Selected: string }): JSX.Element => {
    const selected = props.Selected ? props.Selected : ''
    return (
        <Container>
            <Frame className={`${selected}`}>
                <Content>
                    <NumberDoor>3</NumberDoor>
                    <Knob />
                </Content>
            </Frame>
            <Floor />
        </Container>
    )
}
