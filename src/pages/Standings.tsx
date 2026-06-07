export default function Standings() {
  const groups = ['Group A', 'Group B', 'Group C', 'Group D'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
      <div className="mb-12 border-b border-slate-800 pb-8">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white mb-4">Group Standings</h1>
        <p className="text-slate-400 max-w-2xl text-lg">
          Current standings for all 12 groups in the FIFA World Cup 2026.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {groups.map(group => (
          <div key={group} className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{group}</h2>
            </div>
            <div className="p-2 overflow-x-auto">
              <table className="w-full text-[11px]">
                <thead>
                  <tr className="text-slate-500 border-b border-slate-800">
                    <th className="px-2 py-2 text-left">Pos</th>
                    <th className="py-2 text-left">Team</th>
                    <th className="py-2 text-center">Pld</th>
                    <th className="py-2 text-center">W</th>
                    <th className="py-2 text-center">D</th>
                    <th className="py-2 text-center">L</th>
                    <th className="py-2 text-center">GD</th>
                    <th className="px-2 py-2 text-right">Pts</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="bg-blue-900/10 border-b border-slate-800/50">
                    <td className="px-2 py-2.5 font-bold text-blue-400">1</td>
                    <td className="py-2.5 font-semibold flex items-center gap-2"><span className="text-base">🇺🇸</span> USA</td>
                    <td className="py-2.5 text-center text-slate-500">0</td>
                    <td className="py-2.5 text-center text-slate-500">0</td>
                    <td className="py-2.5 text-center text-slate-500">0</td>
                    <td className="py-2.5 text-center text-slate-500">0</td>
                    <td className="py-2.5 text-center text-slate-500">0</td>
                    <td className="px-2 py-2.5 text-right font-bold text-white">0</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                     <td className="px-2 py-2.5 text-slate-500">2</td>
                    <td className="py-2.5 font-semibold flex items-center gap-2"><span className="text-base">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span> England</td>
                    <td className="py-2.5 text-center text-slate-500">0</td>
                    <td className="py-2.5 text-center text-slate-500">0</td>
                    <td className="py-2.5 text-center text-slate-500">0</td>
                    <td className="py-2.5 text-center text-slate-500">0</td>
                    <td className="py-2.5 text-center text-slate-500">0</td>
                    <td className="px-2 py-2.5 text-right font-bold text-white">0</td>
                  </tr>
                   <tr className="border-b border-slate-800/50">
                     <td className="px-2 py-2.5 text-slate-500">3</td>
                    <td className="py-2.5 font-semibold flex items-center gap-2"><span className="text-base">🇯🇵</span> Japan</td>
                    <td className="py-2.5 text-center text-slate-500">0</td>
                    <td className="py-2.5 text-center text-slate-500">0</td>
                    <td className="py-2.5 text-center text-slate-500">0</td>
                    <td className="py-2.5 text-center text-slate-500">0</td>
                    <td className="py-2.5 text-center text-slate-500">0</td>
                    <td className="px-2 py-2.5 text-right font-bold text-white">0</td>
                  </tr>
                   <tr className="border-b border-slate-800/50">
                     <td className="px-2 py-2.5 text-slate-500">4</td>
                    <td className="py-2.5 font-semibold flex items-center gap-2"><span className="text-base">🇲🇦</span> Morocco</td>
                    <td className="py-2.5 text-center text-slate-500">0</td>
                    <td className="py-2.5 text-center text-slate-500">0</td>
                    <td className="py-2.5 text-center text-slate-500">0</td>
                    <td className="py-2.5 text-center text-slate-500">0</td>
                    <td className="py-2.5 text-center text-slate-500">0</td>
                    <td className="px-2 py-2.5 text-right font-bold text-white">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
