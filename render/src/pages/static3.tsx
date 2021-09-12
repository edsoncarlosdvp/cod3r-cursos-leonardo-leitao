interface numProps {
    num: number
}

export function getStaticProps() {
    return {
        revalidate: 7,
        props: {
            num: Math.random()
        }
    }
}

export default function Static3(props: numProps): JSX.Element {
    return (
        <div>
            <h1>Estático #03</h1>
            <h2>{props.num}</h2>
        </div>
    )
}