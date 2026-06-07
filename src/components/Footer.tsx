import { Trophy } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="flex-none bg-slate-900/50 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
             <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-400 rounded flex items-center justify-center font-black text-sm italic text-white">26</div>
              <span className="font-black tracking-tighter uppercase text-white text-lg">FIFA World Cup <span className="text-green-400">Hub</span></span>
            </div>
            <p className="text-sm">
              Your ultimate destination for the latest news, live scores, and comprehensive coverage of the 2026 World Cup.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-[10px] uppercase tracking-widest text-slate-500">Quick Links</h3>
            <ul className="space-y-2 text-sm font-semibold">
              <li><Link to="/news" className="hover:text-green-400 transition">Latest News</Link></li>
              <li><Link to="/matches" className="hover:text-green-400 transition">Live Scores</Link></li>
              <li><Link to="/teams" className="hover:text-green-400 transition">Teams</Link></li>
              <li><Link to="/standings" className="hover:text-green-400 transition">Standings</Link></li>
            </ul>
          </div>
           <div>
            <h3 className="text-white font-semibold mb-4 text-[10px] uppercase tracking-widest text-slate-500">Legal</h3>
            <ul className="space-y-2 text-sm font-semibold">
              <li><a href="#" className="hover:text-green-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Cookie Policy</a></li>
            </ul>
          </div>
           <div>
            <h3 className="text-white font-semibold mb-4 text-[10px] uppercase tracking-widest text-slate-500">Newsletter</h3>
            <p className="text-sm mb-4">Get the latest updates delivered to your inbox.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-slate-900 border border-slate-800 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:border-green-400" />
              <button className="bg-green-500 hover:bg-green-400 text-black px-4 py-2 rounded-md font-bold text-xs uppercase tracking-widest transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-[9px] font-medium uppercase text-center text-slate-600">
          &copy; {new Date().getFullYear()} FIFA World Cup Hub • Independent Media
        </div>
      </div>
    </footer>
  );
}
