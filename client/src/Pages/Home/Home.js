import React from "react";
import "./Home.css";
import { Container, Jumbotron } from "reactstrap";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Container className="font">
      <br/>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">James Stewart</h1>
            <p className="lead">
              This is where a bio will come with a short abstract of career.
            </p>
          </Container>
        </Jumbotron>
      </Container>
    );
  }
}
