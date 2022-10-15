import React from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
    return (
        <div className='w-1/2 px-10 h-3/4 py-10'>
            <form className='bg-white rounded-3xl px-10 py-10'>
                <h1 className='text-violet-700 mb-4 text-2xl font-bold'>Forget pasword</h1>
                <div class="mb-6">
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required="" />
                </div>
                <div className='bg-orange-500 hover:bg-orange-600 flex justify-center rounded-2xl px-3 py-3 w-full'>
                    <button><span className='px-1 py-1 font-bold text-white'>Next</span></button>
                </div>
            </form>
        </div>
    );
};

export default ForgetPassword;