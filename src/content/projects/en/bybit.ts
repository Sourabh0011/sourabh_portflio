import bybitImage from "../../../assets/images/projects/bybits.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Bybit",
  theme: "dark",
  tags: ["react", "node", "express", "mongodb"],
  videoBorder: false,
  description:
    "Bybit is a URL shortener that turns long links into short, memorable, and trackable ones in seconds.<br/><br/>Built on the MERN stack, it supports custom short codes and titles alongside click analytics, giving users a professional way to share and measure their content.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: bybitImage,
        alt: "Bybit URL shortener home page",
        caption: "Home",
      },
    },
  ],
} as const satisfies ProjectContent;
