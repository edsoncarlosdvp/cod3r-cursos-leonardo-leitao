import { useState } from 'react'
import { Door } from '../components/Door'
import DoorModel from '../model/DoorModel'
import { Container } from '../styles/home'

export default function Home(): JSX.Element {
    const [p1, setP1] = useState(new DoorModel(1))
    return (
        <Container>
            <Door value={p1} />
        </Container>
    )
}
