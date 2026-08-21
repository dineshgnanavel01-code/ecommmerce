import { ShoppingCart, DollarSign, Users, Package, ArrowUpRight } from "lucide-react";

const icons = { orders: ShoppingCart, sales: DollarSign, customers: Users, products: Package };
const tones = { violet: "bg-violet-50 text-violet-600", emerald: "bg-emerald-50 text-emerald-600", blue: "bg-blue-50 text-blue-600", amber: "bg-amber-50 text-amber-600" };

export default function OverviewCards({ stats }) {
  return <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">{stats.map(stat => { const Icon = icons[stat.icon]; return <article key={stat.label} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60"><div className="flex items-start justify-between"><div className={`grid h-11 w-11 place-items-center rounded-xl ${tones[stat.tone]}`}><Icon size={20}/></div><span className="flex items-center gap-0.5 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-600"><ArrowUpRight size={12}/>{stat.change}</span></div><p className="mt-5 text-sm font-medium text-slate-500">{stat.label}</p><p className="mt-1 text-2xl font-black tracking-tight text-slate-900">{stat.value}</p></article>})}</section>;
}
