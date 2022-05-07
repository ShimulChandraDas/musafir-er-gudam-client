import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    if (loading) {
        return <Loading />
    };

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        //console.log(nameRef.current.value)

        createUserWithEmailAndPassword(email, password)
    }
    const navigateLogin = event => {
        navigate('/login')
    }
    if (user) {
        navigate("/home")
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center text-success mt-2'>Please Register</h2>
            <Form className='border p-5' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="name" name="name" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
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