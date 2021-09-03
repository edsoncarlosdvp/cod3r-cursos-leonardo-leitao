import { Container } from './'

// interface CardProps {
//     bgcolor?: string
// }

interface CardProps {
    bgcolor?: string
    color?: string
    children?: any
}

export const Card = (props: CardProps): JSX.Element => {
    return (
        <Container style={{ backgroundColor: props.bgcolor ?? "white", color: props.bgcolor ?? "blue" }}>
            {props.children}
        </Container>
    )
}
