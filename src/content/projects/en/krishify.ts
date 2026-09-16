import krishifyImage from "../../../assets/images/projects/kirshify.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Krishify",
  theme: "dark",
  tags: ["react", "node", "express", "mongodb", "tailwind"],
  videoBorder: false,
  description:
    "Krishify is an Agritech platform that gives Indian farmers a data-centric ecosystem for precision agriculture and smarter resource management.<br/><br/>Built on the MERN stack, it pairs a responsive React.js interface — with live weather insights and bilingual (English / Hindi) support — with a MongoDB backend engineered to handle large-scale farming datasets efficiently.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: krishifyImage,
        alt: "Krishify dashboard with live weather insights",
        caption: "Home",
      },
    },
  ],
} as const satisfies ProjectContent;
