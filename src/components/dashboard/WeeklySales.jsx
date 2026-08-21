import { MoreHorizontal, TrendingUp } from "lucide-react";

export default function WeeklySales({ data = [] }) {
  const maxValue = Math.max(...data.map((item) => item.sales), 1);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-500">Analytics</p>
          <h2 className="mt-1 font-bold text-slate-900">Weekly sales</h2>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-2xl font-black text-slate-950">$24,860</span>
            <span className="flex items-center gap-1 text-xs font-bold text-emerald-600"><TrendingUp size={13} />18.4%</span>
          </div>
        </div>
        <button type="button" className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700" aria-label="Weekly sales options"><MoreHorizontal size={18} /></button>
      </div>

      <div className="mt-7 flex h-60 items-end gap-2 sm:gap-3">
        {data.map((item) => (
          <div key={item.day} className="group flex h-full flex-1 flex-col justify-end">
            <div className="flex h-full items-end">
              <div className="w-full rounded-t-lg bg-violet-500 transition-all duration-500 group-hover:bg-violet-600" style={{ height: `${(item.sales / maxValue) * 100}%` }} />
            </div>
            <p className="mt-3 text-center text-[10px] font-semibold text-slate-400">{item.day}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
