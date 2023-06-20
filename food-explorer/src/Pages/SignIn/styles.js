import styled from  'styled-components'




export const Container = styled.div`
height: 100vh;
align-items: center;
display: flex;
padding: 20px;
justify-content: space-between;


> div{
  color: #FFFFFF;
 
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  >h1{
    color: #FFFFFF;
  }
}
  
`





export const Form = styled.form`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  background: rgb(0, 17, 25);
  border-radius: 16px;
  width: 476px;
  padding: 23px;
  height: min-content;
  gap: 28px;


  > h1 {
    color: #ffffff;
    font-size: 32px;
  }

  > a {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;

    text-decoration: none;
  }
`;