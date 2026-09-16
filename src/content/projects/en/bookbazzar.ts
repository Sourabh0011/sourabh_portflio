import bookbazzarImage from "../../../assets/images/projects/bookbazzar.png";

import type { ProjectContent } from "../../types";

export default {
  title: "BookBazzar",
  theme: "light",
  tags: ["react", "node", "express", "mongodb"],
  videoBorder: true,
  description:
    "BookBazzar is a peer-to-peer marketplace that lets students buy, sell, and swap academic books seamlessly.<br/><br/>Built on the MERN stack, it features category browsing, condition-graded listings, and complex search and filtering algorithms that improve product discoverability and keep the trading experience fast and engaging.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: bookbazzarImage,
        alt: "BookBazzar marketplace home page",
        caption: "Home",
      },
    },
  ],
} as const satisfies ProjectContent;
