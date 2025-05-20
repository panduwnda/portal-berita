import { getSession } from "next-auth/react";
import { getNews } from "../lib/news";
import { useState } from "react";
import Link from "next/link";

export default function Home({ news }) {
  const [query, setQuery] = useState("");

  const filteredNews = news.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Daftar Berita</h1>

      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari berita..." className="mb-6 w-full border px-4 py-2 rounded shadow" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredNews.map((item) => (
          <div key={item.id} className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden">
            <img src={item.imageUrl} alt={item.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-lg line-clamp-2">{item.title}</h2>
              <p className="text-sm text-gray-500 mt-1">{item.publishedAt}</p>
              <Link href={`/${item.id}`} className="text-blue-600 hover:underline text-sm inline-block mt-2">
                Lihat detail →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: { destination: "/login", permanent: false },
    };
  }

  const news = await getNews();
  return { props: { news } };
}
