import { CreditCard, MoreHorizontal } from "lucide-react";

const colors = ["#7c3aed", "#10b981", "#3b82f6", "#f59e0b"];

function Pie({ data = [], doughnut = false }) {
  let cursor = 0;
  const segments = data.map((item, index) => {
    const start = cursor;
    cursor += item.value;
    return `${colors[index % colors.length]} ${start}% ${cursor}%`;
  });

  return (
    <div className="relative h-36 w-36 shrink-0 rounded-full" style={{ background: `conic-gradient(${segments.join(", ")})` }}>
      <div className={`absolute inset-5 grid place-items-center rounded-full bg-white text-center ${doughnut ? "ring-1 ring-slate-100" : "shadow-inner"}`}>
        {doughnut ? <CreditCard size={22} className="text-violet-500" /> : <div><p className="text-xl font-black text-slate-900">$284K</p><p className="text-[9px] text-slate-400">Total sales</p></div>}
      </div>
    </div>
  );
}

function ChartCard({ title, subtitle, data, doughnut = false }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div><h2 className="font-bold text-slate-900">{title}</h2><p className="mt-1 text-xs text-slate-400">{subtitle}</p></div>
        <button type="button" className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100" aria-label={`${title} options`}><MoreHorizontal size={17} /></button>
      </div>
      <div className="mt-5 flex items-center justify-center gap-6">
        <Pie data={data} doughnut={doughnut} />
        <div className="min-w-0 flex-1 space-y-2.5">
          {data.map((item, index) => <div key={item.label} className="flex items-center justify-between gap-2 text-[11px]"><span className="flex min-w-0 items-center gap-2 text-slate-500"><span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: colors[index % colors.length] }} /> <span className="truncate">{item.label}</span></span><b className="text-slate-800">{item.value}%</b></div>)}
        </div>
      </div>
    </section>
  );
}

export function CategoryPie({ data }) {
  return <ChartCard title="Sales distribution" subtitle="Revenue by category" data={data} />;
}

export function PaymentDoughnut({ data }) {
  return <ChartCard title="Payment methods" subtitle="Orders by payment method" data={data} doughnut />;
}

export default function SalesPieChart({ data }) {
  return <CategoryPie data={data} />;
}
