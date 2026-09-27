import {
  Award,
  Camera,
  Code2,
  Palette,
  PenTool,
  Scissors,
  Share2,
  Smartphone,
  Video,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";
import { SiGoogleads, SiInstagram, SiMeta } from "react-icons/si";

export const icons: Record<string, LucideIcon | IconType> = {
  "Social Media Management": Share2,
  "Instagram Growth": SiInstagram,
  "Meta Ads": SiMeta,
  "Google Ads": SiGoogleads,
  "Website Development": Code2,
  "Mobile App Development": Smartphone,
  "Video Shoot": Video,
  "Video Editing": Scissors,
  "Content Creation": PenTool,
  Branding: Award,
  "Graphic Design": Palette,
};

// Brand logos use their official colours; the rest get a distinct accent each.
export const colors: Record<string, string> = {
  "Social Media Management": "#7C3AED",
  "Instagram Growth": "#E4405F",
  "Meta Ads": "#0866FF",
  "Google Ads": "#4285F4",
  "Website Development": "#0EA5E9",
  "Mobile App Development": "#6366F1",
  "Video Shoot": "#EF4444",
  "Video Editing": "#F59E0B",
  "Content Creation": "#10B981",
  Branding: "#EC4899",
  "Graphic Design": "#F97316",
};

export default function ServiceIcon({ title, size = "md" }: { title: string; size?: "md" | "lg" }) {
  const Icon = icons[title] ?? Camera;
  const color = colors[title] ?? "#111827";
  const box = size === "lg" ? "h-16 w-16" : "h-11 w-11";
  const glyph = size === "lg" ? "h-8 w-8" : "h-6 w-6";
  return (
    <span
      className={`flex ${box} items-center justify-center rounded-lg`}
      style={{ backgroundColor: `${color}1A` }}
    >
      <Icon className={glyph} strokeWidth={1.8} color={color} aria-hidden="true" />
    </span>
  );
}
