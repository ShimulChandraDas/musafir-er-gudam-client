import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    // if (error) {
    //     return Toast({error.message})

    // }

    if (loading || sending) {
        <Loading></Loading>
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        console.log(email, pass);
        signInWithEmailAndPassword(email, pass);
    }
    const navigateRegister = event => {
        navigate('/register')
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sending a  email');
        } else {
            toast('Input Email Address');
        }
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

                {errorElement}
                <Button variant="info w-100 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
                <p> New to Musafir ? <Link to={'/register'} className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}> Please Register</Link></p>
                <p> Forget Password? <Link to={'/login'} className='text-primary pe-auto text-decoration-none' onClick={resetPassword}> Reset Password</Link></p>
                <SocialLogin />
                <ToastContainer />
            </Form>


        </div>
    );
};

export default Login;