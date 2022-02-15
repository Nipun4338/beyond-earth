import React, {useState} from "react";
import Typist from "react-typist";
import { Navbar, Container, Nav} from "react-bootstrap";

function Header(){
    const [count, setCount]=useState(1);

    function countChange(){
        setCount(1);
    }
    return (
        <header>
            <Navbar bg="dark" expand="md" variant="dark" fixed="top">
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
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                <Nav.Link href="#nasa">Nasa</Nav.Link>
                <Nav.Link href="#rocket">Rocket</Nav.Link>
                <Nav.Link href="#api">APIs</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    );
}

export default Header;