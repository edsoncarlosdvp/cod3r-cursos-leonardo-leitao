import { useState } from 'react'
import { Door } from '../components/Door'
import DoorModel from '../model/DoorModel'
import { createDoors } from '@features/Doors'
import { Container } from '@styles/home'

export default function Home(): JSX.Element {
    const [doors, setDoors] = useState(createDoors(3, 2))

    function renderDoors() {
        return doors.map(doors => {
            return <Door key={doors.num} value={doors} onChange={console.log} />
        })
    }

    return (
        <Container>
            {renderDoors()}
        </Container>
    )
}
