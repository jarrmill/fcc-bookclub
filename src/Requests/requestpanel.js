import React from "react";
import { TextContainer, RequestsContainer} from './requests_styled';
import { BookContainer, Book, BookImage, Text } from './requests_styled';
import PropTypes from 'prop-types';

class RequestPanel extends React.Component{
  render(){
    console.log("Request: ", this.props.request);
    const off_path = `http://localhost:3091/${this.props.offered.file.filename}`
    const req_path = `http://localhost:3091/${this.props.requested.file.filename}`
    const isOdd = (this.props.index % 2 === 0);

    return (
      <RequestsContainer key={this.props.index} isOdd={isOdd}>
        <BookContainer>
         <Book offer={true}>
           <BookImage src={req_path} />
           <TextContainer>
             <Text>Title: {this.props.requested.title}</Text>
             <Text><i>Owner: {this.props.requested.user}</i></Text>
           </TextContainer>
         </Book>
        </BookContainer>
        <BookContainer>
          <Book offer={false}>
            <BookImage src={off_path} />
            <TextContainer>
              <Text><b>Title: {this.props.offered.title}</b></Text>
              <Text><i>Owner: {this.props.offered.user}</i></Text>
            </TextContainer>
          </Book>
        </BookContainer>
      </RequestsContainer>
    );
  }
}
RequestPanel.propTypes = {
  offer: PropTypes.object.isRequired,
  offered: PropTypes.object.isRequired,
  requested: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}
export default RequestPanel;
