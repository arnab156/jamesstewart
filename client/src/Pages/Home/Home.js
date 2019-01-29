import React from "react";
import "./Home.css";
import { Container, Jumbotron } from "reactstrap";
import ProfilePic from "../../Components/Photo/ProfilePhoto";
import Bio from "../../Components/Bio/Bio";

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
          <ProfilePic/>
            {/* <h1 >James Stewart</h1>
            <p className="lead">
              This is where a bio will come with a short abstract of career.
            </p> */}
            <Bio />
          </Container>
        </Jumbotron>
      </Container>
    );
  }
}
