import { DataValues } from "@/types/types";

export const generateText = (template: string, values: DataValues) => {
  return template
    .replace("{company}", values.company)
    .replace("{jobTitle}", values.jobTitle)
    .replace("{skills}", values.skills)
    .replace("{details}", values.details);
};
