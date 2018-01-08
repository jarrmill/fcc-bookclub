import styled from 'styled-components';

export const Button = styled.button`
  height: 100%;
  background-color: white;
  border: none;
  border-bottom: 1px solid transparent;
  border-radius: 0px;

  &:hover{
    border-bottom: 1px solid #e67e22;
  }
  &:focus{
    outline: none;
    border-bottom: 1px solid #d35400;
  }
`
export const Header = styled.div`
  height: 15px;
`
export const Logo = styled.img`
  height: 10px;
`
export const LogoContainer = styled.div`
  display: inline;
  flex-direction: row;
  height: 10px;
`
export const Title = styled.p`
  display: inline;
  font-size: 80%;
  height: 10px;
  margin: 0px 10px 0px 5px;
`
