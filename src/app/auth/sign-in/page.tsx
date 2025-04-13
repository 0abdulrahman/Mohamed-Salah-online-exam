'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import google from '../../../../public/assets/images/google.png';
import apple from '../../../../public/assets/images/apple.png';
import facebook from '../../../../public/assets/images/facebook.png';
import twitter from '../../../../public/assets/images/twitter.png';
import Image from 'next/image';
import { LoginFormValues, loginSchema } from '@/lib/schemas/auth.schema';



export default function SignInPage() {
  const form = useForm<LoginFormValues>({
   
    defaultValues: {
      email: '',
      password: '',
    },
     resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data:LoginFormValues) => {
    const res = await signIn('credentials', {
      redirect: false,
      callbackUrl: '/',
      email: data.email,
      password: data.password,
    });

    if (res?.ok) {
      window.location.href = '/dashboard';
    }
    console.error(res?.error);
  };

  return (
    <div className='container mx-auto flex items-center justify-center h-full w-full'>
      <div className='w-[70%]  lg:w-[80%]'>
        <h2 className='text-2xl font-bold mb-7'>Sign in</h2>

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
                        className='w-full focus:border-primary  border border-gray-300   text-gray-600'
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
                        className='w-full focus:border-primary  border border-gray-300 text-gray-600'
                      />
                    </FormControl>
                    <FormMessage />

                    <div className=' justify-between pt-4 text-right w-full'>
                      <Link href='#' className='text-sm text-primary'>
                        Recover Password ?
                      </Link>
                    </div>
                  </FormItem>
                )}
              />

              <Button type='submit' className='py-6 w-full  drop-shadow-[#2F1C1C1A] shadow-lg'>
                Sign in
              </Button>
            </form>
          </Form>

          {/* social media login */}
          <div className='flex items-center justify-center space-x-4 my-8 w-full '>
            <div className='flex-grow border-t border-gray-400'></div>
            <span className='text-gray-600 '>Or Continue with</span>
            <div className='flex-grow border-t border-gray-400'></div>
          </div>
          {/* social media login icons  */}
          <div className='w-full flex items-center justify-between'>
            <div className='border border-gray-300 size-12 md:size-14 rounded-xl flex items-center justify-center  p-2 shadow[#4461F21C] shadow-xl hover:cursor-pointer'>
              <Image width={23} src={google} alt='Google' />
            </div>
            <div className='border border-gray-300 size-12 md:size-14 rounded-xl flex items-center justify-center  p-2 shadow[#4461F21C] shadow-xl hover:cursor-pointer'>
              <Image width={23} src={twitter} alt='Twitter' />
            </div>
            <div className='border border-gray-300 size-12 md:size-14 rounded-xl flex items-center justify-center  p-2 shadow[#4461F21C] shadow-xl hover:cursor-pointer'>
              <Image width={23} src={facebook} alt='Facebook' />
            </div>
            <div className='border border-gray-300 size-12 md:size-14 rounded-xl flex items-center justify-center  p-2 shadow[#4461F21C] shadow-xl hover:cursor-pointer'>
              <Image width={23} src={apple} alt='Apple' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
