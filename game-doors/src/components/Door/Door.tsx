import { StylesProvider } from '@material-ui/core'
import DoorModel from '../../model/DoorModel'
import { Container, Frame, Content, NumberDoor, Knob, Selected, Floor } from './DoorStyles'

interface DoorProps {
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
}

const defaultStyle: {
    borderTop: string
    borderRight: string
    borderLeft: string
} = {
    borderTop: '5px yellow solid',
    borderRight: '5px yellow solid',
    borderLeft: '5px yellow solid'
}

const newStyle: {
    borderTop: string
    borderRight: string
    borderLeft: string
} = {
    borderTop: '5px brown solid',
    borderRight: '5px brown solid',
    borderLeft: '5px brown solid'
}

export const Door = (props: DoorProps): JSX.Element => {
    const door = props.value
    const selected = door.selected && !door.open ? styles.selected : ''
    const changeSelected = e => props.onChange(door.changeSelected())
    // const open = e => {
    //     e.stopPropagation()
    //     props.onChange(door.open())
    // }

    function renderDoor() {
        return (
            <Frame onClick={changeSelected}>
                <Content>
                    <NumberDoor>{door.num}</NumberDoor>
                    <Knob />
                </Content>
            </Frame>
        )
    }

    return (
        <Container>
            {door.open ? false : renderDoor()}
            <Floor />
        </Container>
    )
}
