'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import DiplomaForm from './diploma-form';
import { CircleArrowLeft } from 'lucide-react';
export default function AddDiploma() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className=' rounded-2xl' size={'lg'}>
            Add Diploma
          </Button>
        </DialogTrigger>
        <DialogContent className='min-h-[130px] w-full'>
          {/* header */}
          <DialogHeader>
            <DialogTitle className='flex items-center justify-start font-bold gap-2'>
              <CircleArrowLeft className='text-primary' />
              <span className='text-primary'> Add Diploma</span>
            </DialogTitle>
            {/* Description */}
            <DialogDescription className='hidden'>test</DialogDescription>
          </DialogHeader>
          {/* content */}
          <DiplomaForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
