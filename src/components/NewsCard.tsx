import { NewsArticle } from "../types";
import { formatDistanceToNow } from "date-fns";

export default function NewsCard({ article, featured = false }: { article: NewsArticle, featured?: boolean }) {
  return (
    <div className={`group cursor-pointer rounded-xl overflow-hidden bg-slate-900 border border-slate-800 transition-all hover:border-green-500 ${featured ? 'md:col-span-2 lg:col-span-3 flex flex-col md:flex-row' : 'flex flex-col'}`}>
      <div className={`relative overflow-hidden ${featured ? 'md:w-2/3 h-64 md:h-full' : 'h-48'}`}>
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-[10px] font-bold px-2 py-1 rounded tracking-widest uppercase">
          {article.category}
        </div>
      </div>
      <div className={`p-6 flex flex-col justify-between ${featured ? 'md:w-1/3' : ''}`}>
        <div>
          <h3 className={`font-black tracking-tight text-white group-hover:text-green-400 transition-colors ${featured ? 'text-2xl mb-3' : 'text-lg mb-2'}`}>
            {article.title}
          </h3>
          <p className="text-slate-400 text-sm line-clamp-3 mb-4">
            {article.summary}
          </p>
        </div>
        <div className="flex items-center text-[10px] uppercase tracking-wider text-slate-500 font-bold">
          <span>{article.author}</span>
          <span className="mx-2">•</span>
          <span>{formatDistanceToNow(new Date(article.date), { addSuffix: true })}</span>
        </div>
      </div>
    </div>
  );
}
