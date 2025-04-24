'use client';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import AddDiploma from './add-diploma';

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
        <AddDiploma />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage
                src='https://avatar.iran.liara.run/public/18'
                className='cursor-pointer'
              />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() =>
                signOut({
                  callbackUrl: '/',
                })
              }
            >
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
