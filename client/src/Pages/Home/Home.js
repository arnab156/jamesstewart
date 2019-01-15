import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
        
          <Col className="titlename">Hello, my name is James Stewart and I am here to recruit you.</Col>
        </Row> 
        <Row>
        {/* <Col xs="6" sm="4"></Col> */}
        <Col className="titlename"> <Button color="danger" size="lg" block>
        <Link to="/about" className="textStyle">Warp Here</Link>
        </Button></Col>
        </Row>
        

      </Container>
    );
  }
}

export default Home;
