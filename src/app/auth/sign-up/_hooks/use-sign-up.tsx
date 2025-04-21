import { JSON_HEADER } from '@/lib/constants/api.constants';
import { SignupFormValues } from '@/lib/schemas/auth.schema';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function UseSignUp() {
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: async (data: SignupFormValues) => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_TEST_API}/auth/signup`, {
        method: 'POST',
        headers: {
          ...JSON_HEADER,
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (res.code) throw new Error(res.message);
      return res;
    },
    onSuccess: (data) => {
      toast.success('sign up successful');
      // redirect to sign in page
      setTimeout(() => {
        window.location.href = '/auth/sign-in';
      }, 2000);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { data, error, isPending, signUp: mutate };
}
