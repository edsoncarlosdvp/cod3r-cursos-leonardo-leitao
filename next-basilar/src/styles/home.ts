import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";

const Container = styled(Grid)`
  padding: 0 16px;
`;

const Content = styled(Grid)`
  max-width: 350px;
  height: 130px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 16px;
`;

const Title = styled(Typography)``;

export { Container, Content, Title };
