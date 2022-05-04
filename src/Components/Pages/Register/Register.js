import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        console.log(nameRef.current.value)
    }
    const navigateLogin = event => {
        navigate('/login')
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center text-success mt-2'>Please Register</h2>
            <Form className='border p-5' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="name" name="name" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Register
                </Button>
                <p> Already a Member of Musafir ? <Link to={'/login'} className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}> Please Login</Link></p>
                {/* <p> Forget Password? <Link to={'/login'} className='text-primary pe-auto text-decoration-none' onClick={resetPassword}> Reset Password</Link></p> */}
            </Form>
            {/* {errorElement} */}

        </div>
    );
};

export default Register;