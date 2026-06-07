import { Match } from "../types";
import { format } from "date-fns";

export default function MatchBanner({ match }: { match: Match }) {
  const time = new Date(match.time);
  
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between text-white hover:border-green-500 transition cursor-pointer group">
      <div className="text-center sm:text-left mb-4 sm:mb-0">
        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{match.group}</div>
        <div className="text-xs text-slate-500 font-semibold flex flex-col items-center sm:items-start">
          <span>{format(time, "MMM d, yyyy")}</span>
          <span>{match.stadium}</span>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex flex-col items-center">
           <span className="text-4xl mb-2">{match.team1.flag}</span>
           <span className="font-bold text-lg tracking-tighter uppercase">{match.team1.code}</span>
        </div>
        
        <div className="flex flex-col items-center px-4">
          {match.status === 'Scheduled' ? (
             <div className="text-[10px] uppercase font-bold text-slate-500 bg-slate-800 px-3 py-1 rounded-full">
               Starts at {format(time, "HH:mm")}
             </div>
          ) : (
            <div className="flex items-center space-x-3 text-3xl font-black italic">
               <span>{match.team1.score}</span>
               <span className="text-slate-600 font-medium text-lg">:</span>
               <span>{match.team2.score}</span>
            </div>
          )}
          {match.status === 'Live' && (
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-500 mt-2 animate-pulse flex items-center gap-1">
               <span className="w-2 h-2 rounded-full bg-red-500"></span> Live
            </span>
          )}
        </div>

        <div className="flex flex-col items-center">
           <span className="text-4xl mb-2">{match.team2.flag}</span>
           <span className="font-bold text-lg tracking-tighter uppercase">{match.team2.code}</span>
        </div>
      </div>
    </div>
  );
}
