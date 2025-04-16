
"use client"

import { JSON_HEADER } from "@/lib/constants/api.constants"
import { ResetPasswordFormValues, resetPasswordSchema} from "@/lib/schemas/auth.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import MediaLogin from '../_components/media-login';
import Link from "next/link"

export default  function ResetPassword() {
    const router = useRouter()
    const form = useForm<ResetPasswordFormValues>({
        defaultValues:{
           email: '',
           newPassword:''
        },
        resolver: zodResolver(resetPasswordSchema)
    });

    // React Query mutation for verify code
    const { mutate, isPending, error, data } = useMutation({
        mutationFn: async (data: ResetPasswordFormValues) =>{
            const res = await fetch(`${process.env.NEXT_PUBLIC_API}/auth/resetPassword`, {
                method: 'PUT',
                headers: {
                      ...JSON_HEADER,
                },
                body: JSON.stringify({
                    email: data.email,
                    newPassword: data.newPassword
                })
            })
            const payload = await res.json()
            if (!res.ok) {
                throw new Error(payload.message || 'Failed to reset password')
            }
            console.log(res)
            console.log("payload", payload)
            return payload
        },
        onSuccess: (payload) => {
            if (payload.message === 'success') {
                // Redirect to reset password page after 3 seconds
                setTimeout(() => {
                    router.push('/')
                }, 500)
            }
        },
    });

    // submit virefy code 
    const onSubmit = (data: ResetPasswordFormValues) => {
        mutate(data)
    }
  return <>
        <div className='h-full flex items-center justify-center w-full'>
      <div className='w-[70%] lg:w-[80%]'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 w-full'>
            <h2 className='text-2xl font-bold mb-7'>Set a Password</h2>
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
            <FormField
              control={form.control}
              name='newPassword'
              render={({ field }) => (
                <FormItem>
                  <FormControl className='py-6 bg-[#E0E0E9] rounded-sm shadow-lg shadow-[#F9F9F9]'>
                    <Input
                      placeholder='Enter New Password'
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
            {data && <p className='text-gray-500 text-sm'>{data.message}</p>}

            
          
            

            <Button
              type='submit'
              className='py-6 w-full drop-shadow-[#2F1C1C1A] shadow-lg'
              disabled={isPending}
            >
              {isPending ? 'Resetting...' : ' Confirm'} 
            </Button>
          </form>
        </Form>

        {/* media login  */}
        <MediaLogin />
      </div>
    </div> 
  </>
}
