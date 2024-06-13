'use client';
import { IdentificationIcon } from '@heroicons/react/20/solid';
import { useForm , SubmitHandler, set } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

interface IFormInput {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
    policy: boolean;
}

export default function Register() {
    const router = useRouter();

    const { register, handleSubmit,watch,formState: { errors } } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = async ({email,password,name}) => 
       await fetch('http://localhost:5000/api/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password,name})
        })
        .then(response => response.json())
        .then(data =>{
            if(data.success){
            router.push('/login');
            }else{
               setWarning(true);
            }
        })
        .catch(err => console.log(err));
    const [policyAccepted, setPolicyAccepted] = useState(false);
    const [warning, setWarning] = useState(false);




    return(
        <div className="h-screen flex justify-center items-start mt-20 md:mr-40">
            <form className="w-full max-w-sm p-8 space-y-6  rounded shadow-2xl" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-center mb-5">
                    <IdentificationIcon className="w-10 h-10 mb-5" />
                </div>
                <div className="flex justify-center mb-5">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5">
                        Create an account
                    </h1>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your email address" 
                        {...register("email", {
                            required: "This field is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email"
                            }
                        })
                        }
                        />
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                       Name 
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your name" 
                        {...register("name", {
                            required: "This field is required",
                        })
                        }
                        />
                        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your password" 
                        {...register("password", {
                            required: "This field is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters"
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                                message: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
                            }
                        })
                        }
                        />
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Confirm password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Confirm your password"
                        {...register("confirmPassword", {
                            required: "This field is required",
                            validate: (val: string) => {
                              if (watch('password') != val) {
                                return "Your passwords do no match";
                              }
                            },
                           })}
                        />
                        {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
                        
                </div>
                <div className='mb-5'>
                <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" id='policy'  className="sr-only peer" onChange={e => setPolicyAccepted(e.target.checked)} 
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">I accep all policies and terms</span>
                </label>
                    </div>
                <div className="mb-5">
                    <button type='submit'  className={`font-bold py-2 px-4 rounded w-full sm:w-auto ${policyAccepted ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-gray-400 text-gray-800 cursor-not-allowed'}`}
                     disabled={!policyAccepted}>
                        Register
                    </button>
                    <div className="flex justify-center mt-5">
                        <span className="text-red-500">{warning ? 'This email is already in use' : ''}</span>
                        </div>
                    </div>
                </form>
        </div>
    )
}