// import {BiSearchAlt2} from 'react-icons/bi'
import {TfiReceipt} from 'react-icons/tfi'
import {GoSignOut} from 'react-icons/go'

import {Container, } from './style'
import LogoImage from  '../../img/logoHeader.svg'

export function Header(){
    return(
        
        <Container>
           
            <div>
                <img src={LogoImage} alt="logo" />
            </div>
            <input type="text" placeholder='Busque por pratos ou ingredientes'/>
            <button><TfiReceipt/><p>Pedidos(0)</p></button>
            <GoSignOut/>

            
        </Container>
    )
}