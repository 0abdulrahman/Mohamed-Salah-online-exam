import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { Plus } from 'lucide-react';

export default function DiplomaForm() {
  const form = useForm({
    defaultValues: {
      icon: '',
      name: '',
      description: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='p-4 w-full'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4 flex flex-col justify-between'
        >
          <div className='flex items-center justify-between gap-2'>
            <FormField
              control={form.control}
              name='icon'
              render={({ field }) => (
                <FormItem className='relative w-10'>
                  <FormLabel htmlFor='icon' className=' absolute left-0'>
                    <div className=' text-gray-500 border rounded-full size-8 flex items-center justify-center '>
                      <Plus />
                    </div>
                  </FormLabel>
                  <FormControl>
                    <div className='flex items-center gap-2'>
                      <Input type='file' {...field} className='w-full hidden' id='icon' />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='grid grid-cols-2 gap-5'>
            <Button type='button' className='rounded-full' variant={'outline'}>
              Back
            </Button>

            <Button type='submit' className='rounded-full'>
              Add
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
