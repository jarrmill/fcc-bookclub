import React from "react";
import { ButtonContainer, OfferContainer, BookContainer, Book, BookImage} from './offers_styled';
import { TextContainer, Text, Button } from './offers_styled';
import PropTypes from 'prop-types';
class OfferPanel extends React.Component{
  //http://localhost:3091/${this.props.book.file.filename

  render(){
    const off_path = `https://fcc-bookclub-server.herokuapp.com/${this.props.offered.file.filename}`
    const req_path = `https://fcc-bookclub-server.herokuapp.com/${this.props.requested.file.filename}`
    const isOdd = (this.props.index % 2 === 0);
    return (
      <OfferContainer key={this.props.index} isOdd={isOdd}>
        <ButtonContainer>
          <Button accept={true} onClick={() => this.props.acceptTrade(this.props.request)}>accept</Button>
          <Button accept={false} >decline</Button>
        </ButtonContainer>
        <BookContainer>
         <Book>
           <BookImage src={req_path}/>
           <TextContainer>
             <Text><b>{this.props.requested.title}</b></Text>
             <Text>By {this.props.requested.author}</Text>
             <Text>Owner: {this.props.requested.user}</Text>
           </TextContainer>
         </Book>
         <Book>
          <BookImage src={off_path} />
          <TextContainer>
            <Text><b>{this.props.offered.title}</b></Text>
            <Text>By {this.props.offered.author}</Text>
            <Text>Owner: {this.props.offered.user}</Text>
          </TextContainer>
         </Book>
        </BookContainer>
      </OfferContainer>
    );
  }
}
OfferPanel.propTypes = {
  offer: PropTypes.object.isRequired,
  offered: PropTypes.object.isRequired,
  requested: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}
export default OfferPanel;
