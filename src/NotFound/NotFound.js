import React from "react";
import { MainContainer, MainText, TextContainer, TextPic, SubText } from './nf_styled';

class NotFound extends React.Component{
  render(){
    const bigPic = "¯\\_(⊙︿⊙)_/¯";

    return (
      <MainContainer>
      <TextPic>{bigPic}</TextPic>
      <TextContainer>
        <MainText>No Books Found.</MainText>
        <SubText>Add some <a href="/addbook">books</a> and make trade requests!</SubText>
      </TextContainer>
      </MainContainer>
    );
  }
}

export default NotFound;
