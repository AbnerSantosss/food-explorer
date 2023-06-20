import {Container, Form } from './styles'
import {Input} from '../../Components/Input'
import {Button} from  '../../Components/Button'
import ImageExplorer from '../../img/baner.svg'

export function SignIn (){
    return (
      <Container>
        <div>
        
        <img src={ImageExplorer} alt="" />
        
        </div>
        <Form>
          <h1>Faça login</h1>
          
          <Input label="Email" place="Exemplo: exemplo@exemplo.com.br"/>
          <Input label="Senha" place="Senha"/>
          <Button title="Entrar"/>
          <a href="#">Criar uma conta</a>
        </Form>
       
        
      </Container>
    );
}

