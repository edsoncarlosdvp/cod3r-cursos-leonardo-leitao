import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: var(--width-door);
    height: var(--hight-door);
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    color: white;
    background-color: chocolate;
    padding: 15px;
`;

const Frame = styled.div`
    display: flex;
    flex-grow: 1;
    border-top: 5px brown solid;
    border-right: 5px brown solid;
    border-left: 5px brown solid;
`;

const NumberDoor = styled.span`
    font-size: 3rem;
`;

export { Container, Frame, Content, NumberDoor };
