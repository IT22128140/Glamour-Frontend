import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import Input from '../../components/form/Input'; // Ensure you have this component
import Spinner from '../../components/Spinner';
import StaffFooter from "../../components/footer/stafffooter/StaffFooter";

const EmpLogin = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const methods = useForm();
    const { handleSubmit } = methods;

    const handleLogin = async (data) => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/empLogin', data);
            setLoading(false);
            console.log(response.data.token);
            localStorage.setItem("emptoken", response.data.token);
            navigate('/Store_Manager');
        } catch (error) {
            setLoading(false);
            alert('An error happened. Please check console');
            console.log(error);
        }
    };

    return (
        <div className='w-full h-full bg-fixed bg-ternary bg-no-repeat'>
            {loading && <Spinner />}
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(handleLogin)} className="bg-white  bg-opacity-20 rounded-xl w-[600px] p-8 mt-20 mx-auto font-BreeSerif">
                    <h1 className='text-4xl font-Aboreto text-primary font-semibold my-8 text-center'>Login to Your Account</h1>
                    <Input
                        formtype='input'
                        label='Email'
                        id='email'
                        type='email'
                        placeholder='Enter your email'
                        name='email'
                        required
                    />
                    <Input
                        formtype='input'
                        label='Password'
                        id='password'
                        type='password'
                        placeholder='Enter your password'
                        name='password'
                        required
                    />
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className='mt-4 p-2 bg-primary text-white rounded w-1/3'>
                            Login
                        </button>
                    </div>
                </form>
            </FormProvider>
            <div className='text-center mt-4'>
                <span className='text-white'>New Here? </span>
                <Link to="/EmpRegister">
                    <button type="button" className='text-blue-500 underline'>Sign Up</button>
                </Link>
            </div>
            <StaffFooter />
        </div>
    );

};

export default EmpLogin;