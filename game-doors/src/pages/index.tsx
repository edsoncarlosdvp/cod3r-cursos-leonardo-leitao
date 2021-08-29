import { useState } from 'react'
import { Door } from '../components/Door'
import DoorModel from '../model/DoorModel'
import { createDoors, refreshDoors } from '@features/Doors'
import { Container } from '@styles/home'

export default function Home(): JSX.Element {
    const [doors, setDoors] = useState(createDoors(4, 2))

    function renderDoors() {
        return doors.map(door => {
            return <Door key={door.num} value={door} onChange={newDoor => setDoors(refreshDoors(doors, newDoor))} />
        })
    }

    return (
        <Container>
            {renderDoors()}
        </Container>
    )
}
