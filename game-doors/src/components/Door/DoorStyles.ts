import styled from "styled-components";

interface SelectedX {
    borderColor: string;
}

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
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
    width: 90%;
    border-top: 5px brown solid;
    border-right: 5px brown solid;
    border-left: 5px brown solid;
`;

const NumberDoor = styled.span`
    font-size: 3rem;
`;

const Knob = styled.span`
    position: absolute;
    align-self: flex-start;
    top: calc(0.45 * var(--hight-door));
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: brown;
`;

const Selected = styled.span<SelectedX>`
    border-top: 5px yellow solid;
    border-right: 5px yellow solid;
    border-left: 5px yellow solid;
`;

const Floor = styled.div`
    width: 100%;
    height: 10px;
    background-color: #ddd;
`;

export { Container, Frame, Content, NumberDoor, Knob, Selected, Floor };
