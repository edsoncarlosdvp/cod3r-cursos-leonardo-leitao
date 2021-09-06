import { Container, Text, ContentBtn, ButtonStyles } from './'

interface EntryNumericProps {
    text: string
    value: number
    onChange: (newValue: number) => void
}

export default function EntryNum(props: EntryNumericProps): JSX.Element {
    const dec = () => { props.onChange(props.value - 1) }
    const inc = () => { props.onChange(props.value + 1) }
    return (
        <Container>
            <Text $fontSize="1.5rem" $color="#555">{props.text}</Text>
            <Text $fontSize="6rem">{props.value}</Text>
            <ContentBtn>
                <ButtonStyles onClick={dec}>-</ButtonStyles>
                <ButtonStyles onClick={inc}>+</ButtonStyles>
            </ContentBtn>
        </Container>
    )
}
