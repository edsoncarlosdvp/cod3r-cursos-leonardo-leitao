import styled from 'styled-components'

interface ContainerProps{
    bgcolor: string
}

const Container = styled.div<ContainerProps>`
    display: flex;
    width: 300px;
    height: 300px;
    background-color: ${props => props.bgcolor ?? '#ffffff'};
`

export { Container }
