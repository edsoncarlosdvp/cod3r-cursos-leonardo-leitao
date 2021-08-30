import { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import { Door } from '@components/Door'
import DoorModel from '@model/DoorModel'
import { createDoors, refreshDoors } from '@features/Doors'
import { Container, Content, NavigationBar } from '@styles/home'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Game(): JSX.Element {
    const router = useRouter()
    const [doors, setDoors] = useState([])

    useEffect(() => {
        const doors = router.query.doors
        const haveGif = router.query.haveGif
        setDoors(createDoors(doors, haveGif))
    }, [router?.query])

    function renderDoors() {
        return doors.map(door => {
            return <Door
                key={door.num}
                value={door}
                onChange={newDoor => setDoors(refreshDoors(doors, newDoor))}
            />
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
