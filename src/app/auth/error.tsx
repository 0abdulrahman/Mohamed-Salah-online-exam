import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function error() {
  return (
    <div>
        <h2 className='text-2xl font-bold mb-7'>Error</h2>
        <p className='text-red-500'>Something went wrong. Please try again.</p>
        <Button asChild variant='outline' className='mt-4'>
            <Link href={'/'}>
            Go Home
            </Link>
        </Button>
    </div>
  )
}
