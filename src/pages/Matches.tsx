import { useEffect, useState } from "react";
import { fetchMatches } from "../api";
import { Match } from "../types";
import MatchBanner from "../components/MatchBanner";
import { Trophy } from "lucide-react";

export default function Matches() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMatches().then(data => {
      setMatches(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
      <div className="flex flex-col items-center mb-12 text-center border-b border-slate-800 pb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-400 rounded-xl flex items-center justify-center font-black text-2xl italic mb-4 text-white">26</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white mb-4">
          Match Schedule
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          View all fixtures, live scores, and results for the FIFA World Cup 2026.
        </p>
      </div>

      <div className="flex gap-4 mb-8 pb-4 overflow-x-auto">
        <button className="px-5 py-2 bg-green-500 text-black rounded-md shadow-[0_0_15px_rgba(34,197,94,0.3)] text-xs font-bold tracking-widest uppercase whitespace-nowrap">All Matches</button>
        <button className="px-5 py-2 bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700 rounded-md text-xs font-bold tracking-widest uppercase transition whitespace-nowrap">Group Stage</button>
        <button className="px-5 py-2 bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700 rounded-md text-xs font-bold tracking-widest uppercase transition whitespace-nowrap">Knockouts</button>
      </div>

       {loading ? (
        <div className="flex justify-center p-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {matches.map(match => (
             <div key={match.id} className="transform transition-transform hover:-translate-y-1">
               <MatchBanner match={match} />
             </div>
          ))}
          {/* Mock extra matches just to fill space */}
           {matches.map(match => (
             <div key={match.id + '_copy'} className="transform transition-transform hover:-translate-y-1">
               <MatchBanner match={{...match, id: match.id + 'c'}} />
             </div>
          ))}
        </div>
      )}
    </div>
  );
}
