import eventImage from "../../../assets/images/projects/event.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Event Management Platform",
  theme: "light",
  tags: ["typescript", "node", "express", "jwt"],
  videoBorder: true,
  description:
    "Eine robuste Event-Planungsplattform mit automatisierten Registrierungs-Workflows und dynamischer Teilnehmerplanung.<br/><br/>Entwickelt mit TypeScript, Node.js und Express, setzt sie eine hochsichere Authentifizierungs-Middleware mit JWT (JSON Web Tokens) und bcrypt-Passwort-Hashing ein, um Organisator- und Teilnehmerdaten zu schützen.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: eventImage,
        alt: "Startseite der Event-Management-Plattform",
        caption: "Startseite",
      },
    },
  ],
} as const satisfies ProjectContent;
