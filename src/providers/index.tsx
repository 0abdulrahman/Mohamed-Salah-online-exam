import NextAuthProvider from './components/next-auth.provider';
import ReactQueryProvider from './components/react-query.provider';

export default function Provider({ children }: any) {
  return (
    <NextAuthProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </NextAuthProvider>
  );
}
