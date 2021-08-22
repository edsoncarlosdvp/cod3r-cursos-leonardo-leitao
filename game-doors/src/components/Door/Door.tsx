import DoorModel from '../../model/DoorModel'
import { Container, Frame, Content, NumberDoor, Knob, Selected, Floor } from './DoorStyles'

interface DoorProps {
    door: DoorModel
}

export const Door = (props: DoorProps): JSX.Element => {
    const { door } = props
    const selected = props.Selected ? props.Selected : ''
    return (
        <Container>
            <Frame className={`${selected}`}>
                <Content>
                    <NumberDoor>{door.num}</NumberDoor>
                    <Knob />
                </Content>
            </Frame>
            <Floor />
        </Container>
    )
}
