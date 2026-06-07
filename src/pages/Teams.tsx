export default function Teams() {
  const teams = [
    { name: 'USA', flag: '🇺🇸', region: 'CONCACAF', rank: 11 },
    { name: 'Mexico', flag: '🇲🇽', region: 'CONCACAF', rank: 15 },
    { name: 'Canada', flag: '🇨🇦', region: 'CONCACAF', rank: 48 },
    { name: 'Argentina', flag: '🇦🇷', region: 'CONMEBOL', rank: 1 },
    { name: 'France', flag: '🇫🇷', region: 'UEFA', rank: 2 },
    { name: 'Brazil', flag: '🇧🇷', region: 'CONMEBOL', rank: 5 },
    { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', region: 'UEFA', rank: 3 },
    { name: 'Spain', flag: '🇪🇸', region: 'UEFA', rank: 8 },
    { name: 'Japan', flag: '🇯🇵', region: 'AFC', rank: 17 },
    { name: 'Morocco', flag: '🇲🇦', region: 'CAF', rank: 12 },
    { name: 'Senegal', flag: '🇸🇳', region: 'CAF', rank: 18 },
    { name: 'Australia', flag: '🇦🇺', region: 'AFC', rank: 23 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
      <div className="mb-12 text-center border-b border-slate-800 pb-8">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white mb-4">Qualified Teams</h1>
        <p className="text-slate-400 max-w-2xl text-lg mx-auto">
          Meet the 48 nations competing for football's ultimate prize across North America.
        </p>
      </div>

       <div className="flex gap-4 mb-8 overflow-x-auto pb-4 justify-center">
           {['All', 'CONCACAF', 'CONMEBOL', 'UEFA', 'CAF', 'AFC', 'OFC'].map((region, i) => (
             <button key={region} className={`px-5 py-2 rounded-md text-xs font-bold tracking-widest uppercase whitespace-nowrap transition-colors ${i === 0 ? 'bg-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.3)]' : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'}`}>
               {region}
             </button>
           ))}
        </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {teams.map(team => (
           <div key={team.name} className="group cursor-pointer bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col items-center hover:border-green-400 transition-all text-center">
             <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">{team.flag}</span>
             <h3 className="font-bold text-white tracking-tighter uppercase mb-2">{team.name}</h3>
             <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 space-y-1">
               <p>{team.region}</p>
               <p>Rank: {team.rank}</p>
             </div>
           </div>
        ))}
      </div>
    </div>
  );
}
