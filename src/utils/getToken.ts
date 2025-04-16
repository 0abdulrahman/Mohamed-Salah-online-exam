import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"

export const getToken = async () => {
    const authCookie = cookies().get("next-auth.session-token")?.value 

    const token = await decode({
        secret: process.env.NEXTAUTH_SECRET as string,
        token: authCookie as string,
    })
    if(!token) return null
    return token?.token
}