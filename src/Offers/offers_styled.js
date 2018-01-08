import styled from 'styled-components';


export const MainContainer = styled.div`
  display: flex;
  font-family: Helvetica, Sans-Serif;
  height: 100vh;
  width: 100vw;
`
export const OfferContainer = styled.div`
  background-color: ${props => props.isOdd ? '#ecf0f1' : '#bdc3c7' };
  display: flex;
  height: 200px;
  margin-bottom: 5px;
  width: 100vw;
`
export const ButtonContainer = styled.div`
  align-items: center;
  border-right: 1px solid #95a5a6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 20%;

`
export const Button = styled.button`
  background-color: ${props => props.accept ? '#2ecc71' : "#e74c3c"};
  border: none;
  height: 50px;
  width: 80%;
  margin: 5px 0px 5px 0px;

  &:hover{
      background-color: ${props => props.accept ? '#27ae60' : "#c0392b"};
  }
`
export const BookContainer = styled.div`
  display: flex;
  width: 90%;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  margin: 0;

`
export const Book = styled.div`
  align-items: center;
  display: flex;
  font-family: Helvetica, Sans-Serif;
  justify-content: flex-start;
  padding: 5px;
  width: 50%;
`
export const BookImage = styled.img`
  background-color: blue;
  height: 150px;
  object-fit: cover;
  margin: 5px;
  width: 110px
`
export const Text = styled.p`
  margin-bottom: 0px;
`
