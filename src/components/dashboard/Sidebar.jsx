import { useState } from "react";
import { LayoutDashboard, ShoppingCart, Package, Users, BarChart3, Settings, HelpCircle, Menu, X, Store } from "lucide-react";

const items = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Orders", icon: ShoppingCart },
  { label: "Products", icon: Package },
  { label: "Customers", icon: Users },
  { label: "Analytics", icon: BarChart3 },
];

export default function Sidebar({ active, setActive, children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="fixed left-4 top-4 z-40 rounded-xl bg-slate-950 p-2.5 text-white shadow-lg lg:hidden" aria-label="Open menu"><Menu size={20} /></button>
      {open && <button className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden" onClick={() => setOpen(false)} aria-label="Close menu" />}

      <aside className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-slate-950 px-4 py-5 text-slate-300 shadow-2xl transition-transform duration-300 lg:static lg:translate-x-0 lg:shadow-none ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="mb-8 flex items-center justify-between px-2">
          <div className="flex items-center gap-2.5 text-white"><span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-500"><Store size={20} /></span><span className="text-lg font-bold tracking-tight">Dina<span className="text-violet-400">Commerce</span></span></div>
          <button onClick={() => setOpen(false)} className="lg:hidden" aria-label="Close menu"><X size={20} /></button>
        </div>
        <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Main menu</p>
        <nav className="space-y-1">
          {items.map(({ label, icon: Icon }) => <button key={label} onClick={() => { setActive(label); setOpen(false); }} className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${active === label ? "bg-violet-500 text-white shadow-lg shadow-violet-500/20" : "hover:bg-white/5 hover:text-white"}`}><Icon size={18} />{label}</button>)}
        </nav>
        <div className="mt-auto space-y-1 border-t border-white/10 pt-4">
          <button type="button" className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition hover:bg-white/5 hover:text-white"><Settings size={18} />Settings</button>
          <button type="button" className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition hover:bg-white/5 hover:text-white"><HelpCircle size={18} />Help Center</button>
          <div className="mt-4 rounded-2xl bg-white/5 p-4"><p className="text-xs font-semibold text-white">Need a hand?</p><p className="mt-1 text-[11px] leading-5 text-slate-500">Our support team is available 24/7.</p><button type="button" className="mt-3 text-xs font-semibold text-violet-300 hover:text-violet-200">Contact support →</button></div>
        </div>
      </aside>

      {children}
    </>
  );
}
