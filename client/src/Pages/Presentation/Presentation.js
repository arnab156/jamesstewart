import React from "react";
import "./Pres.css";
import { Container, Jumbotron } from "reactstrap";

const Presentation = () => 
<Container >
      <br/>
        <Jumbotron fluid> 
          <Container fluid className="font">
          
          <h2 className="text-center"> PROFESSIONAL PRESENTATIONS</h2>
          <hr/>

          <ul className="clearFloat">
          <li>Stewart, J., Barnett, D., Kemp, K., Steirs, S., & Scott, S. (March 2016) “Students with Children: Success Redefined.” Indianapolis, IN: NASPA Annual Conference. </li>
          <li>Stewart, J. & Valdovinos N. (May 2014) “A Conference Model for Serving Students with Children.” Columbus, OH: Student-Parent Symposium</li>
          <li>Bryd, S., Harper, M, Nunez, H, Stewart, J., Summers, C., Testa-Buzzee, K. & Warfield, S. (March 2014) “Advocating as a Tool for Transforming the Student Experience for Adult Learners and Students with Children.” Baltimore, MD: NASPA Annual Conference. </li>
          <li>Deanna, L., Garza, C., Ginsburg, M., & Stewart, J. (Nov. 2012) “Focusing on Your Career Path: Entry Level to Mid-Level Manager.” Madison, WI: National Association of Student Personnel Administrators (NASPA) Region IV-East Conference.</li>
          <li>Crone, I., & Stewart, J. (2007) “Learning Outcomes for Student Funding Process.” Atlanta, GA: Association of Campus Unions International (ACUI) national conference.</li>
          <li>Sacher, L., Serafini, M., & Stewart, J. (2006) “Educating college students about health insurance.” New York, NY: National American College Health Association annual meeting.</li>
         
          </ul>
{/* --------------------------------------------------------------------------------------------------------- */}
     
          
        </Container>
        </Jumbotron>

      
      </Container>

export default Presentation;