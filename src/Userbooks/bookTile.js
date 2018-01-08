//this is very similar to the other book tile, although with extended
//functionality for deleting books
import React from "react";
import { Tile, TextContainer, TileButton } from './ub_styled.js';

class BookTile extends React.Component{
  render(){
    return (
      <Tile key={this.props.index} style={{
        backgroundImage: `url(http://localhost:3091/${this.props.book.file.filename})`,
        backgroundSize: 'cover',
      }}>
        <TextContainer>
          <h1>{this.props.book.title}</h1>
          <h1>{this.props.book.author}</h1>
          <TileButton onClick={()=> this.props.deleteBook(this.props.book._id)}>Delete Me</TileButton>
        </TextContainer>
      </Tile>
    );
  }
}

export default BookTile;
