import styled from 'styled-components'

export const Container = styled.div`

display: flex;
flex-direction: column;
gap: 8px;

>label{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
color: #C4C4CC;
}


> input{
    background: #0D1D25;
    border-radius: 8px;
    width: 348px;
    height: 48px;
    padding: 20px;
    color: #7C7C8A;
}

`