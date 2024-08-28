import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/ksfe-chitty.jpg"

export const HERO_CONTENT = `Ambitious Frontend Software Developer with 2 years of experience in React.js seeking a challenging role to utilize extensive technical knowledge, robust project management abilities, and versatility. Proven ability to thrive in collaborative environments, contribute innovative solutions, and exceed expectations. Eager to apply skills and learn new technologies within a company committed to technological advancement.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Frontend Software Developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience at Innovature Software Labs Private Ltd, I have honed my skills in React.js, Node.js, and MySQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jul 2023 – Jun 2024",
    role: "Software Engineer",
    company: "Innovature Labs",
    location: "Kochi, India",
    description: `Contributed to research and development projects:
    - Integrated data from Snowflake into R and Shiny for interactive web applications for data-driven decision-making.
    - Developed Shiny applications tailored for accessibility by non-technical stakeholders.
    - Utilized R and Shiny for efficient data analysis and presentation, leveraging Snowflake for fast and reliable data processing.
    Contributed to a team researching and developing Power BI:
    - Utilized Power Query and DAX with Snowflake for data manipulation and modeling, ensuring accurate visualizations.
    - Implemented data updates and maintenance procedures for report accuracy and relevancy.`,
    technologies: ["R", "Shiny", "Power BI", "Snowflake"],
  },
  {
    year: "Jul 2022 - Jul 2023",
    role: "Associate Engineer",
    company: "Innovature Labs",
    location: "Kochi, India",
    description: `Developed a comprehensive NFT Marketplace R&D:
    - Utilized ReactJS and Node.js for frontend and backend development.
    - Implemented ReactJS functions for data transfers in blockchain Solidity contract.
    - Wrote and maintained test cases using Jest for system reliability.
    - Collaborated with the back-end team for seamless integration.
    Developed a Leave Management System:
    - Acted as a full-stack developer using ReactJS and Node.js.
    - Designed and implemented RESTful APIs and backend services for applying leaves, changing manager, managing profile, email integration.
    - Conducted testing, debugging, and performance optimizations.`,
    technologies: ["ReactJS", "Node.js", "MongoDB", "Solidity", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "KSFE Chitty Management",
    image: project5,
    description: "Developed a web project to manage chitties and collect details of users those who are interested to joining the chitties and manage the listing easily",
    technologies: ["ReactJS", "Node.js", "MySQL"],
  },
  {
    title: "Interactive Web Applications",
    image: project1,
    description: "Developed web applications using R and Shiny, integrated Snowflake for efficient data analysis, and collaborated with data scientists for accessible interfaces.",
    technologies: ["R", "Shiny", "Snowflake"],
  },
  {
    title: "Power BI Development",
    image: project2,
    description: "Applied Power Query and DAX with Snowflake for data manipulation, ensuring accurate reports through data updates and maintenance procedures.",
    technologies: ["Power Query", "DAX", "Snowflake"],
  },
  {
    title: "NFT Marketplace R&D",
    image: project3,
    description: "NFT Marketplace is a platform in which creators, collectors, and investors can engage in buying, selling, and trading unique digital assets represented as NFTs.",
    technologies: ["ReactJS", "Node.js", "MongoDB", "Solidity"],
  },
  {
    title: "Leave Management System",
    image: project4,
    description: "Developed a web project for a Leave Management System, which is a web application designed to efficiently manage employee leave.",
    technologies: ["ReactJS", "Node.js", "MySQL"],
  },
];

export const CONTACT = {
  address: "Kunnappillil (H) Ellakal P.O Idukki, Kerala, India",
  phoneNo: "+918078132175",
  email: "joyaljose773@gmail.com",
  linkedin: "https://www.linkedin.com/in/joyaljose7774/",
};

export const EDUCATION = [
  {
    degree: "Master of Computer Application",
    institution: "Marian College Kuttikkanam Autonomous",
    year: "2020-2022",
  },
  {
    degree: "Bachelor of Computer Application",
    institution: "NSS College Rajakumary, Idukki",
    year: "2017-2020",
  },
];

export const SKILLS = {
  technical: [
    "Frontend: React, Angular",
    "Backend: Django, NodeJS",
    "Database: MySQL",
    "Version Control: Git",
    "Operating Systems: Linux, Windows",
  ],
  soft: [
    "Communication",
    "Collaboration",
    "Problem-Solving",
    "Adaptability",
  ],
};
