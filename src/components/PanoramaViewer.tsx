"use client";

import { useEffect, useRef } from "react";

interface PanoramaViewerProps {
  image: string;
  className?: string;
}

export function PanoramaViewer({ image, className = "" }: PanoramaViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<unknown>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Pannellum dynamisch laden
    const loadPannellum = async () => {
      // CSS laden
      if (!document.querySelector('link[href*="pannellum"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css";
        document.head.appendChild(link);
      }

      // Script laden
      if (!(window as Record<string, unknown>).pannellum) {
        await new Promise<void>((resolve) => {
          const script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js";
          script.onload = () => resolve();
          document.head.appendChild(script);
        });
      }

      // Viewer initialisieren
      const pannellum = (window as Record<string, unknown>).pannellum as {
        viewer: (
          el: HTMLElement,
          config: Record<string, unknown>
        ) => unknown;
      };

      if (containerRef.current && pannellum) {
        viewerRef.current = pannellum.viewer(containerRef.current, {
          type: "equirectangular",
          panorama: image,
          autoLoad: true,
          autoRotate: -2,
          compass: false,
          showZoomCtrl: false,
          showFullscreenCtrl: true,
          mouseZoom: true,
          hfov: 100,
          minHfov: 50,
          maxHfov: 120,
          friction: 0.15,
          uiText: {
            loadButtonLabel: "360° laden",
            loadingLabel: "Lädt...",
          },
        });
      }
    };

    loadPannellum();

    return () => {
      if (viewerRef.current) {
        try {
          (viewerRef.current as { destroy: () => void }).destroy();
        } catch {
          // ignore cleanup errors
        }
      }
    };
  }, [image]);

  return (
    <div
      ref={containerRef}
      className={`w-full rounded-lg overflow-hidden ${className}`}
      style={{ height: "400px" }}
    />
  );
}
