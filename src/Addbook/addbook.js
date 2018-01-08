import React, { Component } from 'react';
import { MainContainer, FormContainer, Submit } from './addbook_styled.js';
import { Form, Input } from './addbook_styled.js';
import superagent from 'superagent';

class AddBook extends Component {
  constructor(props){
    super(props);
    this.state = {"user":"joe"};
  }
  componentWillMount(){
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  login() {
    this.props.auth.login();
  }
  onSubmit = (event) => {
    event.preventDefault();
    //do submitting here
    console.log("button clicked");
    let formData = new FormData();
    const file = this.filesInput.files[0];

    formData.append("title", event.target.title.value);
    formData.append("author", event.target.author.value);
    formData.append("desc", event.target.desc.value);
    formData.append("genre", event.target.genre.value);
    formData.append("user", this.state.profile.nickname);
    formData.append("file", file);
    for (var key of formData){
      console.log(key);
    }
    const { getAccessToken } = this.props.auth;
    superagent.post('https://fcc-bookclub-server.herokuapp.com/bookclub/addbook')
    .send(formData)
    .set('Authorization', `Bearer ${getAccessToken()}`)
    .end((err, response) => {
      if(err) {
        //there was an error, hanle it here
        console.log("Error!", err);
      } else if (response.ok) {
        console.log("File submitted");
        this.props.history.push('/home');
      };
    });
  };
  render() {
    return (
      <MainContainer>
        <FormContainer>
          <h1>Your New Book</h1>
          <Form onSubmit={this.onSubmit}>
            <input type="file"
                   ref={(input) => { this.filesInput = input}}
                   name="file" />
            <Input type="text" name="title" placeholder="Title" />
            <Input type="text" name="author" placeholder="Author" />
            <Input type="text" name="genre" placeholder="Genre"/>
            <Input type="textarea" name="desc" placeholder="Description" />
            <br></br>
            <Submit type="submit">Submit</Submit>
          </Form>
        </FormContainer>
      </MainContainer>
    );
  }
}

export default AddBook;
