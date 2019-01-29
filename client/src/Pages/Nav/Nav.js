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
                      <NavLink href="/education">Education</NavLink>
                    </NavItem>
                    <NavItem>
                      {/* <NavLink href="https://github.com/reactstrap/reactstrap">CV</NavLink> */}
                      <NavLink href="/experience">Experience</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/presentations">Presentations</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        More
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          <NavLink href="https://www.linkedin.com/in/jstewart22/" target="_blank">LinkedIn</NavLink>
                        </DropdownItem>
                        <DropdownItem>
                        <a className = "black-text" href="mailto:james@madeofchicago.com<James Stewart>">Contact</a>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        <NavItem>
                          <NavLink href="/proaff">Professional Affiliations</NavLink>
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
