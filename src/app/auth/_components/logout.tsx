"use client"
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

 

export default function Logout() {
    const {data:session,status} = useSession()
  return <>
   <Button onClick={()=>{
    signOut({
        callbackUrl:"/"
    })
   }}>
     logout - {session?.user.firstName}
   </Button>
  </>
}
