import bybitImage from "../../../assets/images/projects/bybits.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Bybit",
  theme: "dark",
  tags: ["react", "node", "express", "mongodb"],
  videoBorder: false,
  description:
    "Bybit ist ein URL-Shortener, der lange Links in Sekunden in kurze, einprägsame und nachverfolgbare Links verwandelt.<br/><br/>Auf Basis des MERN-Stacks unterstützt er individuelle Kurzcodes und Titel sowie Klick-Analysen und bietet damit eine professionelle Möglichkeit, Inhalte zu teilen und zu messen.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: bybitImage,
        alt: "Bybit URL-Shortener-Startseite",
        caption: "Startseite",
      },
    },
  ],
} as const satisfies ProjectContent;
