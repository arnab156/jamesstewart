import React from "react";
import "./Edu.css";
import { Container, Jumbotron } from "reactstrap";

const CV = () => 
<Container >
      <br/>
        <Jumbotron fluid> 
          <Container fluid className="font">
          
          <h2 className="text-center"> EDUCATION</h2>
          <hr/>
          <h4>Doctorate of Education-ABD  </h4> 
          <p className="floatLeft">Depaul University, Chicago IL</p>
          <p className="floatRight">January 2015 – June 2019 (Expected)</p>
          <br/>
          <ul className="clearFloat">
          
          </ul>
{/* --------------------------------------------------------------------------------------------------------- */}
          <br/><br/>
          <h4>Master of Education in Higher Education(4.0 GPA)</h4> 
          <p className="floatLeft">University of Arkansas, Fayetteville, AR</p>
          <p className="floatRight">Fall 2005 – May 2007</p>
          <br/>
          <ul className="clearFloat">
        
          </ul>
{/* --------------------------------------------------------------------------------------------------------- */}
          <br/><br/>
          <h4>Bachelor of Science in Economics and Business Administration-Management)</h4> 
          <p className="floatLeft">Lyon College, Batesville, AR</p>
          <p className="floatRight">Fall 2000 - Spring 2004</p>
          <br/>
          <ul className="clearFloat">
        
          </ul>

{/* --------------------------------------------------------------------------------------------------------- */}

          
          </Container>
        </Jumbotron>

      
      </Container>

export default CV;