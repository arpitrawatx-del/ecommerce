import { categories } from "../../data/categories";

export default function CategoryFilter({ selectedCategory, onSelectCategory }) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`w-full text-left px-4 py-2.5 rounded-xl font-medium transition-all ${
              selectedCategory === category.id
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}