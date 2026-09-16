export const social = [
  { url: "mailto:Sourabhsharma93990@gmail.com", name: "mail" },
  { url: "https://github.com/Sourabh0011", name: "github" },
  { url: "https://www.linkedin.com/in/sourabhsharmaa/", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
