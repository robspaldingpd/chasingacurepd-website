import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://chasingacurepd.org";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/concert`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/donate`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/science`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
