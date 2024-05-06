import React, { useState } from 'react';
import { IoMdInformationCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function GetProjectForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
    setIsFormValid(event.target.value !== '' );
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsFormValid(name !== '' && event.target.value !== '');
  };

  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (!isValidEmail(email)) {
      setError('Enter a valid email address');
      return;
    }
    // If email is valid, route to "/success" page
    navigate('/success')
  };

  return (
    <div className='flex flex-col gap-6 w-[96%] mt-6'>
      <div className='flex flex-col gap-4'>
        <input
          className='bg-zinc-100 p-3 rounded-[64px] border border-black/opacity-0 h-12 cursor-text outline-none focus:outline-blue-500 focus:bg-slate-50'
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          className='bg-zinc-100 p-3 rounded-[64px] border border-black/opacity-0 h-12 cursor-text outline-none focus:outline-blue-500 focus:bg-slate-50'
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        {error && <p className="text-red-500 flex items-center flex-row gap-2 text-xs font-semibold" ><IoMdInformationCircle className='text-xs' />
        {error}</p>}
      </div>
      <button
        type="submit"
        className={`bg-zinc-900 text-white rounded-[64px] mt-4 border border-black/opacity-0 h-12 ${isFormValid ? '' : 'opacity-50 cursor-not-allowed'}`}
        disabled={!isFormValid}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default GetProjectForm;
