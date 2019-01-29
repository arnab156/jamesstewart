import React from "react";
import "./Prof.css";
import { Container, Jumbotron } from "reactstrap";

const Prof = () => 
<Container >
      <br/>
        <Jumbotron fluid> 
          <Container fluid className="font">
          
          <h2 className="text-center"> PROFESSIONAL AFFILIATIONS</h2>
          <hr/>
          <h4>National Association of Student Personnel Administrators(NASPA)</h4> 
          {/* <br/> */}
          <ul className="clearFloat">
          <li>Serve as National Chair, Adult Learners and Students with Children Knowledge Community (March 2016-2018).</li>
          <li>Technology and Communications Chair for the Adult Learners and Students with Children Knowledge Community (March 2012-2016).</li>
          <li>Served on 2013, 2014, 2015, 2017, 2018 Regional Conference Committees (Nov. 2012- 2018). </li>
          </ul>
{/* --------------------------------------------------------------------------------------------------------- */}
          <br/><br/>
          <h4>Illinois Board of Higher Education</h4> 
          <ul className="clearFloat">
            <li>Adult Completion Committee</li>
          </ul>
{/* --------------------------------------------------------------------------------------------------------- */}
   
          
          </Container>
        </Jumbotron>

      
      </Container>

export default Prof;