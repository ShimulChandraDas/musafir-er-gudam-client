import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://rocky-wildwood-46157.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result) {
                    reset()
                }
                toast("Product Successfully Updated")
            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center text-success mt-2 mb-2'>Add Some Inventory</h2>
            <form className='d-flex flex-column mt-3 border p-3 border-black' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name' {...register("name", { required: true })} />
                <textarea className='mb-3' placeholder='Description' {...register("description")} />
                <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-3' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-3' placeholder='Supplier' type="text" {...register("supplier")} />
                <input className='btn btn-success' type="submit" value='Add New Inventory' />
                <ToastContainer />
            </form>
        </div>
    );
};

export default AddProduct;