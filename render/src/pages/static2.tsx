interface numProps {
    num: number
}

export function getStaticProps() {
    return {
        props: {
            num: Math.random()
        }
    }
}

export default function Static2(props: numProps): JSX.Element {
    return (
        <div>
            <h1>Estático #02</h1>
            <h2>{props.num}</h2>
        </div>
    )
}