import React from "react";

class BookCheckbox extends React.Component{
  render(){
    return (
      <div><input type="checkbox"
                  checked={this.props.book === this.props.selectedBook}
                  onChange={(event) => this.props.handleChange(event, this.props.book)}
                  value={this.props.book.title}
                  />{this.props.book.title}</div>
    );
  }
}

export default BookCheckbox;
