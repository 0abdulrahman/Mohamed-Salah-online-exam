import NextAuth ,{ User } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface User {
    token: string;
    user: ApplicationUser
  }

  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: ApplicationUser
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends User {}
}
