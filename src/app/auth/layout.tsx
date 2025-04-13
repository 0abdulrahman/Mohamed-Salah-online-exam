import Header from "./_components/header";
import Welcome from "./_components/welcome";

 

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
 
       
       
        <div className="flex min-h-screen gap-0">
          <div className="w-1/2 hidden md:flex">
          <Welcome />
          </div>
          <div className="flex-1 bg-white p-20">
            <Header />
            {children}
            </div>
        </div>

      
    </>
  )
}
