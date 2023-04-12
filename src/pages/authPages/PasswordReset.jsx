import React, { useState } from 'react';
import AuthHeader from '../../layout/AuthHeader';

const PasswordReset = () => {
	const [email, setEmail] = useState('');
	const isEmailValid = email !== '';

	return (
		<>
			<AuthHeader />

			<section className='flex flex-col items-center justify-center'>
				<h1 className='text-3xl text-blue-900 mb-[50px] mt-[80px]'>Password Reset</h1>
				<form className='flex flex-col items-center'>
					<span className='text-gray-600 mb-[40px]'>Please enter email address you will receive a link to create a new password by mail</span>
					<div className='relative mb-8 w-full'>
						<input
							type='email'
							className='w-full border border-gray-900 bg-gray-100 h-10 px-3 pr-8 rounded-md text-blue-900 text-sm focus:outline-none'
							placeholder='example@gmail.com'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<span className='absolute top-3 right-3 text-gray-400'><i className='fas fa-envelope'></i></span>
					</div>
					<button
						className={`bg-blue-900 text-white py-2 px-4 rounded-md w-full ${!isEmailValid ? 'disabled:opacity-50 bg-gray-400 cursor-not-allowed text-white' : ''}`}
						disabled={!isEmailValid}
					>
						Continue
					</button>

				</form>
			</section>
		</>
	)
};

export default PasswordReset;
