import { Door } from '../components/Door'
import DoorModel from '../model/DoorModel'
import { Container } from '../styles/home'

export default function Home(): JSX.Element {
    const p1 = new DoorModel(1)
    const p2 = new DoorModel(2)
    const p3 = new DoorModel(3)
    return (
        <Container>
            <Door door={p1} />
            <Door door={p2} />
            <Door door={p3} />
        </Container>
    )
}
