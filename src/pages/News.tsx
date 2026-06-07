import { useEffect, useState } from "react";
import { fetchNews } from "../api";
import { NewsArticle } from "../types";
import NewsCard from "../components/NewsCard";

export default function News() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews().then(data => {
      setNews(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 border-b border-slate-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white mb-4">Latest News</h1>
          <p className="text-slate-400 max-w-2xl text-lg">
            Get the latest breaking news, exclusive interviews, and tactical analysis leading up to the 2026 World Cup.
          </p>
        </div>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
           {['All News', 'Breaking', 'Analysis', 'Interviews', 'Teams', 'Players'].map((cat, i) => (
             <button key={cat} className={`px-5 py-2 rounded-md text-xs font-bold tracking-widest uppercase whitespace-nowrap transition-colors ${i === 0 ? 'bg-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.3)]' : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'}`}>
               {cat}
             </button>
           ))}
        </div>

        {loading ? (
          <div className="flex justify-center p-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <div key={article.id} className={index === 0 ? "md:col-span-2 lg:col-span-3" : ""}>
                <NewsCard article={article} featured={index === 0} />
              </div>
            ))}
             {/* Render duplicates for UI purposes */}
             {news.map((article, index) => (
              <NewsCard key={article.id + 'c'} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
