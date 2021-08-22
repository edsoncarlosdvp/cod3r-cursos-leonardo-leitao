import DoorModel from '../../model/DoorModel'
import { Container, Frame, Content, NumberDoor, Knob, Selected, Floor } from './DoorStyles'

interface DoorProps {
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
}

export const Door = (props: DoorProps): JSX.Element => {
    const value = props.value
    const selected = props.Selected ? props.Selected : ''
    const changeSelected = e => props.onChange(value.changeSelected())
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
