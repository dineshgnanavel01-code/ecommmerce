import { useMemo, useState } from "react";
import Sidebar from "./components/dashboard/Sidebar";
import Header from "./components/dashboard/Header";
import OverviewCards from "./components/dashboard/OverviewCards";
import SalesPieChart from "./components/dashboard/SalesPieChart";
import RecentOrders from "./components/dashboard/RecentOrders";
import { stats, salesDistribution, orders, products } from "./data/dashboard";

const tabs = ["Dashboard", "Orders", "Products", "Customers", "Analytics"];

function ProductPerformance({ items, query }) {
  const filtered = useMemo(
    () => items.filter((item) => `${item.name} ${item.category}`.toLowerCase().includes(query.toLowerCase())),
    [items, query],
  );

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="font-bold text-slate-900">Product performance</h2>
          <p className="mt-1 text-xs text-slate-400">Top products by units sold</p>
        </div>
        <button className="rounded-lg px-2.5 py-1.5 text-xs font-semibold text-violet-600 transition hover:bg-violet-50">View all</button>
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
                  <span className="text-xs font-bold text-slate-900">{item.revenue}</span>
                </div>
                <div className="mt-1.5 flex items-center justify-between text-[10px] text-slate-400">
                  <span>{item.category} · {item.sold} sold</span>
                  <span className="font-semibold text-emerald-600">{item.trend}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-violet-500 transition-all duration-700" style={{ width: `${Math.max(35, 100 - index * 15)}%` }} />
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

function DashboardContent({ active, query }) {
  if (active !== "Dashboard") {
    return (
      <div className="grid min-h-[55vh] place-items-center rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
        <div><p className="text-4xl">🚧</p><h2 className="mt-3 text-xl font-black text-slate-900">{active}</h2><p className="mt-1 text-sm text-slate-400">This section is ready for the next dashboard module.</p></div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <OverviewCards stats={stats} />
      <div className="grid gap-5 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <SalesPieChart data={salesDistribution} />
        <ProductPerformance items={products} query={query} />
      </div>
      <RecentOrders orders={orders} query={query} />
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("Dashboard");
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#f6f7fb] text-slate-900 antialiased">
      <div className="flex min-h-screen">
        <Sidebar active={active} setActive={setActive} />
        <div className="min-w-0 flex-1">
          <Header query={query} setQuery={setQuery} />
          <main className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-500">Overview</p><h2 className="mt-1 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Store performance</h2><p className="mt-1 text-sm text-slate-400">Monitor sales, orders and product performance at a glance.</p></div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500"/><span className="text-xs font-semibold text-slate-500">Live data</span><select className="ml-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 outline-none transition hover:border-slate-300"><option>Last 30 days</option><option>Last 7 days</option><option>This year</option></select></div>
            </div>
            <DashboardContent active={active} query={query} />
          </main>
        </div>
      </div>
    </div>
  );
}
