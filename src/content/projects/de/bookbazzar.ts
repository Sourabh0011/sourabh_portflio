import bookbazzarImage from "../../../assets/images/projects/bookbazzar.png";

import type { ProjectContent } from "../../types";

export default {
  title: "BookBazzar",
  theme: "light",
  tags: ["react", "node", "express", "mongodb"],
  videoBorder: true,
  description:
    "BookBazzar ist ein Peer-to-Peer-Marktplatz, auf dem Studierende akademische Bücher nahtlos kaufen, verkaufen und tauschen können.<br/><br/>Auf Basis des MERN-Stacks bietet die Plattform Kategorie-Browsing, zustandsbewertete Angebote sowie komplexe Such- und Filteralgorithmen, die die Auffindbarkeit verbessern und das Handelserlebnis schnell und ansprechend halten.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: bookbazzarImage,
        alt: "BookBazzar-Marktplatz-Startseite",
        caption: "Startseite",
      },
    },
  ],
} as const satisfies ProjectContent;
