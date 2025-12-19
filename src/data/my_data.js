const projects = [
  {
    title: "Code Genie",
    desc: "Full Stack Web platform that generates Code on just user input.",
    tech: [
      "React",
      "Spring Boot",
      "MongoDB",
      "Kafka",
      "Redis",
      "REST",
      "JPA",
      "Google OAuth",
      "JWT Authentication",
      "Microservices",
      "JUnit",
      "Amazon S3/MinIO",
      "AWS- CI/CD",
      "Docker",
      "Kubernetes",
      "Elasticsearch",
      "Kibana",
      "Spring AI",
      "Gen-AI",
      "LLM",
      "RAG",
      "MCP",
    ],
    url: "#",
    repo: "#",
  },
  {
    title: "Airbnb Clone",
    desc: "Production Ready Backend app",
    tech: [
      "Spring Boot",
      "MongoDB",
      "Kafka",
      "Redis",
      "REST",
      "JPA",
      "Google OAuth",
      "JWT Authentication",
      "Microservices",
      "JUnit",
      "MVC",
      "Swagger",
      "Sessions",
      "Logging",
      "Auditing",
    ],
    url: "#",
    repo: "#",
  },
  {
    title: "Twitter Clone",
    desc: "Distributed backend system of Twitter",
    tech: [
      "Spring Boot",
      "MongoDB",
      "Kafka",
      "Redis",
      "REST",
      "JPA",
      "Google OAuth",
      "JWT Authentication",
      "Microservices",
      "JUnit",
      "MVC",
      "Swagger",
      "Sessions",
      "Logging",
      "Auditing",
      "Spring Security",
      "Notifications",
      "Docker",
      "Kubernetes",
    ],
    url: "#",
    repo: "#",
  },
  {
    title: "B.Tech Library",
    desc: "Library App and Website for B.Tech Students",
    tech: [
      "Spring Boot",
      "MongoDB",
      "REST",
      "JPA",
      "Google OAuth",
      "JWT Authentication",
      "JUnit",
      "MVC",
      "Swagger",
      "Sessions",
      "Spring Security",
    ],
    url: "#",
    repo: "#",
  },
];

const professionalExperiences = [
  {
    year: "2023 – 2024",
    title: "Associate Software Engineer",
    company: "Lowe's India",
    location: "Banglore",
    highlights: [
      "Worked on Both Frontend and Backend using React and Spring Boot for Projects of IT Supply Chain Planning and Replenishment of Products at Distribution Centres based on various scenarios",
    ],
    projects: [
      {
        name: "Demand Management",
        description:
          "Execution of Demand Order Plans by creating APIs for various functionalities.",
        impact: [
          "Used Redis Cache to prevent frequent calls on database and also improved the performance of existing systems by 100% through reducing the number of calls on Redis by Query Optimization.",
          "Monitored the Performance of API end points by developing Grafana Dashboards using metrics and created alerts and messages using Vanguard",
        ],
        tech: ["Java", "Spring Boot", "Redis", "SQL"],
      },
      {
        name: "SDC Automation",
        description: "Automation of Supply Demand Chain Processes",
        impact: [
          "Implemented Uploading, Downloading and Processing of Huge CSV Files using Kafka Producers and Consumers",
          "Updation of data into multiple systems via scheduled batch jobs.",
        ],
        tech: ["Java", "Spring Boot", "Redis", "SQL"],
      },
      {
        name: "DC Stocking",
        description:
          "Stocking and Unstocking of products at Distribution Centres based on various scenarios.   ",
        impact: [
          "Handled loading of huge data on to the website using Ag-Grid Lazy loading tables in front end  and created API End point for page wise loading in the backend for the same.",
          "Built Microservices to handle various unique functionalities and exposed them across the company for cross-team leveraging as it can reduce redundant development of services.",
          "Migrated from Legacy DB2 Tables to Oracle and MongoDB.",
        ],
        tech: ["React.js", "Java", "Spring Boot", "Kafka", "Microservices"],
      },
    ],
    tech: ["Java", "Spring Boot", "Kafka", "Redis", "Microservices"],
  },
  {
    year: "2021 – 2022",
    title: "Systems Engineer",
    company: "Infosys",
    location: "Hyderabad",
    projects: [
      {
        name: "Daimler Salesforce Data Integration",
        description:
          "Majorly responsible for Japan Market Issues, Taskflows and Mappings.",
        impact: [
          "Solved the Data Integration Issues created by Informatica Cloud by extracting the data from Salesforce and Oracle Tables.",
          "Fixed 2 Major Bugs in the Japan Market Informatica Task flows and also Solved Minor Issues in other market Mappings",
        ],
        tech: ["Java", "Spring Boot", "Kafka", "Redis"],
      },
    ],
    highlights: [
      "Built scalable React applications with clean component architecture",
      "Collaborated with cross-functional teams using Agile methodologies",
      "Improved deployment reliability through CI/CD pipelines",
    ],
    tech: ["React", "JavaScript", "Git", "Jenkins"],
  },
];

const personalExperiences = [
  {
    year: "2019 – 2021",
    title: "Student Head Representative",
    company: "Anurag University",
    location: "Hyderabad",
    projects: [
      {
        name: "KHEL AGI",
        description: "One App for all Sports Activities in College Sports Fest",
        impact: [
          "Online Registration of 500+ students",
          "Managed Event Schedules",
          "Live Score Updates",
        ],
        tech: ["Java", "Android", "OOPS", "Firebase", "XML"],
      },
      {
        name: "Android Application Development",
        description:
          "Conducted and Trained Students on Android Application Development.",
        impact: ["Trained 100+ students on Android App Development"],
        tech: ["Java", "Android", "OOPS", "Firebase", "XML"],
      },
    ],
  },
  {
    year: "2019 – 2020",
    title: "C++, Java Trainer",
    company: "Bhargav Academy",
    location: "Hyderabad",
    projects: [
      {
        name: "Tutoring Students",
        description: "Tutored Students on C++, Java and OOPS.",
        impact: [],
        tech: ["Java", "C++", "OOPS"],
      },
    ],
  },
  {
    year: "2018 – 2021",
    title: "Co Founder and Application Developer",
    company: "Unstuck Technologies",
    location: "Hyderabad",
    projects: [
      {
        name: "B.Tech Library App",
        description: "Notes Application for B.Tech Students.",
        impact: [
          "Downloads achieved of 1 Lakh in just 8 months",
          "Improved processing reliability using idempotent consumers",
        ],
        tech: ["Android", "Java", "Firebase", "Git", "XML"],
      },
    ],
    highlights: [
      "Built scalable Android application with clean component architecture",
    ],
  },
];

const codingProfiles = [
  {
    platform: "LeetCode",
    username: "dachepallinikhil",
    link: "https://leetcode.com/u/dachepallinikhil/",
    stats: "200+ problems solved",
    accent: "yellow",
  },
  {
    platform: "GeeksforGeeks",
    username: "dachepallinikhil",
    link: "https://www.geeksforgeeks.org/profile/dachepallinikhil?tab=activity",
    stats: "150+ problems solved",
    accent: "green",
  },
];

const skills = [
  [
    "Java",
    "Spring Boot",
    "Spring AI",
    "Kafka",
    "Redis",
    "MongoDB",
    "SQL",
    "REST",
    "Microservices",
    "JPA",
    "Jnit",
    "Javascript",
    "React.js",
    "HLD",
    "LLD",
  ],
  [
    "LLM",
    "RAG",
    "MCP",
    "Agentic AI",
    "LangChain",
    "LangGraph",
    "HuggingFace",
    "Python",
    "AI & ML Ops",
    "Vibe coding",
  ],
  [
    "Git",
    "Github",
    "Docker",
    "Kubernetes",
    "Prometheus",
    "Grafana",
    "Jenkins",
    "Argo CD",
    "Kibana",
    "Elasticsearch",
    "Jira",
  ],
];

export {
  projects,
  professionalExperiences,
  personalExperiences,
  codingProfiles,
  skills,
};
