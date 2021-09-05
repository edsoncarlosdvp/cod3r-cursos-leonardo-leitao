import styled from 'styled-components'

interface TextProps{
    $color?: string
    $fontSize: string
}

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #000;
`

const Text = styled.span<TextProps>`
    color: ${props => props.$color};
    font-size: ${props => props.$fontSize};
`

const ContentBtn = styled.div`
    display: flex;
`

const ButtonStyles = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    width: 80px;
    height: 80px;
    margin: 5px;
    border: none;
`

export { Container, Text, ContentBtn, ButtonStyles }
