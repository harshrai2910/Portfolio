export const projects = [
  {
    id: 1,
    name: "ConnectSD",
    slug: "connectsd",
    tagline: "A networking platform built for students.",
    category: "Full Stack",
    status: "Live",

    description:
      "A student networking platform that helps students connect through shared skills, interests, and learning goals.",

    image: "/projects/connectsd.png",

    techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],

    links: {
      github: "https://github.com/harshrai2910/Student_Linkedin_platform",
      live: "https://connectsd.vercel.app/",
    },

    statistics: [
      { value: "25+", label: "REST APIs" },
      { value: "3", label: "Core Models" },
      { value: "10+", label: "Early Users" },
    ],

    overview: {
      problem:
        "Students often lack a dedicated platform to discover and connect with like-minded learners.",

      solution:
        "ConnectSD provides a space where students can build profiles, share knowledge, and connect with others.",
    },

    features: [
      {
        title: "Authentication",
        description:
          "Secure authentication using bcrypt, sessions and protected routes.",
      },
      {
        title: "Student Profiles",
        description:
          "Showcase skills, achievements, interests and personal information.",
      },
      {
        title: "Connection System",
        description: "Send, receive and manage connection requests.",
      },
      {
        title: "Community Posts",
        description:
          "Create posts, upload images and interact with other students.",
      },
      {
        title: "User Discovery",
        description:
          "Discover students through debounced search functionality.",
      },
    ],

    engineering: {
      architecture: [
        "MVC backend architecture",
        "RESTful API design",
        "Three core Mongoose models",
        "Separate frontend and backend deployments",
      ],

      implementations: [
        "MongoDB compound unique indexes",
        "Backend request validation",
        "Cloudinary image management",
        "Debounced search",
        "Pagination and infinite scrolling",
      ],

      challenges: [
        {
          title: "Slow Image Moderation",
          problem:
            "Synchronous AI moderation increased post creation latency to 15–20 seconds.",

          solution:
            "Moved image moderation into asynchronous background processing.",

          result:
            "Reduced post creation response time to approximately 1–2 seconds.",
        },
      ],
    },

    deployment: {
      frontend: "Vercel",
      backend: "Render",
      database: "MongoDB Atlas",
      storage: "Cloudinary",
    },

    learnings: [
      "Full-stack application architecture",
      "Authentication and authorization",
      "Database indexing and relationships",
      "Asynchronous processing",
      "Production deployment and debugging",
    ],

    futureScope: [
      "Real-time notifications using Socket.io",
      "Improved user discovery",
    ],
  },
];
