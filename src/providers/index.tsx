import NextAuthProvider from "./components/next-auth.provider";


export default function Provider({children} : any) {
 return (
    <NextAuthProvider>
        {children}
    </NextAuthProvider>
 )
}