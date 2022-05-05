import React from 'react';
import { Button, Form } from 'react-bootstrap';


const ProductUpdate = () => {
    //const navigate = useNavigate();

    const handleUpdate = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        //console.log(nameRef.current.value)


        // }
        // //const navigateLogin = event => {
        //     navigate('/login')
        // }
        // if (user) {
        //     navigate("/home")
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center text-success mt-2 '>Update  Inventory</h2>
            <Form className='border p-5' onSubmit={handleUpdate}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" name="name" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" name="phoneNumber" placeholder="Enter Phone Number" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Control name="address" type="address" placeholder="Address" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Register
                </Button>
            </Form>
            {/* {errorElement} */}

        </div>
    );
};

export default ProductUpdate;