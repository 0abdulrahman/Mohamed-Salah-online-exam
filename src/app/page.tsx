import Image from "next/image";
import SignInPage from "./auth/sign-in/page";
import Header from "./auth/_components/header";
import Welcome from "./auth/_components/welcome";

export default function Home() {
  return <> 
  
  <div className="flex min-h-screen gap-0">
             <div className="w-1/2 hidden md:flex">
             <Welcome />
             </div>
             <div className="flex-1 bg-white p-20">
               <Header />
               <SignInPage />
               </div>
           </div>
  
  </>
          
}
