import styled from 'styled-components';
import img from '../Assets/banner.jpg';

export const BannerContainer = styled.div`
  height: 30vw;
  width: 100vw;

  background-image: url(${img});

  background-attachment: fixed;
  background-position: center;
  ackground-repeat: no-repeat;
  background-size: cover;

  margin-bottom: 5px;

`
export const Banner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 10%;
`
export const MainPage = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #eef;
`
export const TileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`
