import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";


const privatePage = new Set(['/dashboard'])
const authPage = new Set(['/auth/sign-in' , '/auth/sign-up' , '/'])

export default async function middleware(req: NextRequest) {
    const token = await getToken({req})
    
    if(privatePage.has(req.nextUrl.pathname)){
        if(token) return NextResponse.next();
        
        const redirectUrl = new URL('/',req.nextUrl.origin);
        return NextResponse.redirect(redirectUrl)
    }

    if(authPage.has(req.nextUrl.pathname)){
        if(token){
            const redirectUrl = new URL('/dashboard',req.nextUrl.origin);
            return NextResponse.redirect(redirectUrl)
        }
        return NextResponse.next()
    }

    return NextResponse.next()

}