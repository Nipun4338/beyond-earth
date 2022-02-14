import React, {useState} from "react";
import Typist from "react-typist";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

function Header(){
    const [count, setCount]=useState(1);

    function countChange(){
        setCount(1);
    }
    return (
        <header>
            <Navbar style={{position: "sticky"}} bg="dark" expand="md" variant="dark">
            <Container fluid>
            <Navbar.Brand href="#home" onMouseOver={countChange} style={{color: "white"}}>
                {' '}{count ? (
                    <Typist cursor={{ show: false, hideWhenDone: true, hideWhenDoneDelay: 0 }} avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                        Beyond Earth  
                    <Typist.Backspace count={20} delay={2800} />
                    </Typist>
                ) : (
                    "Beyond Earth "
                )}
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Nasa</Nav.Link>
                    <Nav.Link href="#action3">Rocket</Nav.Link>
                    <Nav.Link href="#action4">APIs</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                    Link
                    </Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    );
}

export default Header;