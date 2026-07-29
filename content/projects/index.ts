import { rapidusShare } from "./rapidus-share";
import { ozrabas } from "./ozrabas";
import { hrms } from "./hrms";
import { sparkLove } from "./spark-love";
import { sulaimania } from "./sulaimania";
import { aiMobileApp } from "./ai-mobile-app";
import { Project } from "@/types/project";

export const allProjects: Project[] = [
  rapidusShare,
  ozrabas,
  hrms,
  sparkLove,
  sulaimania,
  aiMobileApp,
];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}
