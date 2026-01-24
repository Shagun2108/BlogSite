import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import Service from '../Service/auth'
import { Button, Input, Logo } from './index'
import { useForm } from "react-hook-form"

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');

    const login = async (data) => {
        try {
            setError('');
            const session = await Service.Login(data);
            if (session) {
                const userData = await Service.getCurrentUser();
                if (userData) { dispatch(authLogin(userData)) };
                navigate("/");
            }


        } catch (error) {
            setError('Login failed. Please check your credentials and try again.', error.message);
        }
    }

    return (
        <div classname='flex ites-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border-black`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-25">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>

                {error && (<p className="text-red-500 mt-8 text-center">{error}</p>)}
                {/* handle submit is a event */}
                <form onSubmit={handleSubmit(login)} className='mt-8'> 
                    <div className='space-y-5'>
                      <Input label='Email :'
                      placeholder='Enter your email'
                      type="email"
                      {...register("email",{required:true,validate:{
                        matchPattern: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Invalid email address"
                      }})}
                      />

                      <Input
                      label='Password :'
                      placeholder='Enter your password'
                      type="password"
                      {...register("password",{required:true, minLength:6})}
                      />

                      <Button type="submit" className='w-full'>Sign In</Button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login