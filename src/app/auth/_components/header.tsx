import { Button } from "@/components/ui/button";
import Link from "next/link";

 

export default function Header() {

  return (
      <header>
        <nav className="flex gap-4 items-center justify-end list-none ">
          <li><Link href={'/auth/sign-in'}>Sign in</Link></li>
          <li><Button asChild  variant='outline' className="rounded-full drop-shadow-md text-primary shadow-[#4461F20D] " size={'lg'}>
          <Link href={'/auth/sign-up'} className="hover:text-primary">Sign Up</Link>
            </Button></li>
        </nav>
      </header>
    
  )
}
