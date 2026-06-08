"use client";

import { useEffect, useRef } from "react";

// model-viewer custom element-ini TS-ə tanıtmağın ən sadə yolu
const ModelViewer = "model-viewer" as unknown as React.FC<
  React.HTMLAttributes<HTMLElement> & Record<string, unknown>
>;

const PLACEHOLDER = "/models/placeholder.glb";

type Props = {
  /** Yeməyin id-si — /models/<id>.glb və /models/<id>.usdz oxunur */
  id: string;
  alt: string;
};

export default function ARViewer({ id, alt }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // model-viewer elementini yalnız client-də qeydiyyatdan keçir
    import("@google/model-viewer");
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Real model faylı yoxdursa (404), placeholder-ə keç
    const onError = () => {
      if (el.getAttribute("src") !== PLACEHOLDER) {
        el.setAttribute("src", PLACEHOLDER);
        el.removeAttribute("ios-src"); // placeholder üçün iOS-da avtomatik usdz
      }
    };
    el.addEventListener("error", onError);
    return () => el.removeEventListener("error", onError);
  }, [id]);

  return (
    <ModelViewer
      ref={ref as React.Ref<HTMLElement>}
      src={`/models/${id}.glb`}
      ios-src={`/models/${id}.usdz`}
      alt={alt}
      poster=""
      ar
      ar-modes="webxr scene-viewer quick-look"
      ar-scale="auto"
      ar-placement="floor"
      camera-controls
      auto-rotate
      auto-rotate-delay="0"
      rotation-per-second="18deg"
      shadow-intensity="1"
      exposure="1"
      environment-image="neutral"
      touch-action="pan-y"
      style={{
        width: "100%",
        height: "60vh",
        maxHeight: "560px",
        background:
          "radial-gradient(circle at 50% 35%, #1c1c24 0%, #0b0b0f 70%)",
        "--poster-color": "transparent",
      } as React.CSSProperties}
    >
      <button
        slot="ar-button"
        className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-black shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition active:scale-95"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
        </svg>
        Masada gör (AR)
      </button>

      <div slot="progress-bar" />
    </ModelViewer>
  );
}
