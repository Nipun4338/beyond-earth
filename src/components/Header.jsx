import React, {useState} from "react";
import Typist from "react-typist";
import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate();
    const [count, setCount]=useState(1);

    function countChange(){
        setCount(1);
    }
    return (
        <header>
            <Navbar bg="dark" expand="md" variant="dark" fixed="top" collapseOnSelect>
            <Container fluid>
            <Navbar.Brand onClick={()=>navigate('/')} eventKey="1" onMouseOver={countChange} style={{color: "white", cursor: "pointer"}}>
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
                <Nav.Link onClick={()=>navigate('/')} eventKey="2">Nasa</Nav.Link>
                <NavDropdown title="Planet" id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={()=>navigate('/planet')} eventKey="3">Planet</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>navigate('/ageCalculator')} eventKey="4">Planet By Age</NavDropdown.Item>
                </NavDropdown>
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