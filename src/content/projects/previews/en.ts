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
    description: "MERN agritech platform",
  },
  {
    title: "BookBazzar",
    slug: "bookbazzar",
    thumbnail: thumbnailBookBazzar,
    description: "Books e-commerce marketplace",
  },
  {
    title: "Event Management Platform",
    slug: "eventmanager",
    thumbnail: thumbnailEventManager,
    description: "TypeScript event planning tool",
  },
  {
    title: "Bybit",
    slug: "bybit",
    thumbnail: thumbnailBybit,
    description: "URL shortener with analytics",
  },
] as const satisfies ProjectPreview[];
