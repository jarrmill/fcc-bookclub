import styled from 'styled-components';
import BookImg from '../Assets/books3.jpg';

export const MainContainer = styled.div`
  align-items: center;
  background-image: url(${BookImg});
  background-size: cover;
  display: flex;
  height: 100vh;
  padding-left: 30px;
  width: 100vw;
`
export const FormContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 50%;
  opacity: .9;
  padding: 15px 15px 45px 15px;
  width: 50%;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const Input = styled.input`
  margin-bottom: 5px;
`
export const Submit = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #2ecc71;
  color: white;
  height: 30px;
  width: 120px;

  &:hover {
    background-color: #27ae60;
  }
  &:active {
    outline:none;
  }

`
