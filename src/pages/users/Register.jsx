import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm, FormProvider } from 'react-hook-form';
import Input from '../../components/form/Input'; // Ensure you have this component
import Spinner from '../../components/Spinner';
import Footer from "../../components/footer/Footer";

const Signup = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const methods = useForm();
    const { handleSubmit } = methods;

    const handleSignup = async (data) => {
        setLoading(true);
        try {
            console.log(data)
            await axios.post('http://localhost:3000/users', data);
            setLoading(false);
            navigate('/login');
        } catch (error) {
            setLoading(false);
            alert('An error happened. Please check the console');
            console.log(error);
        }
    };

    return (
        <div className='w-full h-full  bg-no-repeat' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
            <div className="flex flex-col w-full h-full">
                <div className="w-full h-1/2">
                    <img
                        src="./Register/bgpic.jpg"
                        alt="Signup Illustration"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="w-full h-1/2 flex justify-center items-center p-8 bg-ternary">
                    {loading && <Spinner />}
                    <FormProvider {...methods}>
                        <div className="bg-white bg-opacity-20 rounded-xl p-8 w-full max-w-lg mx-auto">
                            <h1 className='text-4xl font-Aboreto text-primary font-semibold my-8 text-center'>Create Your Account</h1>
                            <form onSubmit={handleSubmit(handleSignup)} className="space-y-4">
                                <Input
                                    formtype='input'
                                    label='First Name'
                                    id='firstName'
                                    type='text'
                                    placeholder='Enter your first name'
                                    name='firstName'
                                />
                                <Input
                                    formtype='input'
                                    label='Last Name'
                                    id='lastName'
                                    type='text'
                                    placeholder='Enter your last name'
                                    name='lastName'
                                />
                                <Input
                                    formtype='input'
                                    label='Email'
                                    id='email'
                                    type='email'
                                    placeholder='Enter email'
                                    name='email'
                                />
                                <Input
                                    formtype='input'
                                    label='Phone Number'
                                    id='phoneNumber'
                                    type='text'
                                    placeholder='Enter contact number'
                                    name='phoneNumber'
                                />
                                <Input
                                    formtype='input'
                                    label='Password'
                                    id='password'
                                    type='password'
                                    placeholder='Enter password'
                                    name='password'
                                />
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className='mt-4 p-2 bg-primary text-white rounded w-1/3'> 
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </FormProvider>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Signup;
