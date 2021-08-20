import { Door } from '../components/Door'
import { Container } from '../styles/home'

export default function Home(): JSX.Element {
    return (
        <Container>
            <Door />
            <Door />
            <Door />
        </Container>
    )
}
