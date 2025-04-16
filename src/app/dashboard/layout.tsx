import AsideBar from "./_components/aside-bar";
import SearchCopmponenet from "./_components/search";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex bg-[#FBF9F9] h-screen overflow-hidden">
    
      <div className="w-[250px]   bg-white h-full overflow-y-auto">
        <AsideBar />
      </div>

     
      <div className="flex-1 h-full overflow-y-auto p-5 flex flex-col gap-y-12">
        <SearchCopmponenet />
        {children}
      </div>
    </main>
  );
}
