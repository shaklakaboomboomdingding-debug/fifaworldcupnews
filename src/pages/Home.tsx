import { useEffect, useState } from "react";
import { Link } from "react-router";
import { fetchNews, fetchMatches } from "../api";
import { NewsArticle, Match } from "../types";
import NewsCard from "../components/NewsCard";
import MatchBanner from "../components/MatchBanner";
import { ArrowRight, Calendar, Trophy, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetchNews(), fetchMatches()]).then(([newsData, matchData]) => {
      setNews(newsData);
      setMatches(matchData);
      setLoading(false);
    });
  }, []);

  if (loading) {
     return (
       <div className="flex-grow flex items-center justify-center">
         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
       </div>
     );
  }

  const featuredNews = news[0];
  const regularNews = news.slice(1);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-950 text-white pt-8 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
             src="https://images.unsplash.com/photo-1574629810360-7efbb1925b36?q=80&w=2670&auto=format&fit=crop" 
             alt="Stadium background" 
             className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col items-center mb-12 text-center">
             <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-400 rounded-xl flex items-center justify-center font-black text-2xl italic mb-4 text-white">26</div>
             <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
               North America <span className="text-green-400">2026</span>
             </h1>
             <p className="text-slate-400 text-lg max-w-2xl">
               The biggest FIFA World Cup in history. 48 teams. 104 matches. 3 nations.
               Follow the ultimate football journey here.
             </p>
           </div>

           {/* Live Match Center Highlights */}
           <div className="mb-8 flex items-center justify-between">
              <h2 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Live Match Center
              </h2>
              <Link to="/matches" className="text-[10px] font-bold text-blue-400 hover:underline flex items-center gap-1 transition">
                View All Scores <ChevronRight className="w-3 h-3" />
              </Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {matches.slice(0,3).map(match => (
               <MatchBanner key={match.id} match={match} />
             ))}
           </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
         <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-800">
            <h2 className="text-lg font-black uppercase tracking-widest text-slate-100">
              Latest Headlines
            </h2>
            <Link to="/news" className="hidden sm:flex items-center text-[10px] font-bold text-blue-400 hover:underline uppercase transition">
              View all news <ArrowRight className="ml-1 w-3 h-3" />
            </Link>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredNews && (
               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                 <NewsCard article={featuredNews} featured={true} />
               </motion.div>
            )}
            
            {regularNews.map((article, i) => (
              <motion.div key={article.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + (i * 0.1) }}>
                 <NewsCard article={article} />
              </motion.div>
            ))}
         </div>
      </section>

       {/* Quick Navigation Cards */}
       <section className="bg-slate-900 border-t border-slate-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/teams" className="group bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-sm hover:border-green-500 transition-all flex flex-col items-center text-center">
                   <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center mb-4 group-hover:text-green-400 transition-colors">
                     <Trophy className="w-8 h-8" />
                   </div>
                   <h3 className="text-lg font-black uppercase tracking-wider mb-2">Qualified Teams</h3>
                   <p className="text-slate-400 text-xs">Explore team profiles, squad lists, and FIFA rankings for all 48 nations.</p>
                </Link>
                <Link to="/standings" className="group bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-sm hover:border-green-500 transition-all flex flex-col items-center text-center">
                   <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center mb-4 group-hover:text-green-400 transition-colors">
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                   </div>
                   <h3 className="text-lg font-black uppercase tracking-wider mb-2">Group Standings</h3>
                   <p className="text-slate-400 text-xs">Live group tables, points, goal difference, and qualification status.</p>
                </Link>
                <Link to="/matches" className="group bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-sm hover:border-green-500 transition-all flex flex-col items-center text-center">
                   <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center mb-4 group-hover:text-green-400 transition-colors">
                     <Calendar className="w-8 h-8" />
                   </div>
                   <h3 className="text-lg font-black uppercase tracking-wider mb-2">Fixtures & Results</h3>
                   <p className="text-slate-400 text-xs">Full match schedule, knockout stage brackets, and completed match results.</p>
                </Link>
             </div>
          </div>
       </section>

    </div>
  );
}
