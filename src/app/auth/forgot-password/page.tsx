'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { JSON_HEADER } from '@/lib/constants/api.constants';
import { ForgotPasswordFormValues, forgotPasswordSchema } from '@/lib/schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import MediaLogin from '../_components/media-login';
import Link from 'next/link';

export default function ForgotPassword() {
  const router = useRouter();
  const form = useForm<ForgotPasswordFormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
  });

  // React Query mutation for forgot password
  const { mutate, isPending, error, data } = useMutation({
    mutationFn: async (data: ForgotPasswordFormValues) => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/auth/forgotPassword`, {
        method: 'POST',
        headers: {
          ...JSON_HEADER,
        },
        body: JSON.stringify({
          email: data.email,
        }),
      });
      const payload = await res.json();
     

      if (!res.ok) {
        throw new Error(payload.message || 'Failed to reset password');
      }
      return payload;
    },
    onSuccess: (payload) => {
      if (payload.message === 'success') {
        // Redirect to verify email page after 3 seconds
        setTimeout(() => {
          router.push('/auth/verify-code');
        }, 500);
      }
    },

  });

  const onSubmit = (data: ForgotPasswordFormValues) => {
    mutate(data);
  };

  return (
    <div className='h-full flex items-center justify-center w-full'>
      <div className='w-[70%] lg:w-[80%]'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 w-full'>
            <h2 className='text-2xl font-bold mb-7'>Forgot your password?</h2>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormControl className='py-6 bg-[#E0E0E9] rounded-sm shadow-lg shadow-[#F9F9F9]'>
                    <Input
                      placeholder='Enter Email'
                      {...field}
                      className='w-full focus:border-primary border border-primary text-gray-600 '
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
               {/* error message */}
            {error && (
              <p className='text-red-500 text-sm'>{error.message}</p>
            )}
              {/* success message */}
            {data && <p className='text-gray-500 text-sm'>{data.info}</p>}

              {/* resnd code */}
              <p className='text-gray-600 text-sm hover:text-primary hover:underline'>
                 <Link href='/auth/sign-in'> Recover Password ?</Link>
                </p>

            <Button
              type='submit'
              className='py-6 w-full drop-shadow-[#2F1C1C1A] shadow-lg'
              disabled={isPending}
            >
              {isPending ? 'Resetting...' : 'Reset Password'}
            </Button>
          </form>
        </Form>

        {/* media login  */}
        <MediaLogin />
      </div>
    </div>
  );
}
