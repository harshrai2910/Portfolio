export const ProjectComponentData = [
  {
    id: "connectsd",
    path: "/project/connectsd",
    header: {
      title: "ConnectSD",
      subtitle: "Connecting Students. Building Communities.",
      description:
        "A student networking platform designed to bring like-minded students together, encourage knowledge sharing, and create opportunities for collaboration.",
      category: "Full-Stack Development",
      year: "2025–2026",
      status: "Live",
      role: "Full-Stack Developer",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Tailwind CSS",
        "Cloudinary",
      ],
      links: {
        live: "https://connectsd.vercel.app",
        github: "https://github.com/harshrai2910/Student_Linkedin_platform",
      },
      coverImage: "/images/connectsd-cover.png",
    },

    overview: {
      title: "About the Project",
      description:
        "ConnectSD is a student networking platform designed to help students connect with like-minded individuals, discover shared interests, and build meaningful academic and professional relationships. Unlike traditional social networking platforms, ConnectSD focuses on student communities, skill sharing, and collaborative learning.",
    },

    features: [
      {
        title: "Student Profiles",
        description:
          "Create personalized profiles showcasing skills, achievements, interests, and learning goals.",
      },
      {
        title: "Networking",
        description:
          "Send and manage connection requests to build meaningful connections with other students.",
      },
      {
        title: "Posts & Engagement",
        description:
          "Share updates, interact with posts, and engage with the student community.",
      },
      {
        title: "Smart Search",
        description:
          "Discover students through debounced search functionality.",
      },
      {
        title: "Media Uploads",
        description:
          "Upload profile pictures and post images using Cloudinary.",
      },
    ],

    engineeringHighlights: {
      title: "Under the Hood",
      items: [
        {
          title: "RESTful API Architecture",
          description:
            "Designed and implemented 25+ REST APIs following MVC architecture for structured backend development.",
        },
        {
          title: "Authentication & Security",
          description:
            "Implemented password hashing, authentication, protected routes, and backend validation.",
        },
        {
          title: "Database Integrity",
          description:
            "Used MongoDB compound unique indexes to prevent duplicate connection requests.",
        },
        {
          title: "Asynchronous Processing",
          description:
            "Implemented background AI-based content moderation to prevent moderation tasks from blocking post creation.",
        },
        {
          title: "Production Deployment",
          description:
            "Configured separate frontend and backend deployments with production CORS policies and environment variables.",
        },
      ],
    },

    challenges: {
      title: "Challenges & Solutions",
      items: [
        {
          title: "Asynchronous Content Moderation",
          problem:
            "Initially, image moderation was performed synchronously during post creation, significantly increasing API response time.",
          solution:
            "Redesigned the workflow to perform moderation asynchronously in the background after uploading the image and creating the post.",
          impact:
            "Reduced observed post creation response time from approximately 15–20 seconds to 1–2 seconds.",
        },
        {
          title: "Production Deployment",
          problem:
            "Connecting separately deployed frontend and backend applications introduced challenges involving CORS, cookies, environment variables, and API communication.",
          solution:
            "Configured production-specific CORS policies, environment variables, and cross-origin communication.",
          impact:
            "Successfully deployed the frontend and backend as separate production applications.",
        },
      ],
    },

    techStack: {
      title: "Technologies Used",
      categories: [
        {
          name: "Frontend",
          technologies: ["React.js", "Tailwind CSS", "React Router"],
        },
        {
          name: "Backend",
          technologies: ["Node.js", "Express.js", "REST APIs"],
        },
        {
          name: "Database",
          technologies: ["MongoDB", "Mongoose"],
        },
        {
          name: "Tools & Services",
          technologies: [
            "Cloudinary",
            "Git",
            "GitHub",
            "Vercel",
            "Render",
            "Gemini API",
          ],
        },
      ],
    },

    gallery: {
      title: "Project Preview",
      images: [
        {
          src: "/images/connectsd-home.png",
          alt: "ConnectSD home feed",
        },
        {
          src: "/images/connectsd-profile.png",
          alt: "ConnectSD student profile",
        },
        {
          src: "/images/connectsd-network.png",
          alt: "ConnectSD networking interface",
        },
      ],
    },

    links: {
      live: "https://connectsd.vercel.app",
      github: "https://github.com/harshrai2910/Student_Linkedin_platform",
    },

    metadata: {
      status: "Live",
      role: "Full-Stack Developer",
      type: "Personal Project",
      year: "2025–2026",
    },
  },
];
