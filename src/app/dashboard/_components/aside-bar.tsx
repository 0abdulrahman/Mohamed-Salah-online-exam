'use client';
import Image from 'next/image';
import logo from '../../../../public/assets/images/logo.png';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeftToLine, History, LayoutPanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AsideBar() {
  const active = usePathname();

  return (
    <aside className='w-[220px] bg-white h-screen shadow-lg shadow-[#F9F9F9] rounded-sm py-5  hidden md:flex'>
      <div className='flex flex-col h-full gap-y-12 px-4 w-full'>
        <div>
          <Image width={120} height={29} src={logo.src} alt='logo' className='' />
        </div>
        <div className='flex flex-col items-center justify-center space-y-4'>
          <Link
            href={'/dashboard'}
            className={` h-11 leading-[2.75rem] rounded-lg px-2 w-full flex items-center gap-x-5
             ${active === '/dashboard' ? 'bg-primary text-white ' : 'text-gray-600 '}`}
          >
            <LayoutPanelLeft
              className={` transition-all duration-150 size-6 ${
                active === '/dashboard' ? 'text-white' : 'text-primary'
              }`}
            />
            Dashboard
          </Link>
          <Link
            href={'/dashboard/quiz'}
            className={` h-11 leading-[2.75rem] rounded-lg px-2 w-full flex items-center gap-x-5
                 ${active === '/dashboard/quiz' ? 'bg-primary text-white ' : 'text-gray-600 '}`}
          >
            <History
              className={` transition-all duration-150 size-6 ${
                active === '/dashboard/quiz' ? 'text-white' : 'text-primary'
              }`}
            />
            Quiz History
          </Link>
          <button className='h-11 leading-[2.75rem] rounded-lg text-gray-600 px-2 w-full flex items-center gap-x-5 justify-start'>
            <ArrowLeftToLine className={` size-6 transition-all duration-150  text-primary`} />
            Logout
            </button>
        </div>
      </div>
    </aside>
  );
}
