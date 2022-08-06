import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/login')
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])

    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser(null)
        })

    }
    return (
        <div>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="/home">Quiz</Navbar.Brand>
                    {
                        user ?
                            <Button onClick={handleSignOut} variant="light">Logout ({user.displayName})</Button>
                            :
                            <Button onClick={handleNavigate} variant="light">LOGIN</Button>
                    }
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;