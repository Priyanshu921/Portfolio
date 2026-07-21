/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import splashAnimation from "./assets/lottie/splashAnimation.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Priyanshu Patidar",
  title: "Hi, I'm Priyanshu",
  subTitle: "A passionate Full Stack Software Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python and some other cool libraries and frameworks. 🚀",
  resumeLink:
    "https://drive.google.com/file/d/1x4ODCPBHfmZPPR8zdP7hzKDNhKY3q7na/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Priyanshu921",
  linkedin: "https://www.linkedin.com/in/priyanshu-patidar-740692170/",
  gmail: "patidarpriyanshu921@gmail.com",
  gitlab: "",
  facebook: "https://www.facebook.com/priyanshu2019",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Full Stack Software Engineer | Specializing in Enterprise Integrations & Scalable Backends",
  skills: [
    "Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    "Progressive Web Applications ( PWA ) in normal and SPA Stacks",
    "Integration of third party services such as Firebase/ AWS / Digital Ocean",
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // Backend & Frameworks
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "NestJS", fontAwesomeClassname: "fas fa-server" },
    { skillName: "Express.js", fontAwesomeClassname: "fab fa-node-js" },
    { skillName: "TypeScript", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Django", fontAwesomeClassname: "fas fa-code" },
    { skillName: "FastAPI", fontAwesomeClassname: "fas fa-bolt" },
    { skillName: "AWS Chalice", fontAwesomeClassname: "fab fa-aws" },
    
    // Frontend & State Management
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Next.js", fontAwesomeClassname: "fas fa-pager" },
    { skillName: "Redux", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "Tailwind CSS", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "SASS", fontAwesomeClassname: "fab fa-sass" },
    
    // Databases & ORMs
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Sequelize", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "Mongoose", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "TypeORM", fontAwesomeClassname: "fas fa-database" },
    
    // Libraries, Testing & Cloud
    { skillName: "Socket.io", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Jest", fontAwesomeClassname: "fas fa-vial" },
    { skillName: "Postman", fontAwesomeClassname: "fas fa-space-shuttle" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" }
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
      logo: new URL("./assets/images/svvvLogo.png", import.meta.url).href,
      subHeader: "Bachelor of Technology in Computer Science and engineering",
      duration: "July 2017 - August 2021",
      desc: "Took courses about Software Engineering, Web Security, Operating Systems, DBMS, Data Structure, etc.",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Trainee Programmer",
      company: "Yash Technologies",
      companylogo: new URL("./assets/images/yash-logo-new.png", import.meta.url).href,
      date: "August 2021 – April 2023",
      desc: "I Worked as a MERN Stack developer at Yash Technologies Pvt. Ltd from August 2021 to April 2023. It is a service-based MNC located in Indore, Madhya Pradesh",
      descBullets: [
        "Internal Efficiency: Developed and published a reusable UI component library to NPM, reducing internal development time by 45%.",
        "Interview Screening Platform: Architected a full-stack product to automate technical hiring, involving Express CRUD APIs and Mongoose ODM integration.",
        "Legacy Migration: Led the migration of a major logistics platform from Silverlight to React/Redux, implementing robust testing with Jest.",
        "Maintenance Estimator: Developed a cost-estimation tool for a leading engineering firm using React and Spring Boot to streamline client budgeting.",
        "Awards: Recognized as a 'Star Achiever' (Q4 2022) and received the vRise Award for outstanding performance.",
      ],
    },
    {
      role: "Fullstack Developer",
      company: "AgileEngine",
      companylogo: new URL("./assets/images/agileengine-logo.png", import.meta.url).href,
      date: "May 2024 – Present",
      desc: "Driving the architecture and development of enterprise ERP, financial platforms, and complex data synchronization pipelines using React, Next.js, NestJS, and TypeScript.",
      descBullets: [
        "Financial & Core Modules: Engineered complex backend logic for automated margin calculations and overhauled invoicing workflows to ensure precise financial operations.",
        "Enterprise Integrations: Architected robust data synchronization pipelines across enterprise CRM and HRMS platforms to maintain cross-system data consistency.",
        "System Resilience: Optimized third-party API consumption by engineering batch operations and custom cooling periods, successfully bypassing strict rate-limiting thresholds.",
        "Production Safeguards: Implemented robust environment-based feature flags and architectural guardrails to prevent accidental data mutations during non-prod lifecycles.",
        "Operational Automation: Built a self-service SOW modification tool and automated tracking alerts, significantly reducing manual bottlenecks and improving system visibility.",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: new URL("./assets/images/saayaHealthLogo.webp", import.meta.url).href,
      projectName: "",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Achievements And Certifications 🏆 ",
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "What is Data Science",
      subtitle: "Data Science orientation course by IBM on coursera",
      image: new URL("./assets/images/What is Data Science.jpg", import.meta.url).href,
      imageAlt: "What is Data Science Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/TKHWRE4RZDY3",
        },
      ],
    },
    {
      title: "Introduction to Cloud Computing",
      subtitle: "Cloud Computing course by IBM on coursera",
      image: new URL("./assets/images/Introduction to cloud computing certificate_page-0001.jpg", import.meta.url).href,
      imageAlt: "Introduction to Cloud Computing Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/16ab2af756976f5c5c45eef257138f9f",
        },
      ],
    },
    {
      title: "Introduction to Web Development",
      subtitle: "Web Development course by IBM on coursera",
      image: new URL("./assets/images/Introduction to Web Development with HTML, CSS certificate_page-0001.jpg", import.meta.url).href,
      imageAlt:
        "Introduction to Web Development with HTML,CSS, and JavaScript Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/861146b80f1b69f0c6e555fb50280103",
        },
      ],
    },
    {
      title: "JavaScript Basic",
      subtitle: "JavaScript basic certificate from hackerrank.",
      image: new URL("./assets/images/javascript_basic certificate_page-0001.jpg", import.meta.url).href,
      imageAlt: "JavaScript basic certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.hackerrank.com/certificates/883d4bd9cdda",
        },
      ],
    },
    {
      title: "JavaScript Intermediate",
      subtitle: "JavaScript Intermediate certificate from hackerrank.",
      image: new URL("./assets/images/javascript_intermediate certificate_page-0001.jpg", import.meta.url).href,
      imageAlt: "JavaScript Intermediate certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.hackerrank.com/certificates/5952036eda2e",
        },
      ],
    },
    {
      title: "React Basic",
      subtitle: "React Basic certificate from hackerrank.",
      image: new URL("./assets/images/react_basic certificate_page-0001.jpg", import.meta.url).href,
      imageAlt: "React Basci certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.hackerrank.com/certificates/5af247777f44",
        },
      ],
    },
    {
      title: "React Certificate",
      subtitle:
        "React course by IBM on coursera.",
      image: new URL("./assets/images/Developing Front-End Apps with React_page-0001 (1).jpg", import.meta.url).href,
      imageAlt: "React certificate by IBM on coursera",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/c828489f3df9bbadecaf84956202d3c2",
        },
      ],
    },
    {
      title: "Node.js certificate",
      subtitle:
        "Node.js and Express course by IBM on coursera.",
      image: new URL("./assets/images/Developing Back-End Apps with Node.js and Express.jpg", import.meta.url).href,
      imageAlt: "Node.js and express.js certificate by IBM on coursera",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/661c5de2410ad6d1a14d5d4af40b6f59",
        },
      ],
    },
    {
      title: "Star Achiever Award",
      subtitle: "Star Achiever Award from Yash Technologies.",
      image: new URL("./assets/images/Award Priyanshu Patidar.jpg", import.meta.url).href,
      imageAlt: "Star Achiever Award",
      footerLink: [
        {
          name: "View Certificate",
          url: "static/media/Award%20Priyanshu%20Patidar.6b456d498bd824d4f192.jpg",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: "Podcast 🎙️",
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8871714038",
  email_address: "patidarpriyanshu921@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Priyanshu004", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
