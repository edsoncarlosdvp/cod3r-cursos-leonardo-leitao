import { useState } from 'react'
import { Container, Title, Content } from '../styles/home'

export default function form() {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(0)
    const [users, setUsers] = useState([])

    async function saveUser() {
        await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify({ nome, idade })
        })

        setNome('')
        setIdade(0)

        const resp = await fetch('/api/form')
        const users = await resp.json()
        setUsers(users)
    }

    function renderUsers() {
        return users.map((user, i) => {
            return <li key={i}>{user.nome} tem {user.idade} anos.</li>
        })
    }

    return (
        <Container container direction="column">
            <Title variant="h4">Integrando com API #02</Title>
            <Content container item direction="column" justifyContent="space-between">
                <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                <input type="number" value={idade} onChange={e => setIdade(+e.target.value)} />
                <button onClick={saveUser}>Enviar</button>
            </Content>

            <div>
                <ul>
                    {renderUsers}
                </ul>
            </div>
        </Container>
    )

}