'use client';
import { LockClosedIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useForm , SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useRouter} from "next/navigation";

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();

  const [warning, setWarning] = useState(false);
  
   const onSubmit: SubmitHandler<Inputs> = async({email,password}) =>{
    await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email,password})
    })
    .then(response => response.json())
    .then(data => {
      if(data.success){
        router.push('/');
      }else{
       setWarning(true);
      }
    })
    .catch(err => console.log(err));

   };


  return (
    <div className="h-screen flex justify-center items-start mt-20 md:mr-40">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm p-8 space-y-6  rounded shadow-2xl">
        <div className="flex justify-center mb-5">
          <LockClosedIcon className="w-10 h-10 mb-5" />
        </div>
        <div className="flex justify-center mb-5">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5">
            Sign in to your account
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
            placeholder="name@example.com"
            {...register("email", {
            required: "This field is required",
            pattern:{
                value: /^\S+@\S+$/i,
                message: "Invalid email"
            } 

            })} />
         
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("password", {
              required: "This field is required",
            })}
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </div>
        <div className="flex justify-start mb-5">
          <Link
            href="#"
            className="text-sm font-medium text-blue-700 hover:text-blue-800 dark:text-blue-600 dark:hover:text-blue-700"
          >
            Forgot your password?
          </Link>
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              
            />
          </div>
          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="block w-full text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
        <Link
         href="/register"
          className="block w-full sm:w-auto text-center text-black bg-secondary-500 hover:bg-secondary-800 focus:ring-4 focus:outline-none focus:ring-secondary-300 font-medium rounded-lg px-5 py-2.5"
        >
          Join
        </Link>
        <div className="flex justify-center">
          {warning && <span className="text-red-500">Invalid email or password</span>}
        </div>
       
      </form>
    </div>
  );
}
