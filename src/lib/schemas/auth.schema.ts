import { z } from 'zod';

export const signupSchema = z
  .object({
    email: z
      .string({
        required_error: 'Email is required'
      })
      .min(3, 'Email must be at least 3 characters')
      .max(50, 'Email must be at most 50 characters')
      .email('Please enter a valid email'),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(8, 'Password must be at least 8 characters')
      .max(20, 'Password must be at most 20 characters'),
    rePassword: z.string({
        required_error: 'Please confirm your password',
    }),
    username: z
      .string({
        required_error: 'Username is required',
      })
      .min(3, 'Username must be at least 3 characters')
      .max(20, 'Username must be at most 20 characters'),
    firstName: z
      .string({
        required_error: 'First name is required',
      })
      .min(2, 'First name must be at least 2 characters')
      .max(50, 'First name must be at most 50 characters'),
    lastName: z
      .string({
        required_error: 'Last name is required',
      })
      .min(2, 'Last name must be at least 2 characters')
      .max(50, 'Last name must be at most 50 characters'),
    phone: z
      .string({
        required_error: 'Phone number is required',
      })
      .min(10, 'Phone must be at least 10 characters')
      .max(15, 'Phone must be at most 15 characters'),
  })
  .refine((data) => data.password === data.rePassword, {
    message: 'Passwords do not match',
    path: ['rePassword'],
  });

export const loginSchema = z.object({
  email: z.string({
    required_error: 'Email is required',
  }).email('Please enter a valid email'),
  password: z.string({
    required_error: 'Password is required',
  }).min(8, 'Password must be at least 8 characters'),
});


export type SignupFormValues = z.infer<typeof signupSchema>;
export type LoginFormValues = z.infer<typeof loginSchema>;


