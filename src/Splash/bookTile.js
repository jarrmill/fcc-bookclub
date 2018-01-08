import React from "react";
import { Tile, TextContainer } from '../Home/home_styled.js';
import _ from 'lodash';

class BookTile extends React.Component{
  render(){
    return (
      <Tile key={this.props.index} style={{
        backgroundImage: `url(https://fcc-bookclub-server.herokuapp.com/${this.props.book.file.filename})`,
        backgroundSize: 'cover',
      }}>
        <TextContainer>
          <h1>{this.props.book.title}</h1>
          <p>{this.props.book.author}</p>
          <p>{this.props.book.desc}</p>
          <p>{this.props.book.desc}</p>
        </TextContainer>
      </Tile>
    );
  }
}

export default BookTile;
