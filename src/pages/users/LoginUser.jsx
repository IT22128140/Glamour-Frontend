import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { enqueueSnackbar } from "notistack";
import Logo from "../../components/navbar/NavbarLogo";
import Input from '../../components/form/Input'; // Ensure you have this component
import Spinner from '../../components/Spinner';
import Footer from '../../components/footer/Footer';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const methods = useForm();
    const { handleSubmit } = methods;

    const handleLogin = async (data) => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/login', data);
            setLoading(false);
            console.log(response.data.token);
            localStorage.setItem("token", response.data.token);
            navigate('/HomeCus');
        } catch (error) {
            setLoading(false);
            enqueueSnackbar("Invalid email or password", { variant: "error" });
            console.log(error);
        }
    };

    return (
        <div>
            <div className='flex h-fit flex-row justify-center bg-white mt-3 pb-3 '>
                <Logo />
            </div>
        <div className='w-full h-full bg-fixed pt-9 bg-ternary bg-no-repeat'>
            {loading && <Spinner />}
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(handleLogin)} className="bg-secondary shadow-2xl   rounded-xl w-[600px] p-8 mt-20 mx-auto font-BreeSerif">
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
            <div className='text-center text-xl mt-4'>
                <span className='text-black font-BreeSerif'>New Here? </span>
                <Link to="/Register">
                    <button type="button" className='text-blue-500 font-BreeSerif underline'>Sign Up</button>
                </Link>
            </div>
            <div className='h-40'></div>
            <Footer />
        </div>
        </div>
    );
};

export default Login;
