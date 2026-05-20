export const GA_ID = "G-Y2DTTMX3HJ";

export function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", name, params);
  }
}
