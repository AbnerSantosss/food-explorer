import styled from "styled-components"


export const Container = styled.div`
display: flex;
flex-direction: column;

height: 100vh;



`

export const Page = styled.div`
display: flex;
flex-direction: column;
width: 90%;
margin: 0 auto;

`


export const SectionIntro = styled.div`

background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
border-radius: 8px;
display: flex;

margin-top: 26px;
position: relative;
width: 100%;
height: 260px;
margin: 164px auto;


>img{
    position: absolute;
    bottom: 0;
}

`

export const Description = styled.div`
    position: absolute;
    right: 69px;
    top: 36%;
    text-align: center;



>h1{
font-family: 'Poppins';
font-style: normal;
font-size: 40px;
color: #E1E1E6;
}


>p{
    
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
color: #E1E1E6;
}




`

export const Meals = styled.div`
  > h1 {
    font-size: 32px;
    color: #e1e1e6;
    font-style: normal;
    font-weight: 500;
  }
`;

export const MealsContent = styled.div`
`