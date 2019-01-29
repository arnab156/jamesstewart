import React from "react";
import { Container, Jumbotron, Alert } from "reactstrap";


const NoMatch = () => 
<Container >
      <br/>
        <Jumbotron fluid>
          <Container fluid >
          

          <Alert color="danger">
          This page does not exist. Please click on the navigation bar to proceed.
      </Alert>


                
          </Container>
        </Jumbotron>
      </Container>

export default NoMatch;
