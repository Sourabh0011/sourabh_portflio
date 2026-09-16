import eventImage from "../../../assets/images/projects/event.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Event Management Platform",
  theme: "light",
  tags: ["typescript", "node", "express", "jwt"],
  videoBorder: true,
  description:
    "A robust event planning platform with automated registration workflows and dynamic attendee scheduling.<br/><br/>Built with TypeScript, Node.js, and Express, it implements high-security authentication middleware using JWT (JSON Web Tokens) and bcrypt password hashing to keep organizer and attendee data safe.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: eventImage,
        alt: "Event management platform landing page",
        caption: "Home",
      },
    },
  ],
} as const satisfies ProjectContent;
