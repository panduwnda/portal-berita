import { SessionProvider, useSession, signOut } from "next-auth/react";
import "../styles/globals.css";
import Link from "next/link";

function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-lg font-semibold">
        Portal Berita
      </Link>
      {session && (
        <div className="flex gap-4 items-center">
          <span className="hidden sm:inline">👋 {session.user.name}</span>
          <button onClick={() => signOut()} className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-100">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <main className="min-h-screen bg-gray-100 p-4">
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
