import {Container, SectionIntro, Page, Description, Meals,MealsContent} from './style'
import cookieImage from '../../../img/cookieImage.svg'

import {Header} from '../../../Components/Header'

export function HomeUser (){
    return(
        <Container>
              <Header/>
            <Page>

            <SectionIntro>
            <img src={cookieImage} alt="imagem de um biscoito" />
           
            <Description>
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
             </Description>
            </SectionIntro>
            <Meals>
                <h1>Refeições</h1>
                <MealsContent>
                    
               </MealsContent>
            </Meals>

           



          
     
            </Page>
        </Container>
    )
}