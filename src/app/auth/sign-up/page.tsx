'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import google from "../../../../public/assets/images/google.png"
import apple from "../../../../public/assets/images/apple.png"
import facebook from "../../../../public/assets/images/facebook.png"
import twitter from "../../../../public/assets/images/twitter.png"
import Image from 'next/image';
import { SignupFormValues, signupSchema } from '@/lib/schemas/auth.schema';
import { JSON_HEADER } from '@/lib/constants/api.constants';
import { useState } from 'react';



export default function SignUpPage() {
  const [error ,setError] = useState<string>('');
  const [success ,setSuccess] = useState<string>('');
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      username: '',
      phone: '',
      rePassword: '',

    },
  });

  const onSubmit = async (value:SignupFormValues) => {
    const resp = await fetch(`https://exam.elevateegy.com/api/v1/auth/signup`, {
      method: 'POST',
      headers: {
        ...JSON_HEADER,
      },
      body: JSON.stringify(value),
    })
    const data = await resp.json();
    console.log(data);
    if('code' in data) {
      setError(data.message)
      return;
    }
    if('user' in data) {
      setSuccess('Account created successfully')
      setError('')
      form.reset();
      // redirect to sign in page
      setTimeout(() => {
        window.location.href = '/auth/sign-in';
      }, 2000);
      


    }
  };

  return (
    <div className='container mx-auto flex items-center justify-center h-full'>
      <div className='w-[70%]  lg:w-[80%]'>
        <h2 className='text-2xl font-bold mb-7'>Sign Up</h2>

        <div>
          <Form {...form}>

            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 w-full'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormControl className='py-6 bg-[#E0E0E9] rounded-sm shadow-lg shadow-[#F9F9F9]'>
                      <Input
                        placeholder='Enter Email'
                        {...field}
                        className={`w-full  ring-0   ${form.formState.errors.email ? 'focus:border-red-500 border-red-500 focus:ring-red-500 focus-visible:ring-0' : 'focus:border-primary border-gray-300   text-gray-600'}`}
                      
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormControl className='py-6 bg-[#E0E0E9] rounded-sm shadow-lg shadow-[#F9F9F9]'>
                      <Input
                        placeholder='Enter Username'
                        {...field}
                        className={`w-full  ring-0   ${form.formState.errors.email ? 'focus:border-red-500 border-red-500 focus:ring-red-500 focus-visible:ring-0' : 'focus:border-primary border-gray-300   text-gray-600'}`}
                      
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='firstName'
                render={({ field }) => (
                  <FormItem>
                    <FormControl className='py-6 bg-[#E0E0E9] rounded-sm shadow-lg shadow-[#F9F9F9]'>
                      <Input
                        placeholder='Enter firstName'
                        {...field}
                        className={`w-full  ring-0   ${form.formState.errors.email ? 'focus:border-red-500 border-red-500 focus:ring-red-500 focus-visible:ring-0' : 'focus:border-primary border-gray-300   text-gray-600'}`}
                      
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='lastName'
                render={({ field }) => (
                  <FormItem>
                    <FormControl className='py-6 bg-[#E0E0E9] rounded-sm shadow-lg shadow-[#F9F9F9]'>
                      <Input
                        placeholder='Enter lastName'
                        {...field}
                        className={`w-full  ring-0   ${form.formState.errors.email ? 'focus:border-red-500 border-red-500 focus:ring-red-500 focus-visible:ring-0' : 'focus:border-primary border-gray-300   text-gray-600'}`}
                      
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <FormControl className='py-6 bg-[#E0E0E9] rounded-sm shadow-lg shadow-[#F9F9F9]'>
                      <Input
                        placeholder='Enter phone'
                        {...field}
                        className={`w-full  ring-0   ${form.formState.errors.email ? 'focus:border-red-500 border-red-500 focus:ring-red-500 focus-visible:ring-0' : 'focus:border-primary border-gray-300   text-gray-600'}`}
                      
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormControl className=' mb-0 py-6 bg-[#E0E0E9]  rounded-sm shadow-lg shadow-[#F9F9F9]'>
                      <Input
                        placeholder='Enter password'
                        {...field}
                        className='w-full  focus:border-primary  border border-gray-300 text-gray-600'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='rePassword'
                render={({ field }) => (
                  <FormItem>
                    <FormControl className=' mb-0 py-6 bg-[#E0E0E9]  rounded-sm shadow-lg shadow-[#F9F9F9]'>
                      <Input
                        placeholder='Confirm password'
                        {...field}
                        className='w-full  focus:border-primary  border border-gray-300 text-gray-600'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

      {/* error message  */}
              {error && <p className='text-red-500 text-sm'>{error}</p>}
              {success && <p className='text-green-500 text-sm'>{success}</p>}
              <Button
                type='submit'
                className='py-6 w-full   drop-shadow-[#2F1C1C1A] shadow-lg'
              >
                Sign in
              </Button>
            </form>
          </Form>

          {/* social media login */}
          <div className='flex items-center justify-center space-x-4 my-8 w-full lg:w-[80%] '>
            <div className='flex-grow border-t border-gray-400'></div>
            <span className='text-gray-600 '>Or Continue with</span>
            <div className='flex-grow border-t border-gray-400'></div>
          </div>
          {/* social media login icons  */}
          <div className='w-full lg:w-[80%] flex items-center justify-between'>
                <div className='border border-gray-300 size-14 md:size-16 rounded-xl flex items-center justify-center  p-2 shadow[#4461F21C] shadow-xl hover:cursor-pointer'>
                  <Image width={23} src={google} alt="Google" />
                </div>
                <div className='border border-gray-300 size-14 md:size-16 rounded-xl flex items-center justify-center  p-2 shadow[#4461F21C] shadow-xl hover:cursor-pointer'>
                <Image width={23} src={twitter} alt="Twitter" />
                </div>
                <div className='border border-gray-300 size-14 md:size-16 rounded-xl flex items-center justify-center  p-2 shadow[#4461F21C] shadow-xl hover:cursor-pointer'>
                  <Image width={23} src={facebook} alt="Facebook" />
                </div>
                <div className='border border-gray-300 size-14 md:size-16 rounded-xl flex items-center justify-center  p-2 shadow[#4461F21C] shadow-xl hover:cursor-pointer'>
                <Image width={23} src={apple} alt="Apple" />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
