import { Search, X } from "lucide-react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="relative w-full">
      <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search catalog..."
        className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-600 transition"/>
      {search && (
        <button
          onClick={() => setSearch("")}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;