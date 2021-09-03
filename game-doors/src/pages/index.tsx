import Link from 'next/link'
import { Card } from '@components/Card/Card'
import { ContainerForm } from '@components/Form'

export default function Form(): JSX.Element {
    return (
        <ContainerForm>
            <div>
                <Card bgcolor="#c0392c"><h1>Monty Hall</h1></Card>
                <Card />
            </div>
            <div>
                <Card />
                <Card bgcolor="#28a085">
                    <Link href="./game/10/2">
                        <h1>Iniciar</h1>
                    </Link>
                </Card>
            </div>
        </ContainerForm>
    )
}
