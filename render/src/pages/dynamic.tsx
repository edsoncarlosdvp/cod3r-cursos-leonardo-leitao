export function getServerSideProps() {
    console.log('[Server] gerando props...')
    const rand = Math.random()

    return {
        props: {
            num: rand
        }
    }
}

export default function Dynamic(props: any): JSX.Element {
    return (
        <div>
            <h1>Dinâmico #01</h1>
            <h2>{props.num}</h2>
        </div>
    )
}