import { Button, Container, Form, Input } from "./style";


export default function App() {
  return (
    <Container>
      <Form>
        <Input placeholder="E-mail"/>
        <Input placeholder="Senha" type="password"/>
        <Button>Entrar</Button>
      </Form>
    </Container>
  );

}