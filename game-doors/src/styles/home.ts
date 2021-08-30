import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-self: stretch;
    justify-content: space-around;
`

const NavigationBar = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 16px 0;
`

export { Container, Content, NavigationBar }
