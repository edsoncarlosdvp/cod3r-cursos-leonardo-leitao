//import Link from 'next/link'
import { Card } from '@components/Card/Card'
import { Container, Content, LinkStyles } from '@components/Form'

export default function Form(): JSX.Element {
    return (
        <Container>
            <Content>
                <Card bgcolor="#c0392c"><h1>Monty Hall</h1></Card>
                <Card />
            </Content>
            <Content>
                <Card />
                <Card bgcolor="#28a085">
                    <LinkStyles>
                        <a href="./game/10/2">
                            <h1>Iniciar</h1>
                        </a>
                    </LinkStyles>
                </Card>
            </Content>
        </Container>
    )
}
