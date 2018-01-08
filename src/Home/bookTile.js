import React from "react";
import { Tile, TileButton, TextContainer } from './home_styled.js';
import _ from 'lodash';

class BookTile extends React.Component{
  renderButton(){
    if(!_.isEmpty(this.props.auth.user)){
      const current_user = this.props.auth.user.nickname;
      const book_owner = this.props.book.user;

      if (current_user === book_owner){
        return <TileButton onClick={() => {this.props.editBook(this.props.book)}}> Edit </TileButton>
      }
      return <TileButton onClick={()=> {this.props.initTrade(this.props.book)}}>Request Trade</TileButton>
    }
    return <div>no user profile</div>
  }
  render(){
    return (
      <Tile key={this.props.index} style={{
        backgroundImage: `url(https://fcc-bookclub-server.herokuapp.com//${this.props.book.file.filename})`,
        backgroundSize: 'cover',
      }}>
        {/*<TilePic src={`http://localhost:3091/${this.props.book.file.filename}`} />*/}
        <TextContainer>
          <h1>{this.props.book.title}</h1>
          <p>{this.props.book.author}</p>
          <p>{this.props.book.desc}</p>
          {this.renderButton()}
        </TextContainer>
      </Tile>
    );
  }
}

export default BookTile;
