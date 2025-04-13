import AsideBar from "./_components/aside-bar";
import SearchCopmponenet from "./_components/search";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <main className="min-h-screen bg-[#FBF9F9] flex">
        <AsideBar />
     <div className="p-5 flex flex-col gap-y-12 lg:w-[85%]  w-full">
        <SearchCopmponenet />
        {children}
        </div>

    </main>
    </>
  )
}
