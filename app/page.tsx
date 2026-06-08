import Link from "next/link";
import { dishes, categoryOrder, type Category } from "@/lib/dishes";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-20 pt-10">
      {/* Header */}
      <header className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-xl">
          🍽️
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Milli Mətbəx</h1>
        <p className="mt-2 text-sm text-white/45">
          Yeməyə toxunun · 3D-də baxın · masanızda AR-da görün
        </p>
      </header>

      {/* Menu by category */}
      <div className="mt-12 space-y-12">
        {categoryOrder.map((cat) => {
          const items = dishes.filter((d) => d.category === cat);
          if (items.length === 0) return null;
          return <CategorySection key={cat} title={cat} items={items} />;
        })}
      </div>

      <footer className="mt-16 text-center text-xs text-white/25">
        AR Menyu · {dishes.length} yemək
      </footer>
    </main>
  );
}

function CategorySection({
  title,
  items,
}: {
  title: Category;
  items: typeof dishes;
}) {
  return (
    <section>
      <div className="mb-4 flex items-center gap-3">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/80">
          {title}
        </h2>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((dish) => (
          <Link
            key={dish.id}
            href={`/dish/${dish.id}`}
            className="group relative flex items-center justify-between gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            <div className="min-w-0">
              <h3 className="truncate font-semibold">{dish.name}</h3>
              <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-white/45">
                {dish.description}
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-2">
              <span className="font-bold text-amber-400">{dish.price}₼</span>
              <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/50 transition group-hover:border-amber-400/30 group-hover:text-amber-300">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                </svg>
                AR
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
