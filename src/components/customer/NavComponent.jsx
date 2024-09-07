import { Navbar, Nav, Container, Form, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";


const NavComponent = () => {
    return (
        <>
            <Navbar expand="lg" className='bg-primary'>
                <Container>
                    <Navbar.Brand href="/"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-flex align-items-center">
                            
                            <Form>
                                <Form.Control type="text" placeholder="Search" />
                            </Form>
                            <Link to="/cart" className="me-3 text-light"><FontAwesomeIcon icon={faCartShopping} /></Link>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <FontAwesomeIcon icon={faUser}/>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/">Log Out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavComponent