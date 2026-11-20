import img_01 from "../assets/img_01.png";
import img_02 from "../assets/img_02.png";
import img_03 from "../assets/img_03.webp";
import img_04 from "../assets/img_04.webp";

export const engineering = [
  {
    id: 1,
    category: "Backend Architecture",
    title: "Inside the ConnectSD Backend",
    description:
      "Exploring MVC architecture, REST APIs, middleware, and the structure behind a full-stack application.",
    image: img_01,
    link: "/engineering/backend-architecture",
  },
  {
    id: 2,
    category: "Performance Engineering",
    title: "The 20-Second Problem",
    description:
      "How asynchronous image moderation reduced post creation response time from 15–20 seconds to approximately 1–2 seconds.",
    image: img_02,
    link: "/engineering/performance-optimization",
  },
  {
    id: 3,
    category: "Database Engineering",
    title: "Designing Reliable Relationships",
    description:
      "Exploring MongoDB schemas, compound indexes, unique constraints, and data integrity.",
    image: img_03,
    link: "/engineering/database-design",
  },
  {
    id: 4,
    category: "Application Security",
    title: "Beyond Frontend Validation",
    description:
      "Understanding authentication, authorization, session management, and backend request validation.",
    image: img_04,
    link: "/engineering/application-security",
  },
];
