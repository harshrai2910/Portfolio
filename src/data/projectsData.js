import project_01 from "../assets/project_01.webp";
import project_02 from "../assets/project_02.webp";
import project_03 from "../assets/project_03.webp";

export const projects = [
  {
    id: "01",
    name: "ConnectSD",
    slug: "connectsd",
    tagline: "A networking platform built for students.",
    category: "Full Stack web-application",
    status: "Live",
    path: "/project/connectsd",

    description:
      "A student networking platform that helps students connect through shared skills, interests, and learning goals.",

    image: project_01,

    techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],

    links: {
      github: "https://github.com/harshrai2910/Networking_System",
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
  {
    id: "02",
    name: "Airbnb Clone",
    slug: "airbnb-clone",
    tagline: "A property rental platform with guest and host experiences.",
    category: "Full Stack",
    status: "Live",
    path: "/project/airbnb-clone",

    description:
      "A full-stack property rental application where guests can explore property listings, view details and save favourites, while hosts can manage their own property listings.",

    image: project_02,

    techStack: [
      "Node.js",
      "Express.js",
      "EJS",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
    ],

    links: {
      github: "#",
      live: "#",
    },

    statistics: [
      { value: "MVC", label: "Backend Architecture" },
      { value: "CRUD", label: "Listing Management" },
      { value: "2", label: "User Roles" },
    ],

    overview: {
      problem:
        "Property rental platforms require different experiences for guests browsing properties and hosts managing their listings.",

      solution:
        "Built a property rental platform with separate guest and host experiences, allowing users to explore listings, save favourites and manage properties.",
    },

    features: [
      {
        title: "User Authentication",
        description:
          "Secure signup and login functionality using bcrypt password hashing and session-based authentication.",
      },
      {
        title: "Role-Based Access",
        description:
          "Separate guest and host experiences with role-based authorization for different application functionalities.",
      },
      {
        title: "Property Listings",
        description:
          "Browse available properties and explore individual listings with detailed information.",
      },
      {
        title: "Host Dashboard",
        description:
          "Allow hosts to create, edit and delete their own property listings.",
      },
      {
        title: "Property Favourites",
        description:
          "Allow guests to save and manage their favourite property listings.",
      },
      {
        title: "Image Uploads",
        description:
          "Handle property image uploads using Multer and Cloudinary integration.",
      },
      {
        title: "House Rules",
        description:
          "Provide downloadable house-rule documents for property listings.",
      },
    ],

    engineering: {
      architecture: [
        "MVC backend architecture",
        "Server-side rendering using EJS",
        "RESTful routing and controller separation",
        "MongoDB database with Mongoose",
        "Session-based authentication",
        "Role-based authorization",
      ],

      implementations: [
        "Password hashing using bcrypt",
        "Session management using express-session",
        "MongoDB-backed session storage",
        "Multer-based file upload handling",
        "Cloudinary image storage and management",
        "Host-specific listing authorization",
        "Property CRUD operations",
        "Guest-specific favourite management",
      ],

      challenges: [
        {
          title: "Role-Based Access Control",
          problem:
            "Different users required different permissions, particularly for property listing management.",

          solution:
            "Implemented role-based authorization to distinguish guest and host capabilities and restrict protected operations.",

          result:
            "Established separate guest and host experiences with controlled access to application functionality.",
        },
        {
          title: "Image Upload Management",
          problem:
            "Managing property images required handling multipart form data and integrating external image storage.",

          solution:
            "Integrated Multer for file handling and Cloudinary for image storage and management.",

          result:
            "Enabled property image uploads and centralized image storage.",
        },
      ],
    },

    deployment: {
      frontend: "EJS (Server-Side Rendering)",
      backend: "Render",
      database: "MongoDB Atlas",
      storage: "Cloudinary",
    },

    learnings: [
      "MVC architecture and server-side rendering",
      "Role-based authentication and authorization",
      "Session management using Express",
      "MongoDB relationships and Mongoose",
      "File uploads using Multer",
      "Cloudinary integration",
      "CRUD operations and RESTful routing",
      "Production deployment and debugging",
    ],

    futureScope: [
      "Property search and filtering",
      "Guest review and rating system",
      "Property booking functionality",
    ],
  },
  {
    id: "03",
    name: "Link Saver",
    slug: "link-saver",
    tagline: "A personal space to save and manage useful links.",
    category: "Full Stack",
    status: "Built",
    path: "/project/link-saver",

    description:
      "A full-stack link management application that allows users to securely save, organize, edit and manage their personal collection of useful links.",

    image: project_03,

    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
    ],

    links: {
      github: "https://lnkd.in/gz_fhEXY",
      live: "#",
    },

    statistics: [
      { value: "CRUD", label: "Link Management" },
      { value: "MVC", label: "Backend Architecture" },
      { value: "Session", label: "Authentication" },
    ],

    overview: {
      problem:
        "Users often come across useful links but lack a simple and organized way to save and manage them in one place.",

      solution:
        "Link Saver provides a personalized platform where users can securely store, access, update and delete their saved links.",
    },

    features: [
      {
        title: "User Authentication",
        description:
          "Signup and login functionality with bcrypt password hashing and session-based authentication.",
      },
      {
        title: "Link Management",
        description:
          "Add, edit and delete saved links through complete CRUD operations.",
      },
      {
        title: "User-Specific Data",
        description:
          "Ensure users can access and manage only their own saved links through backend user-based filtering.",
      },
      {
        title: "Persistent Login",
        description:
          "Maintain authenticated sessions using cookies and server-side session management.",
      },
      {
        title: "Protected Routes",
        description:
          "Restrict access to protected backend endpoints using authentication middleware.",
      },
      {
        title: "Personalized Dashboard",
        description:
          "Display user-specific information with dynamic time-based greetings and a personalized navbar.",
      },
    ],

    engineering: {
      architecture: [
        "MVC backend architecture",
        "RESTful API design",
        "React frontend communicating with Express backend",
        "MongoDB database with Mongoose",
        "Session-based authentication architecture",
      ],

      implementations: [
        "Password hashing using bcrypt",
        "Session and cookie management",
        "Protected backend routes",
        "User-specific database filtering",
        "CRUD operations for link management",
        "Frontend-backend API integration",
        "CORS configuration",
      ],

      challenges: [
        {
          title: "Session and Cookie Management",
          problem:
            "Maintaining authenticated sessions between the React frontend and Express backend required proper session and cookie configuration.",

          solution:
            "Implemented session-based authentication with cookie handling and appropriate frontend-backend communication.",

          result:
            "Enabled persistent login sessions and protected access to authenticated resources.",
        },
        {
          title: "User-Specific Data Access",
          problem:
            "Ensuring users could only access and manage their own saved links.",

          solution:
            "Implemented backend filtering using the authenticated user's ID.",

          result:
            "Separated user data and restricted link management to the respective authenticated users.",
        },
      ],
    },

    deployment: {
      frontend: "React.js",
      backend: "Node.js",
      database: "MongoDB",
      storage: null,
    },

    learnings: [
      "Frontend and backend API communication",
      "Session-based authentication",
      "Cookies and persistent login management",
      "MVC backend architecture",
      "Secure user-specific data handling",
      "RESTful CRUD operations",
      "CORS configuration and debugging",
    ],

    futureScope: [
      "Context API for improved frontend state management",
      "Session-based authentication",
      "Application deployment",
    ],
  },
];
