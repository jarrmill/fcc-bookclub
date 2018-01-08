import styled from 'styled-components';

export const MainPage = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: scroll;
`
export const TileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;

`
export const Tile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 0 0 auto;
  width: 24.5%;
  height: 400px;
  margin: 2px;
  box-sizing: border-box;
  background-color: white;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  padding-bottom: 20px;
  padding-left: 20px;
  background-color: rgba(1,1,1,0.5);
  color: white;
  opacity: 0;
  transition: opacity .6s;

  &:hover {

    opacity: 1;
  }
`
export const TileButton = styled.button`
  width: 120px;
  height: 30px;
  background-color: white;
  color: #333;
  border: none;
  outline: none;

  &:hover {
    background-color: #ddd;
    color: #222;
  }
  &:focus {
    outline: none;
  }
`
export const ExitButton = styled.button`
  border: none;
  background-color: #666;
  border-radius: 50%;
  color: white;
  height: 25px;
  width: 25px;

  &:hover {
    background-color: #c0392b;
    color: #ddd;
  }
`
export const ModalButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #2ecc71;
  color: white;
  height: 30px;
  width: 100px;

  &:hover {
    background-color: #27ae60;
  }
  &:active {
    outline:none;
  }

`
