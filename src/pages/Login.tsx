import React from 'react';

export default function Login() {
    return (
      <div className="m-auto w-1/5 py-12 flex flex-col leading-10 border-2">
        <div className='m-auto py-10'>
        <img className='w-10' src='logo.png' alt='logo' />
        </div>
        <label>Email</label>
        <input placeholder='Enter your email' />
        <label>Password</label>
        <input placeholder='Enter your password' />
        <button>Sign In</button>

      </div>
    );
}