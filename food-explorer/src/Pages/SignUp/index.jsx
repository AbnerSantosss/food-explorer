import {Container, Form } from './styles'
import {Input} from '../../Components/Input'
import {Button} from  '../../Components/Button'
import ImageExplorer from '../../img/baner.svg'
export function SignUp (){
    return (
      <Container>
        <div>
          <ImageExplorer/>
        <h1>food explorer</h1>
        </div>

       
        <Form>
          <h1>Crie sua conta</h1>
          <Input label="Seu Nome" place="Digite seu nome"/>
          <Input label="Email" place="Exemplo: exemplo@exemplo.com.br"/>
          <Input label="Senha" place="Senha"/>
          <Button title="Criar Conta"/>
          <a href="#">Ja tenho uma conta</a>
        </Form>
       
        
      </Container>
    );
}

