import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chasing a Cure Parkinson's Foundation",
    short_name: "Chasing a Cure",
    description:
      "Volunteer-run foundation funding Parkinson's research through the Michael J. Fox Foundation.",
    start_url: "/",
    display: "standalone",
    background_color: "#FDF7F7",
    theme_color: "#1A1A1A",
    icons: [
      { src: "/logo.png", sizes: "192x192", type: "image/png" },
      { src: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
