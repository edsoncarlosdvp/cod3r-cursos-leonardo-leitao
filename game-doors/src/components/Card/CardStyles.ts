import styled from 'styled-components'

// interface CardProps{
//     bgcolor?: string
//     color?: string
//     children?: string
// }

const Container = styled.div`
    display: flex;
    width: 300px;
    height: 300px;
    /* background-color: ${props => props.bgcolor ?? '#ffffff'};
    color: ${props => props.color ?? 'pink'}; */
    padding: 20px;
    margin: 5px;
`

export { Container }
