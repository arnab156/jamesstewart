import React from "react";
import "./Nav.css";
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
    import { Link } from "react-router-dom";
    

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
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">James Stewart</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                    <NavLink> <Link to="/education" className="colorMatch">Education</Link></NavLink>
                    {/* <Link to="/education" className="brand-title">Education</Link> */}
                      {/* <NavLink href="/education">Education</NavLink> */}
                    </NavItem>
                    <NavItem>
                      {/* <NavLink href="https://github.com/reactstrap/reactstrap">CV</NavLink> */}
                      <NavLink><Link to="/experience" className="colorMatch">Experience</Link></NavLink>
                      {/* <NavLink href="/experience">Experience</NavLink> */}
                    </NavItem>
                    <NavItem>
                    <NavLink><Link to="/presentations" className="colorMatch">Presentation</Link></NavLink>
                      {/* <NavLink href="/presentations">Presentations</NavLink> */}
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        More
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          <NavLink href="https://www.linkedin.com/in/jstewart22/" className="colorMatch" target="_blank">LinkedIn</NavLink>
                        </DropdownItem>
                        <DropdownItem>
                        <a className = "black-text" href="mailto:james@madeofchicago.com<James Stewart>" className="colorMatch">Contact</a>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        <NavItem>
                        <NavLink> <Link to="/proaff" className="colorMatch">Professional Affiliations</Link></NavLink>
                        
                          {/* <NavLink href="/proaff">Professional Affiliations</NavLink> */}
                       </NavItem>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Navbar>

 </Container>
          );
        }
      }
