import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="/home">Quiz</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;