import { MoreHorizontal, TrendingUp } from "lucide-react";

export default function ProductPerformance({ items = [], query = "" }) {
  const filtered = items.filter((item) =>
    `${item.name} ${item.category}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="font-bold text-slate-900">Product performance</h2>
          <p className="mt-1 text-xs text-slate-400">Top products by units sold</p>
        </div>
        <button type="button" className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700" aria-label="Product options">
          <MoreHorizontal size={18} />
        </button>
      </div>

      <div className="mt-5 space-y-5">
        {filtered.map((item, index) => (
          <div key={item.name} className="group">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                <img src={item.image} alt="" className="h-full w-full object-cover transition duration-300 group-hover:scale-110" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="truncate text-xs font-bold text-slate-800">{item.name}</p>
                  <span className="shrink-0 text-xs font-bold text-slate-900">{item.revenue}</span>
                </div>
                <div className="mt-1.5 flex items-center justify-between text-[10px] text-slate-400">
                  <span>{item.category} · {item.sold} sold</span>
                  <span className="flex items-center gap-1 font-semibold text-emerald-600"><TrendingUp size={11} />{item.trend}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-violet-500 transition-all duration-700 group-hover:bg-violet-600" style={{ width: `${Math.max(35, 100 - index * 15)}%` }} />
                </div>
              </div>
            </div>
          </div>
        ))}
        {!filtered.length && <p className="py-6 text-center text-sm text-slate-400">No products found.</p>}
      </div>
    </section>
  );
}
