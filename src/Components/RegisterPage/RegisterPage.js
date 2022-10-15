import React from 'react';
import './Register.css'
import img from '../../Resource/man-with-laptop.331dfa07.png'
import facebookimg from '../../Resource/facebook.ico'
import googleimg from '../../Resource/google.ico'
import githubimg from '../../Resource/github.ico'


const RegisterPage = () => {
    return (
        <div className='lg:flex px-10 py-10'>
            <div className=' lg:w-1/2 px-10 py-10'>
                <form className='bg-white rounded-3xl h-full px-10 py-10'>
                    <h1 className='text-violet-700 mb-4 text-2xl font-bold'>Register</h1>
                    <div class="mb-6">
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required="" />
                    </div>
                    <div class="mb-6">
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required="" />
                    </div>
                    <div class="mb-6">
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number" required="" />
                    </div>
                    <div class="mb-6">
                        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required="" />
                    </div>
                    <div class="flex items-start mb-6">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                        </div>
                        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to <span className='text-red-500'>the terms and conditions</span></label>
                    </div>
                    <div className='bg-orange-500 hover:bg-orange-600 flex justify-center rounded-2xl px-3 py-3 w-full'>
                        <button><span className='px-1 py-1 font-bold text-white'>Register</span></button>
                    </div>
                    <p>---------------------------------or-------------------------------</p>
                    <div>
                        <h1 className='mb-2 text-xl font-bold text-center'>Sign Up with </h1>
                        <div className='flex justify-center'>
                            <img className='w-10 ml-7' src={facebookimg} alt="" />
                            <img className='w-10 ml-7' src={googleimg} alt="" />
                            <img className='w-10 ml-7' src={githubimg} alt="" />
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