'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
import { LoginFormValues, loginSchema } from '@/lib/schemas/auth.schema';
import MediaLogin from '../_components/media-login';
import UseLogin from './_hooks/use-login';

export default function SignInPage() {
  // React Query mutation for login
  const { data, error, isPending, mutate} = UseLogin();
  // Form
  const form = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  // submit form function
  const onSubmit = async (data: LoginFormValues) => {
    mutate(data);
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
                      <Link href='/auth/forgot-password' className='text-sm text-primary'>
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
          <MediaLogin />
        </div>
      </div>
    </div>
  );
}
