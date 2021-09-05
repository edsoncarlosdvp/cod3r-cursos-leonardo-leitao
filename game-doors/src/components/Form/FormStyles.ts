import link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Content = styled.div`
    display: flex;
`

const LinkStyles = styled.a`
    cursor: pointer;
`

export { Container, Content, LinkStyles}
