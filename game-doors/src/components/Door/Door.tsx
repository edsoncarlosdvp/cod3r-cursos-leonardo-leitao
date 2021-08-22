import DoorModel from '../../model/DoorModel'
import { Container, Frame, Content, NumberDoor, Knob, Selected, Floor } from './DoorStyles'

interface DoorProps {
    value: DoorModel
}

export const Door = (props: DoorProps): JSX.Element => {
    const value = props.value
    const selected = props.Selected ? props.Selected : ''
    return (
        <Container>
            <Frame className={`${selected}`}>
                <Content>
                    <NumberDoor>{value.num}</NumberDoor>
                    <Knob />
                </Content>
            </Frame>
            <Floor />
        </Container>
    )
}
