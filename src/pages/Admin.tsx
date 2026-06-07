import { Lock, FileText, Users, Database } from "lucide-react";

export default function Admin() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
      <div className="flex items-center space-x-3 mb-8 border-b border-slate-800 pb-8">
        <Lock className="w-8 h-8 text-green-400" />
        <h1 className="text-3xl font-black tracking-tighter uppercase text-white hover:text-green-400 transition-colors">Admin Dashboard</h1>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center space-x-3 text-green-400 mb-4">
              <FileText className="w-6 h-6" />
              <h2 className="text-[10px] uppercase font-black tracking-widest">Content Management</h2>
            </div>
            <p className="text-slate-400 text-sm mb-4">Create, edit, and publish news articles and match reports.</p>
            <button className="w-full bg-slate-800 text-white rounded-md py-2 text-[10px] font-black uppercase tracking-widest hover:bg-slate-700 transition">Manage Articles</button>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center space-x-3 text-blue-400 mb-4">
              <Database className="w-6 h-6" />
              <h2 className="text-[10px] uppercase font-black tracking-widest">Match Data</h2>
            </div>
            <p className="text-slate-400 text-sm mb-4">Update live scores, match schedules, and team statistics.</p>
            <button className="w-full bg-slate-800 text-white rounded-md py-2 text-[10px] font-black uppercase tracking-widest hover:bg-slate-700 transition">Update Matches</button>
          </div>

           <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center space-x-3 text-red-500 mb-4">
              <Users className="w-6 h-6" />
              <h2 className="text-[10px] uppercase font-black tracking-widest">User Management</h2>
            </div>
            <p className="text-slate-400 text-sm mb-4">Manage subscribers, author permissions, and user comments.</p>
            <button className="w-full bg-slate-800 text-white rounded-md py-2 text-[10px] font-black uppercase tracking-widest hover:bg-slate-700 transition">View Users</button>
          </div>
       </div>

       <div className="mt-8 bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="font-black text-lg uppercase tracking-tighter mb-4 text-white">Recent Activity</h3>
          <ul className="space-y-3 text-sm text-slate-300">
             <li className="flex justify-between items-center py-2 border-b border-slate-800/50">
                <span>Article "Mbappe Set to Lead France" published</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">2 hours ago</span>
             </li>
             <li className="flex justify-between items-center py-2 border-b border-slate-800/50">
                <span>Match Score updated: USA 0 - 0 TBD</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">5 hours ago</span>
             </li>
             <li className="flex justify-between items-center py-2">
                <span>System backup completed</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">1 day ago</span>
             </li>
          </ul>
       </div>
    </div>
  );
}
