import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.jpg'



const Header = () => {
    // const [user] = useAuthState(auth);
    // const handleSignOut = () => {
    //     signOut(auth);
    // }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
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
                            <Nav.Link as={Link} to="/product">Add Inventory</Nav.Link>
                            <Nav.Link as={Link} to="/product">Manage Inventory</Nav.Link>
                            <Nav.Link as={Link} to="/about">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            {/* {
                                user && <>
                                    <Nav.Link as={Link} to="/addService">Add</Nav.Link>
                                    <Nav.Link as={Link} to="/manage">Manage</Nav.Link>
                                    <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                                </>
                            }
                            {user ? <button className='btn btn-link text-white' onClick={handleSignOut}>Sing Out</button>
                                : <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                            } */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;