import React, { useState } from 'react';
import './Register.css'
import img from '../../Resource/man-with-laptop.331dfa07.png'
import facebookimg from '../../Resource/facebook.ico'
import googleimg from '../../Resource/google.ico'
import githubimg from '../../Resource/github.ico'
import useFirbase from '../../Hook/useFirebase';


const RegisterPage = () => {
    //all states
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Error, setError] = useState('')


    //all handlers for input field
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        const test = /\S+@\S+\.\S+/.test(e.target.value)
        if (!test) {
            setError('Your Email is not valid, try again.')
            return;
        }
        setEmail(e.target.value)
        setError('')
    }
    const handlerPassword = (e) => {
        if (!/(?=.{8,})/.test(e.target.value)) {
            setError('password should be atleast 8 char.')
            return;
        }
        if (!/(?=.*[a-zA-Z])/.test(e.target.value)) {
            setError('password should be contain atleast 1 letter')
            return;
        }
        if (!/(?=.*[!#$%&@?"])/.test(e.target.value)) {
            setError('password should be contain atleast 1 special char.')
            return;
        }
        setPassword(e.target.value)
        setError('')
    }
    // console.log(name)
    // console.log(email)
    // console.log(password)
    const { handlegoogleLogin, handlegithubLogin, handleFacebookLogin, handleEmailLogin } = useFirbase()
    return (
        <div className='lg:flex px-10 py-10'>
            <div className=' lg:w-1/2 px-10 py-10'>
                <form className='bg-white rounded-3xl h-full px-10 py-10'>
                    <h1 className='text-violet-700 mb-4 text-2xl font-bold'>Register</h1>
                    <div className="mb-6">
                        <input onBlur={handleName} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required="" />
                    </div>
                    <div className="mb-6">
                        <input onBlur={handleEmail} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required="" />
                        <p className='text-red-400'>{Error}</p>
                    </div>
                    <div className="mb-6">
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number" required="" />
                    </div>
                    <div className="mb-6">
                        <input onBlur={handlerPassword} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required="" />
                        <p className='text-red-400'>{Error}</p>
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to <span className='text-red-500'>the terms and conditions</span></label>
                    </div>
                    <div onClick={() => handleEmailLogin(email, password)} className='bg-orange-500 hover:bg-orange-600 flex justify-center rounded-2xl px-3 py-3 w-full'>
                        <button><span className='px-1 py-1 font-bold text-white'>Register</span></button>
                    </div>
                    <p>---------------------------------or-------------------------------</p>
                    <div>
                        <h1 className='mb-2 text-xl font-bold text-center'>Sign Up with </h1>
                        <div className='flex justify-center'>
                            <img onClick={handleFacebookLogin} className='w-10 ml-7' src={facebookimg} alt="" />
                            <img onClick={handlegoogleLogin} className='w-10 ml-7' src={googleimg} alt="" />
                            <img onClick={handlegithubLogin} className='w-10 ml-7' src={githubimg} alt="" />
                        </div>
                    </div>
                </form>
            </div>
            <div className='lg:w-1/2 px-10 py-10'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default RegisterPage;