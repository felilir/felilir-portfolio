import fs from "fs";
import path from "path";

export interface Project {
  slug: string;
  title: string;
  client: string;
  year: string;
  tags: string[];
  thumbnail: string;
  heroImage: string;
  heroVideo: string | null;
  videoEmbed: string | null;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  role: string;
  tools: string[];
  duration: string;
  liveUrl: string | null;
  gallery: string[];
  featured: boolean;
}

const projectsDir = path.join(process.cwd(), "content", "projects");

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDir)) return [];
  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".json"));
  const projects = files.map((file) => {
    const raw = fs.readFileSync(path.join(projectsDir, file), "utf-8");
    return JSON.parse(raw) as Project;
  });
  return sortByFeatured(projects);
}

export function getProjectBySlug(slug: string): Project | null {
  const filePath = path.join(projectsDir, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as Project;
}

export function sortByFeatured(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return parseInt(b.year) - parseInt(a.year);
  });
}
