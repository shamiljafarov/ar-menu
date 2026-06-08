"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { getDish } from "@/lib/dishes";
import ARViewer from "@/components/ARViewer";

export default function DishPage() {
  const { id } = useParams<{ id: string }>();
  const dish = getDish(id);

  if (!dish) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center gap-4 p-6 text-center">
        <p className="text-white/60">Belə bir yemək tapılmadı.</p>
        <Link href="/" className="text-amber-400 underline-offset-4 hover:underline">
          ← Menyuya qayıt
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-5 pb-16 pt-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-white/50 transition hover:text-white"
      >
        <span aria-hidden>←</span> Menyu
      </Link>

      <div className="mt-4 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
        <div className="relative">
          <ARViewer id={dish.id} alt={dish.name} />
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-white/35">
        Modeli barmağınızla fırladın · telefonda “Masada gör” ilə masanızda AR-da baxın
      </p>

      <div className="mt-6">
        <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
          {dish.category}
        </span>
        <div className="mt-3 flex items-start justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight">{dish.name}</h1>
          <div className="shrink-0 text-2xl font-bold text-amber-400">
            {dish.price} <span className="text-base font-medium">AZN</span>
          </div>
        </div>
        <p className="mt-3 leading-relaxed text-white/55">{dish.description}</p>
      </div>
    </main>
  );
}
