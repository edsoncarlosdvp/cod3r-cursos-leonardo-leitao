import { SetStateAction, useState } from 'react'
import { Card } from '@components/Card/Card'
import { Container, Content, LinkStyles } from '@components/Form'
import { EntryNumeric } from '@components/EntryNumeric'

export default function Form(): JSX.Element {
    const [qtdDoors, setQtdDoors] = useState(3)
    const [doorsWithGif, setDoorsWithGif] = useState(1)
    return (
        <Container>
            <Content>
                <Card bgcolor="#c0392c"><h1>Monty Hall</h1></Card>
                <Card>
                    <EntryNumeric
                        text="Qtd Doors?"
                        value={qtdDoors}
                        onChange={(newQtdDoors: SetStateAction<number>) => setQtdDoors(newQtdDoors)}
                    />
                </Card>
            </Content>
            <Content>
                <Card>
                    <EntryNumeric
                        text="Porta com presente?"
                        value={doorsWithGif}
                        onChange={(newDoorsWithGif: SetStateAction<number>) => setDoorsWithGif(newDoorsWithGif)}
                    />
                </Card>
                <Card bgcolor="#28a085">
                    <LinkStyles>
                        <a href={`./game/${qtdDoors}/${doorsWithGif}`}>
                            <h1>Iniciar</h1>
                        </a>
                    </LinkStyles>
                </Card>
            </Content>
        </Container>
    )
}
