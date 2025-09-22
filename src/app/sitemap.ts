
import type { MetadataRoute } from "next";


const BASE =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ortadoguelektrik.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

 
  const routes = [
    "/",               
    "/hakkimda",       
    "/iletisim",      
    "/lokasyon",      
    "/projeler",       
    "/sosyalmedya",   
  ];

  return routes.map((path): MetadataRoute.Sitemap[number] => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : 0.8,
  }));
}
