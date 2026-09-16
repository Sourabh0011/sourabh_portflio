import thumbnailKrishify from "../../../assets/images/projects/kirshify.png";
import thumbnailBookBazzar from "../../../assets/images/projects/bookbazzar.png";
import thumbnailEventManager from "../../../assets/images/projects/event.png";
import thumbnailBybit from "../../../assets/images/projects/bybits.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Krishify",
    slug: "krishify",
    thumbnail: thumbnailKrishify,
    description: "MERN-Agritech-Plattform",
  },
  {
    title: "BookBazzar",
    slug: "bookbazzar",
    thumbnail: thumbnailBookBazzar,
    description: "Bücher-E-Commerce-Marktplatz",
  },
  {
    title: "Event Management Platform",
    slug: "eventmanager",
    thumbnail: thumbnailEventManager,
    description: "TypeScript-Event-Planungstool",
  },
  {
    title: "Bybit",
    slug: "bybit",
    thumbnail: thumbnailBybit,
    description: "URL-Shortener mit Analysen",
  },
] as const satisfies ProjectPreview[];
