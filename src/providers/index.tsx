import NextAuthProvider from './components/next-auth.provider';
import ReactQueryProvider from './components/react-query.provider';

type childrenType = {
  children: React.ReactNode;
}
export default function Provider({ children }: childrenType) {
  return (
    <NextAuthProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </NextAuthProvider>
  );
}
