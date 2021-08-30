import { useState } from 'react'
import { Door } from '@components/Door'
import DoorModel from '@model/DoorModel'
import { createDoors, refreshDoors } from '@features/Doors'
import { Container, Content, NavigationBar } from '@styles/home'
import Link from 'next/link'
import { Button } from '@material-ui/core'

export default function Game(): JSX.Element {
    const [doors, setDoors] = useState(createDoors(10, 1))

    function renderDoors() {
        return doors.map(door => {
            return <Door key={door.num} value={door} onChange={(newDoor: DoorModel) => setDoors(refreshDoors(doors, newDoor))} />
        })
    }

    return (
        <Container>
            <Content>
                {renderDoors()}
            </Content>
            <NavigationBar>
                <Link href="/">
                    <Button variant="contained" color="secondary">Reiniciar Jogo</Button>
                </Link>
            </NavigationBar>
        </Container>
    )
}
