/// <reference types="astro/client" />

interface Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  clarity?: (...args: unknown[]) => void;
  toolboxTrack?: (eventName: string, parameters?: Record<string, unknown>) => void;
}
