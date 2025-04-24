import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='h-screen flex items-center justify-center w-full'>
      <div className='w-full text-center'>
        <h2 className='text-red-500 text-[55px] font-extrabold'>404</h2>
        <p>Could not find requested resource</p>
        <Link href='/'>Return Home</Link>
      </div>
    </div>
  );
}
