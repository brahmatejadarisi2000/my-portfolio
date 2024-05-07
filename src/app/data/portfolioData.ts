import { PortfolioData } from "./portfolioData.interface";

// import bms3 from "../../../images/bms-3.png";
// import bms2 from "../../../images/bms-2.png";
// import bms1 from "../../../images/bms-1.png";

// import foodiesnest from "../../../images/FoodiesNest.png";
// import foodiesnest2 from "../../../images/FoodiesNest_2.png";
// import foodiesnest3 from "../../../images/FoodiesNest_3.png";
// import foodiesnest4 from "../../../images/FoodiesNest_4.png";

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Guru Brahma Teja Darisi",
    email: "brahmateja.darisi@gmail.com",
    phone: "8919342620",
    city: "Guntur",
    state: "Ap",
    country: "India",
    linkedin: "linkedin.com/in/teja-darisi-68974317a",
    github: "github.com/brahmatejadarisi2000",
    resume:
      "https://drive.google.com/file/d/1Gz7cOngiDxG1gyQiTU5qXVXbqAE51tcB/view?usp=sharing",
  },
  workExperience: [
    {
      title: "Application Development Analyst",
      company: "Accenture",
      dates: "06/2021 - Present",
      location: "Hyderabad, India",
      description: [
        "Led the development and performance optimization of web applications utilizing React js and TypeScript.",
        "Demonstrated proficiency in state management libraries such as Redux Toolkit and Redux Saga ensuring efficient data flow and application stability.",
        "Implemented custom React hooks for reusable logic and media queries for seamless user experiences across devices, enhancing code maintainability and development efficiency.",
        "Employed a config-driven approach to seamlessly incorporate external settings into the UI, promoting scalability and performance optimization.",
        "Developed reusable UI components such as dynamic tables, optimized storage, intuitive menus, tooltips, advanced filters, and modals to enhance usability and functionality according to user story requirements.",
        "Actively participated in the deployment of frontend applications to cloud environments, optimizing scalability and resource utilization.",
        "Actively engaged in code reviews to uphold code quality standards and foster teamwork.",
      ],
      technologyStack: [
        "React",
        "Redux",
        "HTML5",
        "TypeScript",
        "JavaScript",
        "SpringBoot",
        "JIRA",
        "Jest",
        "Styled-Components",
        "Git",
        "Java",
        "SQL",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Accenture",
      dates: "04/2021 - 06/2021",
      location: "Hyderabad, India",
      description: [
        "Developed user interface components using React.js and React Bootstrap, ensuring adherence to design standards and responsiveness",
        "Contributed to backend development with Spring Boot, focusing on API implementation and database integration for seamless functionality.",
        "Developed optimized REST APIs to enhance response time and streamline code efficiency",
      ],
      technologyStack: [
        "React.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Spring Boot",
        "Java",
        "SQL",
        "Git",
      ],
    },
  ],
  education: {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    university: "KL University",
    dates: "06/2017 - 05/2021",
    location: "Vijayawada, India",
  },
  skills: [
    "JavaScript",
    "React",
    "Redux",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Styled-Components",
    "Git",
    "Java",
    "Spring Boot",
    "SQL",
    "Python",
    "JirA",
    "AWS",
    "Heroku",
    "NextJS",
  ],
  personalProjects: [
    {
      name: "BMS (05/2022 - 10/2022)",
      description:
        "This application acts as an accounting software which will help shop keepers to manage information related to customers regarding their sales and debts using React and SpringBoot",
      technologyStack: [
        "React",
        "Spring Boot",
        "Java",
        "Redux",
        "React Router",
        "HTML5",
        "TypeScript",
        "JavaScript",
        "CSS3",
        "Git",
        "GitHub Actions",
        "Heroku",
        "AWS",
      ],

      images: [
        "https://drive.google.com/uc?export=view&id=1B6fZX59-WBidJafn4O0tMPKhIvKdbPqN",
        "https://drive.google.com/uc?export=view&id=1ul7ZT_UGMKB6qQInXxvG-PNiT6Kwqud7",
        "https://drive.google.com/uc?export=view&id=1D-SisOmcOyee4I88vUpSr4UrWpzAZfh7",
      ],
    },
    {
      images: [
        "https://drive.google.com/uc?export=view&id=1GUOlZKyv-VblnFKpk-NQRV5cvRZ0tT29",
        "https://drive.google.com/uc?export=view&id=1A0qECKKFccuZ87wa4KgywUTJwa8qReWu",
        "https://drive.google.com/uc?export=view&id=1nOmotrWpXs1UljD5XMGxUmghQPIGVPgn",
        "https://drive.google.com/uc?export=view&id=1nOmotrWpXs1UljD5XMGxUmghQPIGVPgn",
      ],
      name: "FoodiesNest (09/2023 - 12/2023)",
      description:
        "Swiggy-inspired app developed using React and Styled Components, combined with a visually appealing UI and efficient styling.",
      technologyStack: [
        "React",
        "Redux",
        "React Router",
        "HTML5",
        "TypeScript",
        "JavaScript",
        "CSS3",
        "Git",
        "GitHub Actions",
      ],
    },
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      dates: "10/2023 - 12/2023",
      issuer: "Amazon Web Services (AWS)",
      description:
        "Understanding of IT services and their uses in the AWS Cloud.",
    },
  ],
};
