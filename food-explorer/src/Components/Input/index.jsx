import {Container} from './style'

export function Input({label,place}){
    return(
        <Container>
            <label>{label}</label>
            <input type="text" placeholder={place}/>
            </Container>
    )
}