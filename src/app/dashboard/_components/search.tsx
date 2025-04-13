'use client';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';


export default function SearchCopmponenet() {

  return (
    <>
      <div className='flex items-center justify-between w-full  rounded-md gap-x-3 md:gap-x-6 '>
        <div className='relative w-full'>
          <Search className='absolute left-4 top-1/2 -translate-y-1/2 text-primary size-5' />
          <Input
            placeholder='Search...'
            className='w-full h-12 pl-12 pr-4 rounded-xl shadow-lg shadow-[#0000000c] bg-white focus-visible:right-0 focus-visible:ring-0 '
          />
        </div>
        <Button
          variant={'default'}
          className='h-11 px-4 rounded-xl bg-primary text-white  hover:bg-primary/80 transition-all duration-150'
        >
          Start Quiz
        </Button>

        <div>
          <Avatar>
             <AvatarImage src='https://avatar.iran.liara.run/public/18' />
          </Avatar>
        </div>
      </div>
    </>
  );
}
