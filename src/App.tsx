import { ThemeProvider } from "styled-components";
import { Button, Container, Form, Input } from "./style";
import { theme } from "./theme/theme";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container>
      <Form>
        <Input placeholder="E-mail"/>
        <Input placeholder="Senha" type="password"/>
        <Button>Entrar</Button>
      </Form>
    </Container>
    </ThemeProvider>
  );

}