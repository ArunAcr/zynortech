import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", "/about", "/services", ...services.map((s) => `/services/${s.slug}`),
    "/portfolio", "/faq", "/contact", "/privacy-policy", "/terms-and-conditions",
  ];
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : r.includes("privacy") || r.includes("terms") ? 0.3 : 0.7,
  }));
}
