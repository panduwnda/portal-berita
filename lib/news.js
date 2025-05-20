import axios from "axios";

export async function getNews() {
  // GNews
  const gnewsRes = await fetch(`https://gnews.io/api/v4/top-headlines?lang=id&token=${process.env.GNEWS_API_KEY}`);
  const gnewsData = await gnewsRes.json();

  const gnewsArticles = (gnewsData.articles || []).map((item, index) => ({
    id: `g-${index}`,
    title: item.title || "Tanpa Judul",
    content: item.description || "Tidak ada deskripsi.",
    imageUrl: item.image || "/default.jpg",
    publishedAt: new Date(item.publishedAt || Date.now()).toLocaleDateString("id-ID"),
    url: item.url || "#",
  }));

  // Mediastack
  const mediastackRes = await fetch(`http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API_KEY}&languages=id&limit=5`);
  const mediastackData = await mediastackRes.json();

  const mediastackArticles = (mediastackData.data || []).map((item, index) => ({
    id: `m-${index}`,
    title: item.title || "Tanpa Judul",
    content: item.description || "Tidak ada deskripsi.",
    imageUrl: item.image || "/default.jpg",
    publishedAt: new Date(item.published_at || Date.now()).toLocaleDateString("id-ID"),
    url: item.url || "#",
  }));

  // NewsData.io
  const newsdataRes = await fetch(`https://newsdata.io/api/1/news?apikey=${process.env.NEWSDATA_API_KEY}&language=id&country=id&category=top`);
  const newsdataJson = await newsdataRes.json();

  const newsdataArticles = (newsdataJson.results || []).slice(0, 5).map((item, index) => ({
    id: `nd-${index}`,
    title: item.title || "Tanpa Judul",
    content: item.description || "Tidak ada deskripsi.",
    imageUrl: item.image_url || "/default.jpg",
    publishedAt: new Date(item.pubDate || Date.now()).toLocaleDateString("id-ID"),
    url: item.link || "#",
  }));

  return [...gnewsArticles, ...mediastackArticles, ...newsdataArticles];
}
