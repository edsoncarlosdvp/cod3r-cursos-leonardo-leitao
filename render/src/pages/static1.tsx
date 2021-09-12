//import { useEffect, useState } from 'react'

export default function Static1(): JSX.Element {
    // const [num, setNum] = useState(0)

    // useEffect(() => {
    //     setNum(Math.random())

    // }, [])
    return (
        <div>
            <h1>Estático #01 - Versão 2</h1>
            <h2>{Math.random()}</h2>
        </div>
    )
}