import {Container, Form , BackgroundLogin } from './styles'
import {Input} from '../../Components/Input'
import {Button} from  '../../Components/Button'
export function SignIn (){
    return (
      <Container>
        <div>
       
        <h1>Food explorer</h1>
        </div>
        <Form>
          <h1>Faça login</h1>
          
          <Input label="Email" place="Exemplo: exemplo@exemplo.com.br"/>
          <Input label="Senha" place="Senha"/>
          <Button title="Entrar"/>
          <a href="#">Criar Uma conta</a>
        </Form>
       
        
      </Container>
    );
}

