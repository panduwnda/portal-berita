// pages/login.js
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="bg-white rounded-xl shadow-md p-10 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Masuk ke Portal Berita</h1>

        <button onClick={() => signIn("github", { callbackUrl: "/" })} className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 transition">
          {/* Icon dan teks tombol */}
          Login dengan GitHub
        </button>

        <p className="text-sm text-gray-500 mt-4">Gunakan akun GitHub untuk masuk dan mulai membaca berita.</p>
      </div>
    </div>
  );
}
