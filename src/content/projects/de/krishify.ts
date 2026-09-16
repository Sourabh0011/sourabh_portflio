import krishifyImage from "../../../assets/images/projects/kirshify.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Krishify",
  theme: "dark",
  tags: ["react", "node", "express", "mongodb", "tailwind"],
  videoBorder: false,
  description:
    "Krishify ist eine Agritech-Plattform, die indischen Landwirten ein datenzentriertes Ökosystem für Präzisionslandwirtschaft und smarteres Ressourcenmanagement bietet.<br/><br/>Auf Basis des MERN-Stacks verbindet sie eine responsive React.js-Oberfläche — mit Live-Wetterdaten und zweisprachiger Unterstützung (Englisch / Hindi) — mit einem MongoDB-Backend, das für große landwirtschaftliche Datenmengen ausgelegt ist.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: krishifyImage,
        alt: "Krishify-Dashboard mit Live-Wetterdaten",
        caption: "Startseite",
      },
    },
  ],
} as const satisfies ProjectContent;
