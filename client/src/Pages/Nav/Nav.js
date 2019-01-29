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
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Contact
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          LinkedIn
                        </DropdownItem>
                        <DropdownItem>
                          Email Me
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Text Me
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
