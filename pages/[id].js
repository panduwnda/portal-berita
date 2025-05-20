import { getNews } from "../lib/news";

export default function NewsDetail({ article }) {
  if (!article) {
    return <p className="text-center mt-10 text-red-500">Berita tidak ditemukan.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">{article.title}</h1>
      <img src={article.imageUrl} alt={article.title} className="w-full h-64 object-cover rounded mb-4" />
      <p className="text-sm text-gray-500 mb-4">{article.publishedAt}</p>
      <p className="text-base">{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-blue-600 hover:underline font-medium">
        Baca selengkapnya di sumber asli →
      </a>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const news = await getNews();
  const article = news.find((n) => n.id === params.id);

  if (!article) {
    return {
      props: {
        article: null, // 👈 Bukan undefined
      },
    };
  }

  return {
    props: {
      article,
    },
  };
}
