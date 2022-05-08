import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.jpg'



const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' className='fw-bold' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#products">Products</Nav.Link>
                            <Nav.Link href="home#UpComing">Upcoming</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/inventory"> Inventory</Nav.Link>
                                    <Nav.Link as={Link} to="/addproduct">Add Inventory</Nav.Link>
                                    <Nav.Link as={Link} to="/manage">Manage Inventory</Nav.Link>
                                </>
                            }
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>

                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sing Out</button>
                                    : <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;