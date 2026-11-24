import system_01 from "../assets/system_01.png";
import system_02 from "../assets/system_02.png";
import system_03 from "../assets/system_03.png";
import system_04 from "../assets/system_04.png";
import system_05 from "../assets/system_05.png";
import system_06 from "../assets/system_06.png";

export const systems = [
  {
    id: 1,
    number: "01",
    title: "Exploring Linux & System Fundamentals",
    description:
      "Exploring Linux through hands-on practice with Ubuntu and command-line tools.",
    name: "Linux",
    tag: "Operating Environment",
    image: system_01,
    path: "/systems/linux",
    icon: "FaLinux",
    environment: {
      os: "Ubuntu",
      platform: "Virtual Machine",
      shell: "Bash",
    },
    experience: [
      "Ubuntu Virtual Machine",
      "User & Group Management",
      "File Permissions (chmod, chown)",
      "Filesystem Navigation",
      "Package Management",
      "Basic Shell Commands",
    ],
    exploration: {
      title: "Hands-on Exploration",
      description:
        "A collection of terminal screenshots, commands I've practiced, and practical tasks I've completed.",
      images: [],
    },
  },

  {
    id: 2,
    number: "02",
    title: "Understanding Git & Version Control",
    description:
      "Exploring Git through hands-on practice with version control and collaboration workflows.",
    name: "Git",
    tag: "Version Control",
    image: system_02,
    path: "/systems/git",
    icon: "DiGithubBadge",
    environment: {
      platform: "Git CLI",
      repository: "GitHub",
    },
    experience: [
      "Repository Management",
      "Branching & Merging",
      "Merge Conflict Resolution",
      "Remote Repositories",
      "Git Workflows",
      "Commit History",
    ],
    exploration: {
      title: "Hands-on Exploration",
      description:
        "A collection of Git workflows, commands, and version control practices I've explored.",
      images: [],
    },
  },
  {
    id: 3,
    number: "03",
    title: "Understanding Docker & Containers",
    description:
      "Exploring containerization through hands-on practice with Docker and isolated environments.",
    name: "Docker",
    tag: "Containerization",
    image: system_03,
    path: "/systems/docker",
    icon: "FaDocker",
    environment: {
      platform: "Docker",
      focus: "Containerization",
    },
    experience: [
      "Docker Images",
      "Container Management",
      "Dockerfiles",
      "Docker Compose",
      "Container Networking",
      "Persistent Volumes",
    ],
    exploration: {
      title: "Hands-on Exploration",
      description:
        "A collection of containerization experiments and Docker implementations.",
      images: [],
    },
  },
  {
    id: 4,
    number: "04",
    title: "Understanding Computer Networks",
    description:
      "Exploring network communication, protocols, and how applications interact across networks.",
    name: "Networking",
    tag: "Communication",
    image: system_04,
    path: "/systems/networking",
    icon: "IoGitNetworkOutline",
    environment: {
      focus: "Network Fundamentals",
      protocols: "TCP/IP, HTTP, DNS",
    },
    experience: [
      "HTTP & HTTPS",
      "TCP & UDP",
      "DNS Resolution",
      "IP Addresses & Ports",
      "Client-Server Communication",
      "Network Protocols",
    ],
    exploration: {
      title: "Hands-on Exploration",
      description:
        "A collection of networking concepts, practical observations, and communication experiments.",
      images: [],
    },
  },
  {
    id: 5,
    number: "05",
    title: "Exploring Operating System Concepts",
    description:
      "Exploring core operating system concepts and how computing resources are managed.",
    name: "Operating Systems",
    tag: "System Fundamentals",
    image: system_05,
    path: "/systems/operating-systems",
    icon: "IoTerminalOutline",
    environment: {
      focus: "Operating System Fundamentals",
    },
    experience: [
      "Process Management",
      "Threads & Multithreading",
      "CPU Scheduling",
      "Memory Management",
      "Virtual Memory",
      "Deadlocks",
    ],
    exploration: {
      title: "Conceptual Exploration",
      description:
        "A collection of operating system concepts, implementations, and practical observations.",
      images: [],
    },
  },
  {
    id: 6,
    number: "06",
    title: "Understanding System Design",
    description:
      "Exploring application architecture, scalability, and distributed system concepts.",
    name: "System Design",
    tag: "Architecture",
    image: system_06,
    path: "/systems/system-design",
    icon: "GoWorkflow",
    environment: {
      focus: "Software Architecture",
    },
    experience: [
      "Client-Server Architecture",
      "Monolithic Architecture",
      "Caching",
      "Load Balancing",
      "Database Replication",
      "Horizontal & Vertical Scaling",
    ],
    exploration: {
      title: "Architecture Exploration",
      description:
        "A collection of architecture diagrams, design decisions, and system design explorations.",
      images: [],
    },
  },
];
