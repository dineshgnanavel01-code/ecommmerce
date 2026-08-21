import { useState } from "react";
import { Bell, Search, ChevronDown, CheckCircle2 } from "lucide-react";
import { notifications } from "../../data/dashboard";

export default function Header({ query, setQuery }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div className="ml-12 min-w-0 lg:ml-0"><p className="text-xs font-medium text-slate-400">Friday, August 21, 2026</p><h1 className="truncate text-lg font-bold text-slate-900 sm:text-xl">Good morning, Dinesh 👋</h1></div>
        <div className="hidden max-w-md flex-1 md:block"><div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={17}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search orders, products..." className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10" /></div></div>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowNotifications(v => !v)} className="relative rounded-xl p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"><Bell size={19}/><span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-violet-500 ring-2 ring-white"/></button>
          <div className="relative"><button onClick={() => setShowProfile(v => !v)} className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-slate-100"><div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-sm font-bold text-white">DG</div><div className="hidden text-left sm:block"><p className="text-xs font-bold text-slate-800">Dinesh G.</p><p className="text-[10px] text-slate-400">Administrator</p></div><ChevronDown size={15} className="hidden text-slate-400 sm:block"/></button>
            {showProfile && <div className="absolute right-0 top-12 w-44 rounded-xl border border-slate-200 bg-white p-2 shadow-xl"><button className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-50">My profile</button><button className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-50">Account settings</button><button className="w-full rounded-lg px-3 py-2 text-left text-sm text-rose-600 hover:bg-rose-50">Sign out</button></div>}
          </div>
        </div>
      </div>
      <div className="mt-3 md:hidden"><div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search orders, products..." className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-violet-400 focus:bg-white" /></div></div>
      {showNotifications && <div className="absolute right-4 top-16 w-80 max-w-[calc(100vw-2rem)] rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl sm:right-24"><div className="mb-2 flex items-center justify-between px-2"><p className="text-sm font-bold">Notifications</p><CheckCircle2 size={16} className="text-emerald-500"/></div>{notifications.map(n => <div key={n.title} className="rounded-xl p-3 transition hover:bg-slate-50"><p className="text-xs font-semibold text-slate-800">{n.title}</p><p className="mt-0.5 text-[11px] text-slate-500">{n.text}</p><p className="mt-1 text-[10px] text-slate-400">{n.time}</p></div>)}</div>}
    </header>
  );
}
