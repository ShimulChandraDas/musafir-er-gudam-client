import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();


    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        console.log(email, pass);
    }
    const navigateRegister = event => {
        navigate('/register')
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center text-success mt-2'>Please Login</h2>
            <Form className='border p-5' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
                <p> New to Musafir ? <Link to={'/register'} className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}> Please Register</Link></p>
                {/* <p> Forget Password? <Link to={'/login'} className='text-primary pe-auto text-decoration-none' onClick={resetPassword}> Reset Password</Link></p> */}
            </Form>
            {/* {errorElement} */}

        </div>
    );
};

export default Login;