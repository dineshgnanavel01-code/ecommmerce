import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, MoreHorizontal } from "lucide-react";

const statusStyles = {
  Delivered: "bg-emerald-50 text-emerald-700",
  Processing: "bg-amber-50 text-amber-700",
  Shipped: "bg-blue-50 text-blue-700",
  Cancelled: "bg-rose-50 text-rose-700",
};

export default function RecentOrders({ orders, query }) {
  const [filter, setFilter] = useState("All");
  const [tableQuery, setTableQuery] = useState("");
  const filtered = useMemo(() => orders.filter((order) => {
    const haystack = `${order.id} ${order.customer} ${order.product}`.toLowerCase();
    return (filter === "All" || order.status === filter)
      && haystack.includes(query.toLowerCase())
      && haystack.includes(tableQuery.toLowerCase());
  }), [orders, filter, query, tableQuery]);

  return <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
    <div className="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div><h2 className="font-bold text-slate-900">Recent orders</h2><p className="mt-1 text-xs text-slate-400">Latest transactions across your store</p></div>
      <div className="flex items-center gap-2">
        <div className="relative hidden sm:block"><Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={14}/><input value={tableQuery} onChange={e => setTableQuery(e.target.value)} placeholder="Filter orders" className="w-36 rounded-lg border border-slate-200 py-2 pl-8 pr-2 text-xs outline-none focus:border-violet-400" /></div>
        <div className="relative"><SlidersHorizontal size={15} className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400"/><select value={filter} onChange={e => setFilter(e.target.value)} className="appearance-none rounded-lg border border-slate-200 bg-white py-2 pl-8 pr-7 text-xs outline-none focus:border-violet-400"><option>All</option><option>Delivered</option><option>Processing</option><option>Shipped</option><option>Cancelled</option></select></div>
      </div>
    </div>
    <div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left"><thead className="bg-slate-50/70 text-[10px] uppercase tracking-wider text-slate-400"><tr><th className="px-5 py-3 font-bold">Order</th><th className="px-5 py-3 font-bold">Customer</th><th className="px-5 py-3 font-bold">Product</th><th className="px-5 py-3 font-bold">Date</th><th className="px-5 py-3 font-bold">Amount</th><th className="px-5 py-3 font-bold">Status</th><th className="px-5 py-3"/></tr></thead>
      <tbody className="divide-y divide-slate-100">{filtered.map(order => <tr key={order.id} className="group transition hover:bg-slate-50/70"><td className="px-5 py-4 text-xs font-bold text-slate-800">{order.id}</td><td className="px-5 py-4 text-xs font-medium text-slate-600">{order.customer}</td><td className="px-5 py-4 text-xs text-slate-500">{order.product}</td><td className="px-5 py-4 text-xs text-slate-400">{order.date}</td><td className="px-5 py-4 text-xs font-bold text-slate-800">{order.amount}</td><td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${statusStyles[order.status]}`}>{order.status}</span></td><td className="px-5 py-4"><button className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700" aria-label={`More options for ${order.id}`}><MoreHorizontal size={16}/></button></td></tr>)}{filtered.length === 0 && <tr><td colSpan="7" className="px-5 py-10 text-center text-sm text-slate-400">No orders found.</td></tr>}</tbody>
    </table></div>
  </section>;
}
