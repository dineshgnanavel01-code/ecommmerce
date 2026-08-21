import { useState } from "react";
import Sidebar from "./components/dashboard/Sidebar";
import Header from "./components/dashboard/Header";
import OverviewCards from "./components/dashboard/OverviewCards";
import WeeklySales from "./components/dashboard/WeeklySales";
import { CategoryPie, PaymentDoughnut } from "./components/dashboard/SalesPieChart";
import RecentOrders from "./components/dashboard/RecentOrders";
import ProductPerformance from "./components/dashboard/ProductPerformance";
import { stats, weeklySales, salesDistribution, paymentDistribution, orders, products } from "./data/dashboard";

function DashboardContent({ active, query }) {
  if (active !== "Dashboard") {
    return (
      <div className="grid min-h-[55vh] place-items-center rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm">
        <div><p className="text-4xl">🚧</p><h2 className="mt-3 text-xl font-black text-slate-900">{active}</h2><p className="mt-1 text-sm text-slate-400">This section is ready for the next dashboard module.</p></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <OverviewCards stats={stats} />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="xl:col-span-7"><WeeklySales data={weeklySales} /></div>
        <div className="flex flex-col gap-6 xl:col-span-5"><CategoryPie data={salesDistribution} /><PaymentDoughnut data={paymentDistribution} /></div>
      </div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="xl:col-span-8"><RecentOrders orders={orders} query={query} /></div>
        <div className="xl:col-span-4"><ProductPerformance items={products} query={query} /></div>
      </div>
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
              <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-500">Overview</p><h1 className="mt-1 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Store performance</h1><p className="mt-1 text-sm text-slate-400">Monitor sales, orders and product performance at a glance.</p></div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500"/><span className="text-xs font-semibold text-slate-500">Live data</span><select className="ml-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 outline-none transition hover:border-slate-300"><option>Last 30 days</option><option>Last 7 days</option><option>This year</option></select></div>
            </div>
            <DashboardContent active={active} query={query} />
            <footer className="pt-7 text-center text-xs text-slate-400">DinaCommerce · Demo data shown for illustration</footer>
          </main>
        </div>
      </div>
    </div>
  );
}
