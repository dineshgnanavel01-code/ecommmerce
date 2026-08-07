const categories = ["All", "Electronics", "Footwear", "Appliances", "Accessories", "Apparel", "Home & Living"];

const CategoryFilter = ({ category, setCategory }) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
            category === cat
              ? "bg-indigo-600 text-white"
              : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
          }`}>
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;