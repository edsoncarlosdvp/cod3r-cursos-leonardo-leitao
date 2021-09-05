import { Container, Text, ContentBtn, ButtonStyles } from './'

interface EntryNumericProps {
    text: string
    value: number
    onChange: (newValue: number) => void
}

const EntryNumeric = (props: EntryNumericProps): JSX.Element => {
    return (
        <Container>
            <Text $fontSize="1.5rem" $color="#555">{props.text}</Text>
            <Text $fontSize="6rem">{props.value}</Text>
            <ContentBtn>
                <ButtonStyles>-</ButtonStyles>
                <ButtonStyles>+</ButtonStyles>
            </ContentBtn>
        </Container>
    )
}

export default { EntryNumeric }
