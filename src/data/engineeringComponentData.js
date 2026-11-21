export const engineeringComponentData = [
  {
    path: "/engineering/backend-architecture",
    header: {
      title: "Inside the ConnectSD Backend",
      subtitle:
        "Exploring MVC Architecture, REST APIs, Middleware, and the Structure Behind a Full-Stack Application",
      tags: [
        "Backend Engineering",
        "ConnectSD",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "REST APIs",
        "MVC Architecture",
      ],
    },
    challenge: {
      number: "01",
      title: "The Challenge",
      paragraphs: [
        "As ConnectSD evolved, its backend needed to support multiple features, including user authentication, profile management, connections, posts, and image uploads.",
        "Handling all these operations without a clear structure could make routes difficult to maintain, business logic harder to manage, and database interactions tightly coupled with request handling.",
        "The challenge was to organize the backend into well-defined layers while maintaining a consistent API structure and keeping responsibilities separated.",
      ],
      stat: {
        icon: "Layers",
        value: "25+",
        label: "REST API endpoints powering ConnectSD",
      },
    },
    bottleneck: {
      number: "02",
      title: "Identifying the Structural Challenges",
      intro:
        "I focused on separating request handling, application logic, and database operations to make the backend easier to understand and maintain.",
      flowLabel: "A tightly coupled backend structure",
      flow: [
        {
          icon: "User",
          label: "Client Request",
        },
        {
          icon: "Route",
          label: "API Route",
        },
        {
          icon: "Code",
          label: "Mixed Logic",
          hot: true,
        },
        {
          icon: "Database",
          label: "Database Query",
        },
        {
          icon: "Send",
          label: "API Response",
        },
      ],
      warning:
        "Mixing routing, request processing, business logic, and database operations makes backend code harder to maintain and extend as an application grows.",
      closing:
        "A structured architecture was necessary to give each part of the backend a clear responsibility and create a predictable request-processing flow.",
    },
    solution: {
      number: "03",
      title: "The Engineering Solution",
      intro:
        "I organized the ConnectSD backend around the MVC pattern, using Express routes, controllers, Mongoose models, and middleware to separate different responsibilities.",
      mainFlow: {
        label: "MVC request lifecycle",
        steps: [
          {
            icon: "Globe",
            label: "Client Request",
          },
          {
            icon: "Route",
            label: "Express Routes",
          },
          {
            icon: "ShieldCheck",
            label: "Middleware",
          },
          {
            icon: "Code",
            label: "Controllers",
          },
          {
            icon: "Database",
            label: "Mongoose Models",
          },
        ],
      },
      backgroundFlow: {
        label: "Backend responsibility layers",
        steps: [
          {
            icon: "Route",
            label: "Route Definition",
          },
          {
            icon: "ShieldCheck",
            label: "Request Processing",
          },
          {
            icon: "Workflow",
            label: "Business Logic",
          },
          {
            icon: "Database",
            label: "Database Operations",
          },
          {
            icon: "Send",
            label: "JSON Response",
          },
        ],
      },
      statusTitle: "Core backend components",
      statuses: [
        {
          icon: "Route",
          name: "Routes",
          desc: "Defining API endpoints and directing incoming requests to their respective controllers.",
          tone: "text-amber-500 bg-amber-500/10 border-amber-500/30",
        },
        {
          icon: "Code",
          name: "Controllers",
          desc: "Handling request logic, coordinating operations, and returning appropriate API responses.",
          tone: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30",
        },
        {
          icon: "Database",
          name: "Models",
          desc: "Defining MongoDB data structures and handling database interactions through Mongoose.",
          tone: "text-rose-500 bg-rose-500/10 border-rose-500/30",
        },
      ],
      closing:
        "Separating these responsibilities made the backend easier to navigate, maintain, and extend as new application features were introduced.",
    },
    results: {
      number: "04",
      title: "Backend Architecture",
      before: "Coupled",
      after: "Structured",
      metrics: [
        {
          label: "API organization",
          before: "Mixed request handling",
          after: "Organized routes",
        },
        {
          label: "Application logic",
          before: "Tightly coupled",
          after: "Controller-based",
        },
        {
          label: "Database operations",
          before: "Scattered queries",
          after: "Mongoose models",
        },
        {
          label: "Request processing",
          before: "Direct handling",
          after: "Middleware-based",
        },
      ],
      closing:
        "The structured backend provides a maintainable foundation for ConnectSD, with clearly separated responsibilities across its API, application logic, and database layers.",
    },
    takeaways: {
      number: "05",
      title: "Engineering Takeaways",
      intro:
        "Building and organizing the ConnectSD backend helped me understand:",
      items: [
        {
          icon: "Layers",
          title: "MVC Architecture",
          desc: "Separating routes, controllers, and models to organize backend responsibilities.",
        },
        {
          icon: "Route",
          title: "REST API Design",
          desc: "Structuring endpoints around application resources and handling HTTP requests consistently.",
        },
        {
          icon: "Workflow",
          title: "Middleware",
          desc: "Processing requests through reusable layers for authentication, validation, and other shared operations.",
        },
        {
          icon: "Database",
          title: "Database Integration",
          desc: "Connecting application logic with MongoDB through structured Mongoose models.",
        },
      ],
      quote: {
        label: "My biggest takeaway:",
        text: "A good backend is not just about making APIs work. It is about organizing responsibilities so that the application remains understandable, maintainable, and easier to extend.",
      },
    },
  },
  {
    path: "/engineering/performance-optimization",
    header: {
      title: "The 20-Second Problem",
      subtitle:
        "Optimizing Post Creation Through Asynchronous Image Moderation",
      tags: [
        "Performance Engineering",
        "ConnectSD",
        "Node.js",
        "Express",
        "MongoDB",
        "Gemini API",
      ],
    },
    challenge: {
      number: "01",
      title: "The Challenge",
      paragraphs: [
        "While developing ConnectSD, I integrated AI-powered image moderation using the Gemini API to review uploaded content.",
        "However, the moderation process was happening synchronously during post creation. The backend waited for the AI response before sending a response to the client.",
        "The challenge was to maintain content moderation without making users wait for the entire AI processing operation.",
      ],
      stat: {
        icon: "Timer",
        value: "15–20s",
        label: "Post creation time with synchronous moderation",
      },
    },
    bottleneck: {
      number: "02",
      title: "Identifying the Bottleneck",
      intro:
        "After examining the post creation workflow, I identified synchronous AI moderation as the primary bottleneck.",
      flowLabel: "Original execution flow",
      flow: [
        { icon: "User", label: "User" },
        { icon: "Server", label: "Backend" },
        { icon: "Cloud", label: "Cloudinary" },
        { icon: "Database", label: "MongoDB" },
        { icon: "Sparkles", label: "Gemini AI", hot: true },
        { icon: "Send", label: "API Response" },
      ],
      warning:
        "Even after the post was uploaded and saved, the client kept waiting for the moderation result.",
      closing:
        "The issue wasn't the necessity of moderation itself, but making it part of the critical request-response lifecycle.",
    },
    solution: {
      number: "03",
      title: "The Engineering Solution",
      intro:
        "I moved image moderation into asynchronous background processing. The backend now completes the initial post creation request without waiting for Gemini to finish analyzing the image.",
      mainFlow: {
        label: "Main request",
        steps: [
          { icon: "User", label: "User" },
          { icon: "Server", label: "Backend" },
          { icon: "Cloud", label: "Cloudinary" },
          { icon: "Database", label: "MongoDB" },
          { icon: "Send", label: "API Response" },
        ],
      },
      backgroundFlow: {
        label: "Background processing",
        steps: [
          { icon: "Sparkles", label: "Gemini AI", hot: true },
          { icon: "Activity", label: "Moderation Result" },
          { icon: "RefreshCw", label: "Update Post Status" },
          { icon: "CheckCircle2", label: "Approve or Remove" },
        ],
      },
      statusTitle: "Moderation status tracking",
      statuses: [
        {
          icon: "Hourglass",
          name: "Pending",
          desc: "Image moderation is in progress.",
          tone: "text-amber-500 bg-amber-500/10 border-amber-500/30",
        },
        {
          icon: "CheckCircle2",
          name: "Approved",
          desc: "Content passed moderation.",
          tone: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30",
        },
        {
          icon: "XCircle",
          name: "Rejected",
          desc: "Content failed moderation and is removed.",
          tone: "text-rose-500 bg-rose-500/10 border-rose-500/30",
        },
      ],
      closing:
        "This separated user-facing operations from time-consuming AI processing.",
    },
    results: {
      number: "04",
      title: "Performance Results",
      before: "15–20s",
      after: "1–2s",
      metrics: [
        {
          label: "API response time",
          before: "15–20 seconds",
          after: "1–2 seconds",
        },
        {
          label: "Moderation",
          before: "Synchronous",
          after: "Asynchronous",
        },
        {
          label: "Client waiting",
          before: "Until AI completion",
          after: "No AI wait",
        },
      ],
      closing:
        "The improvement made the application considerably more responsive while retaining its AI-powered moderation functionality.",
    },
    takeaways: {
      number: "05",
      title: "Engineering Takeaways",
      intro: "This implementation helped me understand:",
      items: [
        {
          icon: "Split",
          title: "Asynchronous Processing",
          desc: "Separating independent operations from the main request lifecycle.",
        },
        {
          icon: "Gauge",
          title: "Performance Engineering",
          desc: "Identifying bottlenecks before optimizing application workflows.",
        },
        {
          icon: "Network",
          title: "External API Latency",
          desc: "Understanding how third-party services affect application responsiveness.",
        },
        {
          icon: "Activity",
          title: "State Management",
          desc: "Tracking background operations through database status updates.",
        },
      ],
      quote: {
        label: "My biggest takeaway:",
        text: "A faster application isn't always achieved by making individual operations faster. Sometimes, the real improvement comes from changing when and how those operations execute.",
      },
    },
  },
  {
    path: "/engineering/database-design",
    header: {
      title: "Designing Reliable Relationships",
      subtitle:
        "Building Consistent Data Models Through MongoDB Schemas and Indexing",
      tags: [
        "Database Engineering",
        "ConnectSD",
        "MongoDB",
        "Mongoose",
        "Schema Design",
        "Compound Indexes",
      ],
    },
    challenge: {
      number: "01",
      title: "The Challenge",
      paragraphs: [
        "While developing ConnectSD, I needed to design database relationships for users, posts, and connection requests while maintaining data consistency.",
        "As the application grew, operations such as sending connection requests introduced the possibility of duplicate records and inconsistent relationships.",
        "The challenge was to enforce data integrity at the database level rather than relying entirely on frontend checks or application logic.",
      ],
      stat: {
        icon: "Database",
        value: "3",
        label: "Core Mongoose models for profiles, posts, and connections",
      },
    },
    bottleneck: {
      number: "02",
      title: "Identifying the Data Integrity Issues",
      intro:
        "I focused on preventing duplicate relationships and ensuring that database constraints remained consistent across application operations.",
      flowLabel: "Potentially problematic relationship flow",
      flow: [
        {
          icon: "User",
          label: "Sender",
        },
        {
          icon: "Send",
          label: "Connection Request",
        },
        {
          icon: "Database",
          label: "MongoDB",
          hot: true,
        },
        {
          icon: "Copy",
          label: "Duplicate Record",
        },
      ],
      warning:
        "Without database-level uniqueness constraints, repeated requests could create duplicate sender-receiver relationships.",
      closing:
        "The goal was to make data integrity a database responsibility rather than depending solely on frontend restrictions.",
    },
    solution: {
      number: "03",
      title: "The Engineering Solution",
      intro:
        "I structured the application using separate Mongoose models and introduced compound indexing to enforce uniqueness across connection relationships.",
      mainFlow: {
        label: "Connection relationship structure",
        steps: [
          {
            icon: "User",
            label: "Sender ID",
          },
          {
            icon: "ArrowRight",
            label: "Relationship",
          },
          {
            icon: "User",
            label: "Receiver ID",
          },
          {
            icon: "Database",
            label: "MongoDB",
          },
        ],
      },
      backgroundFlow: {
        label: "Database constraint enforcement",
        steps: [
          {
            icon: "Database",
            label: "Connection Model",
          },
          {
            icon: "Layers",
            label: "Compound Index",
          },
          {
            icon: "ShieldCheck",
            label: "Unique Constraint",
          },
          {
            icon: "CheckCircle2",
            label: "Data Integrity",
          },
        ],
      },
      statusTitle: "Database design decisions",
      statuses: [
        {
          icon: "Boxes",
          name: "Schema Design",
          desc: "Organizing profiles, posts, and connections into separate Mongoose models.",
          tone: "text-amber-500 bg-amber-500/10 border-amber-500/30",
        },
        {
          icon: "Layers",
          name: "Compound Indexing",
          desc: "Using sender and receiver fields together to identify unique connection relationships.",
          tone: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30",
        },
        {
          icon: "ShieldCheck",
          name: "Unique Constraints",
          desc: "Preventing duplicate sender-receiver combinations at the database level.",
          tone: "text-rose-500 bg-rose-500/10 border-rose-500/30",
        },
      ],
      closing:
        "This approach moved an important part of relationship integrity from application-level checks into database-enforced constraints.",
    },
    results: {
      number: "04",
      title: "Database Improvements",
      before: "Application-Level",
      after: "Database-Level",
      metrics: [
        {
          label: "Relationship uniqueness",
          before: "Application checks",
          after: "Compound unique index",
        },
        {
          label: "Data organization",
          before: "Unstructured operations",
          after: "Separate Mongoose models",
        },
        {
          label: "Duplicate prevention",
          before: "Frontend restrictions",
          after: "Database constraints",
        },
      ],
      closing:
        "Database-level constraints provided a stronger foundation for maintaining consistent connection relationships as ConnectSD evolved.",
    },
    takeaways: {
      number: "05",
      title: "Engineering Takeaways",
      intro: "This implementation helped me understand:",
      items: [
        {
          icon: "Boxes",
          title: "Schema Design",
          desc: "Structuring application data into meaningful models and relationships.",
        },
        {
          icon: "Layers",
          title: "Compound Indexes",
          desc: "Using multiple fields together to enforce uniqueness and improve query efficiency.",
        },
        {
          icon: "ShieldCheck",
          title: "Data Integrity",
          desc: "Enforcing database constraints instead of relying entirely on application-level validation.",
        },
        {
          icon: "Database",
          title: "Database Modeling",
          desc: "Understanding how data relationships influence application architecture and consistency.",
        },
      ],
      quote: {
        label: "My biggest takeaway:",
        text: "Reliable applications need reliable data foundations. Database constraints should protect data integrity even when application-level checks are bypassed.",
      },
    },
  },
  {
    path: "/engineering/application-security",
    header: {
      title: "Beyond Frontend Validation",
      subtitle:
        "Building Secure Authentication and Authorization for ConnectSD",
      tags: [
        "Application Security",
        "ConnectSD",
        "Node.js",
        "Express",
        "MongoDB",
        "bcrypt",
        "Sessions & Cookies",
      ],
    },
    challenge: {
      number: "01",
      title: "The Challenge",
      paragraphs: [
        "While developing ConnectSD, I needed to ensure that user authentication and protected operations remained secure beyond the frontend interface.",
        "Frontend validation improves user experience, but it cannot be trusted as a security mechanism because users can bypass client-side checks and directly interact with backend APIs.",
        "The challenge was to establish reliable authentication, authorization, and server-side validation to protect sensitive user operations.",
      ],
      stat: {
        icon: "ShieldAlert",
        value: "Client-side",
        label: "Validation alone cannot protect backend resources",
      },
    },
    bottleneck: {
      number: "02",
      title: "Identifying the Security Gaps",
      intro:
        "I identified that security decisions must be enforced at the backend rather than relying on frontend conditions.",
      flowLabel: "Potentially vulnerable request flow",
      flow: [
        {
          icon: "User",
          label: "User",
        },
        {
          icon: "Monitor",
          label: "Frontend Checks",
        },
        {
          icon: "Send",
          label: "API Request",
        },
        {
          icon: "Server",
          label: "Backend",
          hot: true,
        },
        {
          icon: "Database",
          label: "Sensitive Data",
        },
      ],
      warning:
        "Frontend validation can be bypassed, allowing manipulated or unauthorized requests to reach backend endpoints.",
      closing:
        "The security boundary must exist on the server, where authentication, authorization, and input validation can be independently enforced.",
    },
    solution: {
      number: "03",
      title: "The Engineering Solution",
      intro:
        "I implemented backend-enforced security measures using password hashing, session-based authentication, protected routes, and server-side request validation.",
      mainFlow: {
        label: "Authentication and request lifecycle",
        steps: [
          {
            icon: "User",
            label: "User Login",
          },
          {
            icon: "Lock",
            label: "bcrypt Verification",
          },
          {
            icon: "ShieldCheck",
            label: "Session Creation",
          },
          {
            icon: "Cookie",
            label: "Session Cookie",
          },
          {
            icon: "Server",
            label: "Protected API",
          },
        ],
      },
      backgroundFlow: {
        label: "Backend security enforcement",
        steps: [
          {
            icon: "Cookie",
            label: "Read Session",
          },
          {
            icon: "ShieldCheck",
            label: "Authenticate User",
          },
          {
            icon: "UserCheck",
            label: "Check Permissions",
          },
          {
            icon: "ClipboardCheck",
            label: "Validate Request",
          },
          {
            icon: "Database",
            label: "Execute Operation",
          },
        ],
      },
      statusTitle: "Security layers",
      statuses: [
        {
          icon: "KeyRound",
          name: "Authentication",
          desc: "Verifying user identity through securely hashed passwords and session-based login.",
          tone: "text-amber-500 bg-amber-500/10 border-amber-500/30",
        },
        {
          icon: "ShieldCheck",
          name: "Authorization",
          desc: "Restricting protected operations to authenticated users with the required permissions.",
          tone: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30",
        },
        {
          icon: "ClipboardCheck",
          name: "Validation",
          desc: "Validating and sanitizing incoming requests on the backend.",
          tone: "text-rose-500 bg-rose-500/10 border-rose-500/30",
        },
      ],
      closing:
        "These layers ensure that security enforcement remains on the backend, regardless of what happens on the client side.",
    },
    results: {
      number: "04",
      title: "Security Implementation",
      before: "Frontend",
      after: "Backend",
      metrics: [
        {
          label: "Password handling",
          before: "Plain client input",
          after: "bcrypt hashing",
        },
        {
          label: "Authentication",
          before: "Frontend conditions",
          after: "Session-based",
        },
        {
          label: "Request validation",
          before: "Client-side checks",
          after: "Backend validation",
        },
        {
          label: "Protected operations",
          before: "Frontend restrictions",
          after: "Backend middleware",
        },
      ],
      closing:
        "Moving security enforcement to the backend established a more reliable foundation for protecting user accounts and sensitive application operations.",
    },
    takeaways: {
      number: "05",
      title: "Engineering Takeaways",
      intro: "This implementation helped me understand:",
      items: [
        {
          icon: "KeyRound",
          title: "Authentication",
          desc: "Understanding password hashing, identity verification, and session-based authentication.",
        },
        {
          icon: "ShieldCheck",
          title: "Authorization",
          desc: "Understanding why every protected operation needs server-side permission checks.",
        },
        {
          icon: "Cookie",
          title: "Session Management",
          desc: "Managing authenticated sessions through cookies and backend middleware.",
        },
        {
          icon: "ClipboardCheck",
          title: "Backend Validation",
          desc: "Never trusting client input and independently validating incoming API requests.",
        },
      ],
      quote: {
        label: "My biggest takeaway:",
        text: "Frontend validation improves user experience, but backend validation establishes trust. Security must always be enforced at the server, not assumed from the client.",
      },
    },
  },
];
